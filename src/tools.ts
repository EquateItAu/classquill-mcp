import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import type { ToolDef } from "./types.js";
import { GENERATED_TOOLS } from "./tools.generated.js";

export type { ToolArg, ToolDef } from "./types.js";

/**
 * The tool list is generated from the public OpenAPI spec (run `npm run
 * gen:tools`), so it can never drift from the real /v1 surface. Each tool maps
 * 1:1 to a read-only GET route on the EquateIt public API. This server is a thin
 * proxy: it forwards the caller's API key to /v1 and returns the JSON verbatim.
 * All access control, org-scoping and rate-limiting is enforced by /v1.
 */
export const TOOLS: ToolDef[] = GENERATED_TOOLS;

function inputSchema(def: ToolDef) {
  const properties: Record<string, { type: string; description: string }> = {};
  const required: string[] = [];
  for (const a of def.args) {
    properties[a.name] = { type: a.type ?? "string", description: a.description };
    if (a.required) required.push(a.name);
  }
  return { type: "object" as const, properties, required };
}

/**
 * Build the absolute /v1 URL for a tool call. Pure + exported for unit tests.
 * Path args fill `{...}` segments; remaining args become query params (blank /
 * null / undefined values are skipped). Throws if a required path arg is absent.
 */
export function buildUrl(apiBase: string, def: ToolDef, args: Record<string, unknown>): string {
  let path = def.pathTemplate;
  const query: Record<string, unknown> = {};
  for (const a of def.args) {
    const v = args?.[a.name];
    if (a.in === "path") {
      if (v === undefined || v === null || v === "") {
        throw new Error(`Missing required path argument '${a.name}'`);
      }
      path = path.replace(`{${a.name}}`, encodeURIComponent(String(v)));
    } else if (v !== undefined && v !== null && v !== "") {
      query[a.name] = v;
    }
  }
  const url = new URL(`${apiBase.replace(/\/$/, "")}/v1${path}`);
  for (const [k, v] of Object.entries(query)) url.searchParams.set(k, String(v));
  return url.toString();
}

/**
 * Pick the /v1 Authorization scheme from the credential shape:
 *   ei_live_… / ei_test_…  → `Token token=…`  (org API key)
 *   anything else          → `Bearer …`       (OAuth access token, e.g. from Claude)
 * Pure + exported for unit tests.
 */
export function authHeader(credential: string): string {
  return /^ei_(live|test)_[a-f0-9]+$/.test(credential)
    ? `Token token=${credential}`
    : `Bearer ${credential}`;
}

async function callV1(
  apiKey: string,
  apiBase: string,
  def: ToolDef,
  args: Record<string, unknown>,
) {
  const url = buildUrl(apiBase, def, args);
  // The caller's credential is either an org API key (ei_…) or an OAuth access
  // token; authHeader() picks the right /v1 scheme. Every tool is a read-only GET.
  const r = await fetch(url, {
    headers: { Authorization: authHeader(apiKey), Accept: "application/json" },
  });
  const text = await r.text();
  if (!r.ok) {
    return { content: [{ type: "text" as const, text: `HTTP ${r.status}: ${text}` }], isError: true };
  }
  return { content: [{ type: "text" as const, text }] };
}

/**
 * Build a fresh MCP Server bound to one caller's raw API key (`ei_live_...`).
 * In HTTP mode the server is created per request so the key never leaks across
 * callers; in stdio mode there is exactly one caller (the local process owner).
 */
export function buildServer(apiKey: string, apiBase: string): Server {
  const server = new Server(
    { name: "equateit", version: "1.0.0" },
    { capabilities: { tools: {} } },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: TOOLS.map((t) => ({
      name: t.name,
      description: t.description,
      inputSchema: inputSchema(t),
    })),
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const def = TOOLS.find((t) => t.name === request.params.name);
    if (!def) {
      return { content: [{ type: "text", text: `Unknown tool: ${request.params.name}` }], isError: true };
    }
    try {
      return await callV1(apiKey, apiBase, def, request.params.arguments ?? {});
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return { content: [{ type: "text", text: `Error: ${message}` }], isError: true };
    }
  });

  return server;
}
