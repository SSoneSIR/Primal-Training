import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import http from "node:http";
import { createRequire } from "node:module";
import net from "node:net";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const requireFromDb = createRequire(
	resolve(rootDir, "packages/db/package.json"),
);
const envPath = resolve(rootDir, "apps/api/.env");

let hasFailures = false;

function print(status, message) {
	console.log(`[${status}] ${message}`);
}

function ok(message) {
	print("OK", message);
}

function warn(message) {
	print("WARN", message);
}

function fail(message) {
	hasFailures = true;
	print("FAIL", message);
}

function quoteWindowsArg(argument) {
	return argument.includes(" ")
		? `"${argument.replaceAll('"', '\\"')}"`
		: argument;
}

function run(command, args) {
	return process.platform === "win32" &&
		(command === "pnpm" || command === "npm")
		? spawnSync(
				"cmd.exe",
				["/d", "/s", "/c", `${command} ${args.map(quoteWindowsArg).join(" ")}`],
				{
					cwd: rootDir,
					encoding: "utf8",
					shell: false,
					windowsHide: true,
				},
			)
		: spawnSync(command, args, {
				cwd: rootDir,
				encoding: "utf8",
				shell: false,
				windowsHide: true,
			});
}

function parseEnv(content) {
	return Object.fromEntries(
		content
			.split(/\r?\n/)
			.map((line) => line.trim())
			.filter((line) => line && !line.startsWith("#") && line.includes("="))
			.map((line) => {
				const separatorIndex = line.indexOf("=");
				return [line.slice(0, separatorIndex), line.slice(separatorIndex + 1)];
			}),
	);
}

function checkTcpPort(port) {
	return new Promise((resolvePort) => {
		const socket = new net.Socket();
		socket.setTimeout(1200);
		socket
			.once("connect", () => {
				socket.destroy();
				resolvePort(true);
			})
			.once("timeout", () => {
				socket.destroy();
				resolvePort(false);
			})
			.once("error", () => {
				resolvePort(false);
			})
			.connect(port, "127.0.0.1");
	});
}

function checkHttp(url) {
	return new Promise((resolveHttp) => {
		const request = http.get(url, { timeout: 1500 }, (response) => {
			response.resume();
			resolveHttp(response.statusCode ?? 0);
		});

		request.on("timeout", () => {
			request.destroy();
			resolveHttp(0);
		});

		request.on("error", () => {
			resolveHttp(0);
		});
	});
}

async function main() {
	const nodeMajorVersion = Number(process.versions.node.split(".")[0]);
	if (nodeMajorVersion >= 22) {
		ok(`Node.js ${process.versions.node}`);
	} else {
		warn(`Node.js ${process.versions.node} detected. Node 22+ is recommended.`);
	}

	const pnpmResult = run("pnpm", ["--version"]);
	if (pnpmResult.status === 0) {
		ok(`pnpm ${pnpmResult.stdout.trim()}`);
	} else {
		fail("pnpm is not available on PATH");
	}

	if (existsSync(envPath)) {
		ok("apps/api/.env exists");
	} else {
		fail("apps/api/.env is missing. Run pnpm setup first.");
	}

	let databaseUrl = "";
	if (existsSync(envPath)) {
		const env = parseEnv(readFileSync(envPath, "utf8"));
		databaseUrl = env.DATABASE_URL ?? "";
		if (databaseUrl) {
			ok("DATABASE_URL is configured");
		} else {
			fail("DATABASE_URL is missing from apps/api/.env");
		}
	}

	const dockerVersionResult = run("docker", ["--version"]);
	if (dockerVersionResult.status === 0) {
		ok(dockerVersionResult.stdout.trim());
		const dockerInfoResult = run("docker", ["info"]);
		if (dockerInfoResult.status === 0) {
			ok("Docker daemon is reachable");
		} else {
			warn("Docker is installed but the daemon is not currently reachable");
		}
	} else {
		warn("Docker is not installed or not on PATH");
	}

	let Client;
	try {
		({ Client } = requireFromDb("pg"));
		ok("Postgres driver is installed");
	} catch {
		fail("Postgres driver is unavailable. Run pnpm install.");
	}

	if (Client && databaseUrl) {
		try {
			const client = new Client({
				connectionString: databaseUrl,
				connectionTimeoutMillis: 1500,
			});
			await client.connect();
			const dbResult = await client.query(
				"select current_database() as db, current_user as current_user, to_regclass('public.training_programs') as training_programs",
			);
			await client.end();

			const row = dbResult.rows[0];
			ok(`Database reachable: ${row.db} as ${row.current_user}`);
			if (row.training_programs) {
				ok("training_programs table exists");
			} else {
				warn(
					"Database is reachable but schema has not been pushed yet. Run pnpm db:push",
				);
			}
		} catch (error) {
			fail(`Database connection failed: ${error.message}`);
		}
	}

	const port5432 = await checkTcpPort(5432);
	if (port5432) {
		ok("Port 5432 is accepting connections");
	} else {
		warn("Port 5432 is not accepting connections");
	}

	const clientStatus = await checkHttp("http://127.0.0.1:3000");
	if (clientStatus) {
		ok(`Frontend responded on :3000 with status ${clientStatus}`);
	} else {
		warn("Frontend is not running on :3000");
	}

	const apiStatus = await checkHttp("http://127.0.0.1:5000");
	if (apiStatus) {
		ok(`API responded on :5000 with status ${apiStatus}`);
	} else {
		warn("API is not running on :5000");
	}

	console.log("");
	if (hasFailures) {
		console.log("Doctor finished with failures.");
		process.exit(1);
	}

	console.log("Doctor finished with no blocking issues.");
}

main().catch((error) => {
	fail(error.message);
	process.exit(1);
});
