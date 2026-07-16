// Generate src/tools.generated.ts from the committed OpenAPI spec, so the MCP
// tool list can never drift from the real /v1 surface. Run: `npm run gen:tools`.
//
// Each /v1 operation becomes one tool: the name is the FastAPI function name
// (operationId minus the `_v1_..._<method>` suffix), the description is the
// route summary/docstring, and the args are the path + query params (the
// `authorization` header is dropped — the proxy injects auth itself). Each
// tool also gets an `outputSchema` dereferenced from the response body's
// OpenAPI schema, so MCP clients can validate/render structured results.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
// Override for standalone checkouts of this repo, which don't carry the monorepo's
// docs/ tree: OPENAPI_SPEC_PATH=/path/to/openapi.json npm run gen:tools
const SPEC = process.env.OPENAPI_SPEC_PATH
  ? resolve(process.env.OPENAPI_SPEC_PATH)
  : resolve(here, "../../../docs/public-api/openapi.json");
const OUT = resolve(here, "../src/tools.generated.ts");

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"];

const spec = JSON.parse(readFileSync(SPEC, "utf8"));
const tools = [];

/**
 * Rewrite every `#/components/schemas/Foo` ref in `node` to the local
 * `#/$defs/Foo` form, recording each referenced schema name into `used`.
 * Pure tree walk — does not resolve/inline the referenced schema itself.
 */
function rewriteRefs(node, used) {
  if (node === null || typeof node !== "object") return node;
  if (Array.isArray(node)) return node.map((n) => rewriteRefs(n, used));
  if (typeof node.$ref === "string") {
    const name = node.$ref.split("/").pop();
    used.add(name);
    return { $ref: `#/$defs/${name}` };
  }
  const out = {};
  for (const [k, v] of Object.entries(node)) out[k] = rewriteRefs(v, used);
  return out;
}

/**
 * Build a self-contained JSON Schema for one operation's 200 response body:
 * the (ref-rewritten) response schema plus a `$defs` block containing every
 * component schema it transitively references. Returns undefined if the
 * operation has no JSON response schema documented.
 */
function buildOutputSchema(op) {
  const raw = op.responses?.["200"]?.content?.["application/json"]?.schema;
  if (!raw) return undefined;

  const componentSchemas = spec.components?.schemas || {};
  const defs = {};
  const rootUsed = new Set();
  let schema = rewriteRefs(raw, rootUsed);

  const queue = [...rootUsed];
  while (queue.length) {
    const name = queue.pop();
    if (defs[name] || !componentSchemas[name]) continue;
    const nestedUsed = new Set();
    defs[name] = rewriteRefs(componentSchemas[name], nestedUsed);
    for (const n of nestedUsed) if (!defs[n]) queue.push(n);
  }

  // A response schema that's just `{"$ref": "#/components/schemas/Foo"}` (the
  // common FastAPI case for single-object responses) can't be the outputSchema
  // root as-is — MCP requires an object-typed root schema, not a bare $ref.
  // Inline the referenced schema at the root instead of leaving $ref there.
  if (schema.$ref) {
    const name = schema.$ref.split("/").pop();
    if (defs[name]) schema = { ...defs[name] };
  }

  let wrapArrayOutput = false;
  if (schema.type === "array") {
    // structuredContent must be a JSON object, not a bare array — wrap it.
    schema = { type: "object", properties: { items: schema }, required: ["items"] };
    wrapArrayOutput = true;
  }
  if (Object.keys(defs).length) schema = { ...schema, $defs: defs };
  return { outputSchema: schema, wrapArrayOutput };
}

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

    const outputInfo = buildOutputSchema(op);

    tools.push({
      name,
      description: description.trim(),
      pathTemplate: path.replace(/^\/v1/, ""),
      method: method.toUpperCase(),
      args,
      ...(outputInfo?.outputSchema ? { outputSchema: outputInfo.outputSchema } : {}),
      ...(outputInfo?.wrapArrayOutput ? { wrapArrayOutput: true } : {}),
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
