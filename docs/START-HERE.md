# Start Here

This repo is prepared so you can start building features immediately instead of spending time on setup.

## First Run

From the repo root:

```bash
pnpm setup
pnpm repo:doctor
pnpm db:push
pnpm dev
```

If your machine uses a local PostgreSQL install instead of Docker, update `apps/api/.env` before running `pnpm db:push`.

## Where To Build

### Frontend

Build pages and UI inside `apps/client`.

Common places:

- `apps/client/app/page.tsx` for the homepage
- `apps/client/app/about/page.tsx` for a new route
- `apps/client/app/programs/[slug]/page.tsx` for dynamic routes
- `apps/client/app/globals.css` for global design tokens and shared styles

Rule:

- If you are adding a page or component for the website, it belongs in `apps/client`

### Backend

Build API features inside `apps/api`.

Suggested structure:

```text
apps/api/src/modules/<feature>/
  <feature>.module.ts
  <feature>.controller.ts
  <feature>.service.ts
  dto/
```

Rule:

- If you are adding endpoints, validation, or business logic, it belongs in `apps/api`

### Shared Logic

Put reusable cross-app logic in `packages`.

- `packages/db` for database schema and Drizzle logic
- `packages/email` for email helpers
- `packages/otp` for OTP helpers
- `packages/storage` for storage helpers

## Commands You Will Actually Use

```bash
pnpm dev
pnpm dev:web
pnpm dev:server
pnpm db:push
pnpm db:studio
pnpm check-types
pnpm check
pnpm repo:doctor
```

## Working Rules

1. Do not edit `dist`, `.next`, or `.turbo` output.
2. Build frontend routes inside `apps/client/app`.
3. Keep backend features inside `apps/api/src/modules`.
4. Run `pnpm check-types` before handing work off.
5. If something is broken locally, run `pnpm repo:doctor` first.

## Before You Ask For Help

Run:

```bash
pnpm repo:doctor
pnpm check-types
```

Then include:

1. the command you ran
2. the exact error
3. whether the issue is frontend, backend, or database
