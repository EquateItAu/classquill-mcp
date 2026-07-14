#!/usr/bin/env node
import express, { type Request, type Response } from "express";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { buildServer } from "./tools.js";

/**
 * EquateIt MCP server — read-only access to your org's data via the public API.
 *
 * Distribution model mirrors resend-mcp: this is an npm package customers run
 * themselves (`npx -y equateit-mcp`), NOT a service EquateIt hosts. It calls the
 * already-deployed public REST API (/v1) with the customer's own API key, so
 * there is nothing for EquateIt to deploy beyond publishing the package.
 *
 *   stdio (default):  key from EQUATEIT_API_KEY env var or --key
 *   http  (--http):   key from each request's `Authorization: Bearer ei_live_...`
 *
 * In both modes the bare key is translated to the /v1 `Token token=` scheme
 * inside tools.ts, so customers only ever handle the raw `ei_live_...` value.
 */

const API_BASE = process.env.EQUATEIT_API_BASE_URL ?? "https://api.classquill.com";
const KEY_RE = /^ei_(live|test)_[a-f0-9]+$/;

// Public identity of this hosted MCP server, for OAuth discovery (Claude, etc.).
const PUBLIC_MCP_URL = process.env.MCP_PUBLIC_URL ?? "https://mcp.classquill.com/mcp";
const AUTH_SERVER = process.env.MCP_AUTH_SERVER ?? "https://api.classquill.com";
const RESOURCE_METADATA_URL = new URL(
  "/.well-known/oauth-protected-resource",
  PUBLIC_MCP_URL,
).toString();

interface Args {
  http: boolean;
  port: number;
  key?: string;
}

function parseArgs(argv: string[]): Args {
  const out: Args = { http: false, port: Number(process.env.MCP_PORT ?? 3000) };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--http") out.http = true;
    else if (a === "--port" || a === "-p") out.port = Number(argv[++i]);
    else if (a === "--key") out.key = argv[++i];
  }
  return out;
}

async function runStdio(key: string) {
  if (!KEY_RE.test(key)) {
    console.error("Invalid API key. Expected an EquateIt key like 'ei_live_...'.");
    process.exit(1);
  }
  const server = buildServer(key, API_BASE);
  await server.connect(new StdioServerTransport());
  console.error(`EquateIt MCP (stdio) ready → ${API_BASE}/v1`);
}

function runHttp(port: number) {
  const app = express();
  app.use(express.json());
  app.get("/health", (_req, res) => res.json({ ok: true }));

  // OAuth 2.0 protected-resource metadata (RFC 9728) — tells MCP clients (Claude)
  // which authorization server to use. Its counterpart lives on the API host at
  // /.well-known/oauth-authorization-server.
  app.get("/.well-known/oauth-protected-resource", (_req, res) => {
    res.json({ resource: PUBLIC_MCP_URL, authorization_servers: [AUTH_SERVER] });
  });

  app.post("/mcp", async (req: Request, res: Response) => {
    const auth = req.headers["authorization"];
    const credential = typeof auth === "string" ? auth.replace(/^Bearer\s+/i, "").trim() : "";
    if (!credential) {
      // Point the client at the resource metadata so it can begin the OAuth flow.
      res
        .status(401)
        .set("WWW-Authenticate", `Bearer resource_metadata="${RESOURCE_METADATA_URL}"`)
        .json({
          jsonrpc: "2.0",
          id: null,
          error: { code: -32001, message: "Authentication required" },
        });
      return;
    }
    // Accept both an org API key (ei_…) and an OAuth access token — /v1 validates
    // the credential and rejects anything invalid. Stateless: a fresh server +
    // transport per request, bound to this caller's credential.
    const server = buildServer(credential, API_BASE);
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
    res.on("close", () => {
      void transport.close();
      void server.close();
    });
    try {
      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
    } catch (err) {
      console.error("MCP request failed:", err);
      if (!res.headersSent) {
        res.status(500).json({ jsonrpc: "2.0", id: null, error: { code: -32603, message: "Internal error" } });
      }
    }
  });

  // GET/DELETE are for stateful SSE sessions this stateless server doesn't use.
  const notAllowed = (_req: Request, res: Response) =>
    res.status(405).json({ jsonrpc: "2.0", id: null, error: { code: -32000, message: "Use POST." } });
  app.get("/mcp", notAllowed);
  app.delete("/mcp", notAllowed);

  app.listen(port, () => {
    console.error(`EquateIt MCP (http) on http://127.0.0.1:${port}/mcp → ${API_BASE}/v1`);
  });
}

const args = parseArgs(process.argv.slice(2));
if (args.http) {
  runHttp(args.port);
} else {
  const key = args.key ?? process.env.EQUATEIT_API_KEY ?? process.env.EQUATEIT_V1_API_KEY ?? "";
  if (!key) {
    console.error("No API key. Set EQUATEIT_API_KEY (or EQUATEIT_V1_API_KEY) or pass --key ei_live_...");
    process.exit(1);
  }
  void runStdio(key);
}
