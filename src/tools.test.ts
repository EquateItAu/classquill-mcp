import { describe, it, expect } from "vitest";
import { authHeader, buildUrl, TOOLS, type ToolDef } from "./tools.js";

const base = "https://api.example.com";

function tool(name: string): ToolDef {
  const t = TOOLS.find((x) => x.name === name);
  if (!t) throw new Error(`no such tool ${name}`);
  return t;
}

describe("buildUrl", () => {
  it("substitutes path params and url-encodes them", () => {
    const url = buildUrl(base, tool("get_session"), { session_id: "abc/123" });
    expect(url).toBe("https://api.example.com/v1/sessions/abc%2F123");
  });

  it("appends provided query params and skips blank/null/undefined ones", () => {
    const url = buildUrl(base, tool("list_sessions"), {
      status: "completed",
      from: "",
      to: undefined,
      limit: 25,
    });
    const parsed = new URL(url);
    expect(parsed.pathname).toBe("/v1/sessions");
    expect(parsed.searchParams.get("status")).toBe("completed");
    expect(parsed.searchParams.get("limit")).toBe("25");
    expect(parsed.searchParams.has("from")).toBe(false);
    expect(parsed.searchParams.has("to")).toBe(false);
  });

  it("throws when a required path param is missing", () => {
    expect(() => buildUrl(base, tool("get_session"), {})).toThrow(/session_id/);
  });

  it("strips a trailing slash from the api base so it isn't doubled", () => {
    const url = buildUrl("https://api.example.com/", tool("ping"), {});
    expect(url).toBe("https://api.example.com/v1/ping");
  });
});

describe("authHeader", () => {
  it("uses the Token scheme for org API keys (ei_live_ / ei_test_)", () => {
    expect(authHeader("ei_live_deadbeef00")).toBe("Token token=ei_live_deadbeef00");
    expect(authHeader("ei_test_abc123")).toBe("Token token=ei_test_abc123");
  });

  it("uses the Bearer scheme for OAuth access tokens (anything else)", () => {
    expect(authHeader("a1b2c3d4e5f6")).toBe("Bearer a1b2c3d4e5f6");
  });

  it("does not mistake an ei_-prefixed non-key for an API key", () => {
    // Uppercase / non-hex → not a valid ei_ key → treated as an OAuth token.
    expect(authHeader("ei_live_XYZ")).toBe("Bearer ei_live_XYZ");
  });
});
