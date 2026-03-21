# Building Guide

This guide is for feature work, not setup.

## Add a New Page

Example:

```text
apps/client/app/programs/page.tsx
apps/client/app/programs/[slug]/page.tsx
```

Use:

- `page.tsx` for the route file
- `layout.tsx` for route-specific layout
- `loading.tsx` for loading states
- `error.tsx` for route-level error handling

## Add a New API Feature

Create a module under `apps/api/src/modules`.

Recommended shape:

```text
apps/api/src/modules/programs/
  programs.module.ts
  programs.controller.ts
  programs.service.ts
  dto/
```

Then import the module into `apps/api/src/app.module.ts`.

## Add Database Tables

1. Add schema to `packages/db/src/schema/`
2. Run:

```bash
pnpm db:push
```

If you need tracked migration files later:

```bash
pnpm db:generate
pnpm db:migrate
```

## Shared Package Rule

If code will be reused by more than one app, move it into `packages/` instead of copying it.

## Definition of Done

Before marking a task done:

```bash
pnpm check-types
pnpm check
pnpm repo:doctor
```
