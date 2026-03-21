#!/usr/bin/env bash
set -euo pipefail

if command -v corepack >/dev/null 2>&1; then
	corepack install || true
fi

if [ ! -f apps/api/.env ] && [ -f apps/api/sample.env ]; then
	cp apps/api/sample.env apps/api/.env
fi

pnpm install
