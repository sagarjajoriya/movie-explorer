# Movie Explorer — Frontend

React + TypeScript app built with Vite. Part of a pnpm workspace; see the root `package.json`.

Runs on http://localhost:5173 by default.

## Setup

Install from the **repository root**, not from this folder:

```bash
pnpm install
```

## Run

From the repository root:

```bash
pnpm dev            # backend + frontend together
pnpm dev:frontend   # frontend only
```

The frontend calls the API with relative URLs (`/api/...`). In development, the Vite dev
server proxies `/api` to the backend on http://localhost:3000 (see `vite.config.ts`), so the
backend must be running and there is no CORS setup.

## Build and lint

```bash
pnpm --filter frontend build   # type-check (tsc -b) + production build to dist/
pnpm --filter frontend lint
```

`pnpm dev` does **not** type-check — Vite strips types without checking them. Run `build`
before committing to catch type errors.
