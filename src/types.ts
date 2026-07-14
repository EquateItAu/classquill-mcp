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
}
