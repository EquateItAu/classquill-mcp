export interface ToolArg {
  name: string;
  description: string;
  /** Path params are substituted into `pathTemplate`; everything else is a query param. */
  in: "path" | "query";
  required?: boolean;
  type?: "string" | "number";
}

export interface ToolDef {
  name: string;
  description: string;
  /** e.g. "/sessions/{session_id}" — `{...}` segments are filled from path args. */
  pathTemplate: string;
  /** HTTP method (currently always GET — the public API is read-only). */
  method: string;
  args: ToolArg[];
  /**
   * JSON Schema (Draft 2020-12) for the /v1 response body, dereferenced from
   * the OpenAPI spec's component schemas into a self-contained `$defs` block.
   * Absent for the rare tool whose response has no schema in the spec.
   */
  outputSchema?: Record<string, unknown>;
  /**
   * True when the raw /v1 response is a bare JSON array. MCP's structuredContent
   * must be an object, so such responses are reported under `outputSchema` as
   * `{ items: [...] }` — callV1() must wrap the parsed array the same way.
   */
  wrapArrayOutput?: boolean;
}
