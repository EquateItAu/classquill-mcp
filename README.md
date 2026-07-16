# ClassQuill MCP server

[![smithery badge](https://smithery.ai/badge/collisbrandon02/classquill)](https://smithery.ai/servers/collisbrandon02/classquill)

Give any MCP-aware AI tool — **Claude, Codex, Cursor, Windsurf, Composio, and more** —
read access to your **ClassQuill** tutoring-business data: sessions, students, tutors,
parents, invoices, payments, lesson plans, bookings, earnings, and reports.

It's a thin, read-only proxy over the [ClassQuill public API](https://api.classquill.com)
(`/v1`). Each tool maps 1:1 to a public API endpoint, so the tool list can never drift from
the real API. Your credentials never leave your machine (or, in hosted mode, your request).

> ClassQuill is the tutoring-business-management platform by EquateIt. The npm package is
> published as `equateit-mcp`.

## Two ways to use it

### 1. Hosted (recommended — nothing to install)
Point any remote-MCP client at the hosted server:

```
https://mcp.classquill.com/mcp
```

- **Claude / Claude.ai** — add it as a custom connector and sign in (OAuth).
- **Codex** — `codex mcp add classquill --url https://mcp.classquill.com/mcp`
- **Any client** — pass your API key as a Bearer token: `Authorization: Bearer ei_live_…`

### 2. Local (run it yourself via npx)
```bash
npx -y equateit-mcp        # stdio, reads EQUATEIT_API_KEY
```

Claude Code:
```bash
claude mcp add classquill -e EQUATEIT_API_KEY=ei_live_xxxx -- npx -y equateit-mcp
```

Cursor / Claude Desktop / Windsurf (`mcpServers` config):
```json
{
  "mcpServers": {
    "classquill": {
      "command": "npx",
      "args": ["-y", "equateit-mcp"],
      "env": { "EQUATEIT_API_KEY": "ei_live_xxxx" }
    }
  }
}
```

## Getting an API key
Create one in the ClassQuill app under **Settings → Developers** (org admins). Keys look like
`ei_live_…` and are read-only for this server.

## Tools
One read-only tool per `/v1` GET route — sessions, students, tutors, parents, invoices,
payments, lesson-plans, homework, questions, subjects, files, results, availabilities,
coverage, reports, and more. The list is **generated from the public OpenAPI spec**
(`npm run gen:tools`) so it always matches the live API.

## Options & environment
| Flag | Env var | Default | Purpose |
|------|---------|---------|---------|
| `--key` | `EQUATEIT_API_KEY` | — | Your `ei_live_…` key (stdio mode). |
| `--http` | — | off | Run as an HTTP (Streamable HTTP) server instead of stdio. |
| `--port` / `-p` | `MCP_PORT` | `3000` | HTTP port. |
| — | `EQUATEIT_API_BASE_URL` | `https://api.classquill.com` | API base (no trailing `/v1`). |

In HTTP mode, each request supplies its own credential as `Authorization: Bearer …` — an
`ei_live_…` API key or an OAuth access token.

## Develop
```bash
npm install
npm run build     # → dist/
npm test          # unit tests (url builder + auth scheme)
```

Self-hosting the HTTP server is a single container — see `Dockerfile`.

## License
MIT — see `LICENSE`.
