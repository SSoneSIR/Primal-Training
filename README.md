# primal-training

A modern full-stack TypeScript monorepo for Primal Training, built with Next.js, NestJS, Drizzle ORM, PostgreSQL, Turborepo, and pnpm workspaces. The repository is set up to run locally or inside GitHub Codespaces with the same Bullhouse-style developer workflow.

## Quick Start For Juniors

From the repo root:

```bash
pnpm setup
pnpm repo:doctor
pnpm db:push
pnpm dev
```

Read these first:

- `docs/START-HERE.md`
- `docs/BUILDING-GUIDE.md`

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [GitHub Codespaces](#github-codespaces)
- [Configuration](#configuration)
- [Running the Applications](#running-the-applications)
- [Available Scripts](#available-scripts)
- [Development Workflow](#development-workflow)
- [Common Issues & Troubleshooting](#common-issues--troubleshooting)

## Features

### Frontend

- **Next.js 16** - App Router based frontend with modern React server/client rendering
- **React 19** - Latest React runtime for the client application
- **Tailwind CSS 4** - Utility-first styling for the web app
- **Motion** - Animation library for richer UI interactions
- **TanStack Query** - Data fetching and cache management foundation

### Backend

- **NestJS 11** - Structured backend framework for APIs and services
- **Swagger/OpenAPI** - API documentation exposed at `/api`
- **Zod** - Shared validation-friendly utility dependency

### Packages

- **@primal-training/db** - Centralized Drizzle ORM config, schema, and DB scripts
- **@primal-training/email** - Basic mail transport helper package
- **@primal-training/otp** - OTP generation and matching helpers
- **@primal-training/storage** - Shared storage config helpers

### Developer Experience

- **TypeScript** - End-to-end typed workspace
- **Turborepo** - Monorepo task orchestration
- **pnpm** - Fast workspace-aware package management
- **Biome** - Formatting and linting
- **GitHub Codespaces** - Preconfigured devcontainer for cloud development
- **Docker Compose** - PostgreSQL setup via `packages/db/docker-compose.yml`

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1. **Node.js 22 or newer**
   - Recommended: use the version provided by GitHub Codespaces or a local Node 22 install
   - Verify installation: `node --version`

2. **pnpm** (v10 or higher)
   - Recommended via Corepack:
     ```bash
     corepack enable
     corepack install
     ```
   - Verify installation: `pnpm --version`

3. **Docker & Docker Compose** (for PostgreSQL)
   - Verify installation: `docker --version` and `docker compose version`
   - Make sure Docker is running before starting the database

4. **Git**
   - Verify installation: `git --version`

> **Note:** If you use GitHub Codespaces, Node.js, pnpm, and Docker access are already handled by the devcontainer setup.

## Project Structure

This repository is a Turborepo monorepo with apps at the top level and shared packages in `packages/`.

```text
primal-training/
├── .devcontainer/           # GitHub Codespaces / devcontainer setup
├── apps/
│   ├── client/              # Next.js frontend (port 3000)
│   │   ├── app/
│   │   ├── next.config.ts
│   │   └── package.json
│   └── api/                 # NestJS backend (port 5000)
│       ├── src/
│       ├── nest-cli.json
│       ├── sample.env
│       └── package.json
├── packages/
│   ├── db/                  # Drizzle ORM + PostgreSQL scripts
│   │   ├── src/schema/
│   │   ├── drizzle.config.ts
│   │   └── docker-compose.yml
│   ├── email/               # Shared email utilities
│   ├── otp/                 # Shared OTP utilities
│   └── storage/             # Shared storage utilities
├── turbo.json               # Turborepo task config
├── pnpm-workspace.yaml      # pnpm workspace config
└── package.json             # Root scripts and dependencies
```

### Understanding the Monorepo Structure

#### Applications (`apps/`)

- **`apps/client`**: Next.js 16 frontend starter running on port **3000**
- **`apps/api`**: NestJS API starter running on port **5000**

#### Packages (`packages/`)

- **`@primal-training/db`**: Drizzle configuration, schema definitions, and PostgreSQL lifecycle scripts
- **`@primal-training/email`**: Shared email transport wrapper
- **`@primal-training/otp`**: OTP generation and comparison helpers
- **`@primal-training/storage`**: Shared storage config/path helpers

## Getting Started

Follow these steps to get your development environment running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/SSoneSIR/Primal-Training.git
cd Primal-Training
```

### 2. Install Dependencies

Install dependencies for the whole monorepo:

```bash
pnpm install
```

If you want the fastest setup path instead of doing the steps manually:

```bash
pnpm setup
```

### 3. Set Up Environment Variables

Create a local API environment file from the provided template:

```bash
cp apps/api/sample.env apps/api/.env
```

The default template is already aligned with the local Docker PostgreSQL container:

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/primal_training
```

### 4. Start PostgreSQL

Start the local database container:

```bash
pnpm db:start
```

Useful database container commands:

```bash
pnpm db:watch
pnpm db:stop
pnpm db:down
```

### 5. Initialize the Database

Apply schema changes to the database:

```bash
pnpm db:migrate
```

Optional:

```bash
pnpm db:generate
pnpm db:push
pnpm db:studio
pnpm db:seed
```

### 6. Start the Development Servers

Run the client and API together:

```bash
pnpm dev
```

### 7. Access Your Applications

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **Swagger Docs**: [http://localhost:5000/api](http://localhost:5000/api)

## GitHub Codespaces

This repository includes a ready-to-use devcontainer at `.devcontainer/devcontainer.json`.

When you open the project in GitHub Codespaces:

1. the container uses a Node.js 22 dev image
2. Docker access is enabled for the PostgreSQL container workflow
3. `pnpm install` runs automatically via `postCreateCommand`
4. `apps/api/.env` is created from `apps/api/sample.env` if it does not exist

Forwarded ports are preconfigured for:

- `3000` - Primal Training client
- `5000` - Primal Training API
- `5432` - PostgreSQL

Typical Codespaces workflow:

```bash
pnpm db:start
pnpm dev
```

## Configuration

### API Environment Variables

The API reads configuration from `apps/api/.env`.

Key variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend API port | `5000` |
| `NODE_ENV` | Environment mode | `development` |
| `CORS_ORIGINS` | Allowed frontend origins | `http://localhost:3000` |
| `FRONTEND_BASE_URL` | Frontend base URL | `http://localhost:3000` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:password@localhost:5432/primal_training` |

### Database Configuration

The database package loads `apps/api/.env` through `packages/db/drizzle.config.ts`, so most database commands work from the shared API environment file without extra setup.

### Port Configuration

Default ports:

- **Client**: `3000`
- **API**: `5000`
- **PostgreSQL**: `5432`

If you change ports:

1. update the app script or env value
2. update `CORS_ORIGINS`
3. update any frontend API base URLs you add later

## Running the Applications

### Run Everything Together

```bash
pnpm dev
```

This starts both the Next.js client and the NestJS API through Turbo.

### Run Individual Applications

**Frontend only:**

```bash
pnpm dev:web
```

**Backend only:**

```bash
pnpm dev:server
```

### Production Build & Start

Build the whole monorepo:

```bash
pnpm build
```

Start production tasks:

```bash
pnpm start
```

> **Note:** The root `start` command expects package-level start scripts. Right now the client and API starters are set up primarily for development and build validation.

### Database Commands

| Command | Description |
|---------|-------------|
| `pnpm db:start` | Start PostgreSQL container in detached mode |
| `pnpm db:watch` | Start PostgreSQL container with logs attached |
| `pnpm db:stop` | Stop the PostgreSQL container |
| `pnpm db:down` | Stop and remove the PostgreSQL container |
| `pnpm db:push` | Push schema directly to the database |
| `pnpm db:studio` | Open Drizzle Studio |
| `pnpm db:generate` | Generate migrations |
| `pnpm db:migrate` | Run migrations |
| `pnpm db:seed` | Run the seed script |

## Available Scripts

### Root

| Script | Description |
|--------|-------------|
| `pnpm setup` | Install dependencies, create `apps/api/.env` if needed, and print next steps |
| `pnpm repo:doctor` | Check env setup, database connectivity, Docker status, and local app status |
| `pnpm dev` | Run all app dev processes |
| `pnpm build` | Build all apps and packages |
| `pnpm start` | Run package start scripts |
| `pnpm check` | Run Biome formatting/linting with write mode |
| `pnpm check-types` | Type check all workspaces |
| `pnpm dev:web` | Run only the frontend |
| `pnpm dev:server` | Run only the backend |
| `pnpm db:start` | Start PostgreSQL through the DB package |
| `pnpm db:watch` | Start PostgreSQL with live logs |
| `pnpm db:stop` | Stop PostgreSQL |
| `pnpm db:down` | Remove PostgreSQL container |
| `pnpm db:push` | Push schema changes |
| `pnpm db:studio` | Open Drizzle Studio |
| `pnpm db:generate` | Generate migrations |
| `pnpm db:migrate` | Apply migrations |
| `pnpm db:seed` | Run the DB seed script |

## Extra Docs

- `docs/START-HERE.md` for first-time contributors
- `docs/BUILDING-GUIDE.md` for feature work conventions

## Development Workflow

### Adding New Dependencies

Add a dependency at the workspace root:

```bash
pnpm add -w <package-name>
```

Add to a specific app/package:

```bash
pnpm add <package-name> --filter client
pnpm add <package-name> --filter api
pnpm add <package-name> --filter @primal-training/db
pnpm add <package-name> --filter @primal-training/email
pnpm add <package-name> --filter @primal-training/otp
pnpm add <package-name> --filter @primal-training/storage
```

### Working with the Database

1. Edit schema files in `packages/db/src/schema/`
2. Push or generate migrations:

```bash
pnpm db:push
pnpm db:generate
pnpm db:migrate
```

3. Inspect data with:

```bash
pnpm db:studio
```

### Extending the API

Add Nest modules under `apps/api/src/` and register them in `apps/api/src/app.module.ts`.

Suggested module shape:

- `feature.module.ts`
- `feature.controller.ts`
- `feature.service.ts`
- `dto/`

### Extending the Frontend

Add new pages and routes inside `apps/client/app/` following the Next.js App Router structure.

Examples:

- `apps/client/app/page.tsx` → `/`
- `apps/client/app/about/page.tsx` → `/about`
- `apps/client/app/programs/[slug]/page.tsx` → `/programs/:slug`

## Common Issues & Troubleshooting

### Issue: `pnpm` not found

Use Corepack:

```bash
corepack enable
corepack install
```

### Issue: Database connection fails

Check the container is running:

```bash
docker ps
pnpm db:start
```

Make sure `DATABASE_URL` in `apps/api/.env` matches the local container config.

### Issue: Ports already in use

Default ports used by this project:

- `3000` for the client
- `5000` for the API
- `5432` for PostgreSQL

Stop conflicting processes or change your local configuration.

### Issue: Drizzle commands fail

Make sure:

1. `apps/api/.env` exists
2. `DATABASE_URL` is present
3. PostgreSQL is running

### Issue: Codespaces database commands do not work

Ensure the Codespace has fully completed the devcontainer setup, then rerun:

```bash
pnpm db:start
```

### Issue: TypeScript errors after dependency changes

Reinstall and rerun checks:

```bash
pnpm install
pnpm check-types
```

### Issue: Build artifacts seem stale

Remove generated directories and rebuild:

```bash
pnpm build
```

If needed, manually remove `.turbo`, `.next`, and `dist` folders before rebuilding.

---

Primal Training is now set up with the same monorepo development style as Bullhouse, with a README that matches that level of documentation while staying accurate to this repository.
