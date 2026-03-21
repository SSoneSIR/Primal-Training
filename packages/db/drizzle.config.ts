import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";
import { defineConfig } from "drizzle-kit";

const currentDir = dirname(fileURLToPath(import.meta.url));
const apiEnvPath = resolve(currentDir, "../../apps/api/.env");

loadEnv({ path: apiEnvPath });

export default defineConfig({
	out: "./drizzle",
	schema: "./src/schema/*.ts",
	dialect: "postgresql",
	dbCredentials: {
		url:
			process.env.DATABASE_URL ??
			"postgresql://postgres:password@localhost:5432/primal_training",
	},
});
