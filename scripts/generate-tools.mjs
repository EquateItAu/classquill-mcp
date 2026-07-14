// Generate src/tools.generated.ts from the committed OpenAPI spec, so the MCP
// tool list can never drift from the real /v1 surface. Run: `npm run gen:tools`.
//
// Each /v1 operation becomes one tool: the name is the FastAPI function name
// (operationId minus the `_v1_..._<method>` suffix), the description is the
// route summary/docstring, and the args are the path + query params (the
// `authorization` header is dropped — the proxy injects auth itself).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SPEC = resolve(here, "../../../docs/public-api/openapi.json");
const OUT = resolve(here, "../src/tools.generated.ts");

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"];

const spec = JSON.parse(readFileSync(SPEC, "utf8"));
const tools = [];

for (const [path, item] of Object.entries(spec.paths || {})) {
  for (const [method, op] of Object.entries(item)) {
    if (!HTTP_METHODS.includes(method) || !op || !op.operationId) continue;

    const name = op.operationId.split("_v1_")[0];
    const description =
      op.summary ||
      (op.description || "")
        .split("\n")
        .map((s) => s.trim())
        .find(Boolean) ||
      name;

    const args = [];
    for (const p of op.parameters || []) {
      if (p.in === "header" || p.name === "authorization") continue;
      const schemaType = p.schema && p.schema.type;
      const type = schemaType === "integer" || schemaType === "number" ? "number" : "string";
      args.push({
        name: p.name,
        description: (p.description || "").trim(),
        in: p.in,
        required: Boolean(p.required),
        type,
      });
    }

    tools.push({
      name,
      description: description.trim(),
      pathTemplate: path.replace(/^\/v1/, ""),
      method: method.toUpperCase(),
      args,
    });
  }
}

const body = `// AUTO-GENERATED from docs/public-api/openapi.json by scripts/generate-tools.mjs.
// Do NOT edit by hand — run \`npm run gen:tools\` to regenerate after the API changes.
import type { ToolDef } from "./types.js";

export const GENERATED_TOOLS: ToolDef[] = ${JSON.stringify(tools, null, 2)};
`;

writeFileSync(OUT, body, "utf8");
console.log(`Wrote ${OUT} (${tools.length} tools)`);
