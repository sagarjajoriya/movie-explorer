# Movie Explorer — Backend

NestJS API for the Movie Explorer app. Part of a pnpm workspace; see the root `package.json`.

Runs on http://localhost:3000 by default.

## Prerequisites

- Node version from the root `.nvmrc`
- pnpm (version pinned in the root `package.json` → `packageManager`)

## Setup

Install from the **repository root**, not from this folder. A workspace has a single
`node_modules` layout and a single `pnpm-lock.yaml` at the root.

```bash
pnpm install
```

## Run

From the repository root:

```bash
# watch mode (development)
pnpm dev:backend
```

Or run any backend script from the root with a filter:

```bash
pnpm --filter backend start        # run once
pnpm --filter backend build        # compile to dist/
pnpm --filter backend start:prod   # run the compiled build
```

## Test

```bash
pnpm --filter backend test         # unit tests
pnpm --filter backend test:e2e     # end-to-end tests
pnpm --filter backend test:cov     # coverage report
```
