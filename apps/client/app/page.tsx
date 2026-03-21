const commands = [
	"pnpm db:start",
	"pnpm dev",
	"pnpm dev:web",
	"pnpm dev:server",
	"pnpm db:migrate",
];

const stack = [
	"Next.js 16",
	"React 19",
	"Tailwind CSS 4",
	"NestJS 11",
	"Drizzle ORM",
	"PostgreSQL",
	"pnpm workspaces",
	"Turborepo",
];

export default function HomePage() {
	return (
		<main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10 md:px-10 md:py-16">
			<section className="grid gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--card)]/90 p-8 shadow-[0_30px_80px_var(--shadow)] backdrop-blur md:grid-cols-[1.5fr_0.9fr] md:p-12">
				<div className="space-y-6">
					<div className="inline-flex w-fit rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted-foreground)]">
						Bullhouse-aligned starter
					</div>
					<div className="space-y-4">
						<h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
							Primal Training is ready for Codespaces.
						</h1>
						<p className="max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
							This repo ships with the same base stack as Bullhouse: a Turbo
							monorepo, Next client, Nest API, shared packages, and a
							Docker-backed PostgreSQL workflow.
						</p>
					</div>
				</div>

				<div className="rounded-[1.75rem] border border-[var(--border)] bg-[#201510] p-6 text-[var(--accent-foreground)]">
					<p className="text-sm uppercase tracking-[0.25em] text-[#c9b6aa]">
						First commands
					</p>
					<div className="mt-4 space-y-3">
						{commands.map((command) => (
							<div
								className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm"
								key={command}
							>
								{command}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{stack.map((item) => (
					<article
						className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)]/85 p-5 shadow-[0_20px_50px_var(--shadow)]"
						key={item}
					>
						<p className="text-sm uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
							Stack
						</p>
						<h2 className="mt-3 text-2xl font-semibold">{item}</h2>
					</article>
				))}
			</section>
		</main>
	);
}
