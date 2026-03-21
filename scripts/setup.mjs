import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const apiEnvPath = resolve(rootDir, "apps/api/.env");
const apiSampleEnvPath = resolve(rootDir, "apps/api/sample.env");

function quoteWindowsArg(argument) {
	return argument.includes(" ")
		? `"${argument.replaceAll('"', '\\"')}"`
		: argument;
}

function run(command, args) {
	const result =
		process.platform === "win32" && (command === "pnpm" || command === "npm")
			? spawnSync(
					"cmd.exe",
					[
						"/d",
						"/s",
						"/c",
						`${command} ${args.map(quoteWindowsArg).join(" ")}`,
					],
					{
						cwd: rootDir,
						stdio: "inherit",
						shell: false,
						windowsHide: true,
					},
				)
			: spawnSync(command, args, {
					cwd: rootDir,
					stdio: "inherit",
					shell: false,
					windowsHide: true,
				});

	if (result.status !== 0) {
		process.exit(result.status ?? 1);
	}
}

function hasCommand(command, args = ["--version"]) {
	const result =
		process.platform === "win32" && (command === "pnpm" || command === "npm")
			? spawnSync(
					"cmd.exe",
					[
						"/d",
						"/s",
						"/c",
						`${command} ${args.map(quoteWindowsArg).join(" ")}`,
					],
					{
						cwd: rootDir,
						stdio: "ignore",
						shell: false,
						windowsHide: true,
					},
				)
			: spawnSync(command, args, {
					cwd: rootDir,
					stdio: "ignore",
					shell: false,
					windowsHide: true,
				});

	return result.status === 0;
}

if (!existsSync(apiEnvPath) && existsSync(apiSampleEnvPath)) {
	copyFileSync(apiSampleEnvPath, apiEnvPath);
	console.log("[setup] created apps/api/.env from apps/api/sample.env");
} else {
	console.log("[setup] apps/api/.env already exists");
}

console.log("[setup] installing workspace dependencies");
run("pnpm", ["install"]);

console.log("");
console.log("[setup] next steps");
console.log("1. If you use Docker for Postgres: pnpm db:start");
console.log("2. Apply the schema: pnpm db:push");
console.log("3. Start the app: pnpm dev");
console.log("4. Run diagnostics anytime: pnpm repo:doctor");

if (!hasCommand("docker")) {
	console.log("");
	console.log("[setup] docker is not installed or not on PATH");
	console.log(
		"[setup] if you are using a local Postgres install instead, update apps/api/.env before running pnpm db:push",
	);
}
