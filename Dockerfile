# ClassQuill MCP server — hosted (Streamable HTTP) mode.
# Thin proxy to the public /v1 API; holds no data, makes no LLM calls.

FROM node:20-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
# Build from the committed src/tools.generated.ts (invoke tsc directly so the
# package's prebuild tool-gen — which reads an external OpenAPI spec — is skipped).
COPY tsconfig.json ./
COPY src ./src
RUN npx tsc

FROM node:20-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/dist ./dist
ENV PORT=8080
EXPOSE 8080
# Streamable HTTP at POST /mcp, health at GET /health.
CMD ["sh", "-c", "node dist/index.js --http --port ${PORT:-8080}"]
