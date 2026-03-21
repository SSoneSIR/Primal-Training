import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema/training";

export const defaultDatabaseUrl =
	process.env.DATABASE_URL ??
	"postgresql://postgres:password@localhost:5432/primal_training";

export function createDb(connectionString = defaultDatabaseUrl) {
	const pool = new Pool({
		connectionString,
	});

	return drizzle(pool, { schema });
}

export { schema };
