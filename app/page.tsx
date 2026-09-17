import Link from "next/link";

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

export default function HomePage() {
  return (
    <>
      <section className="bg-hero text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-wider text-teal-300">
            Early access · Iron-distance first
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Know what today is for — and why the plan changed.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            TriOS is training software for iron-distance triathlon. Each morning you get a brief:
            what to do today, why it matters for your 140.6 build, and what changed since yesterday —
            so you can train with intent instead of guessing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
            >
              Open TriOS app (staging)
            </a>
            <Link
              href="/how-it-works"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-slate-400"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Staging app link until the production domain is live. Alpha software — expect rough edges.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">The morning brief promise</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Long-course training is complex. TriOS focuses on a simple daily contract: clarity before
          the session starts.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "What today",
              body: "A clear session focus — swim, bike, run, or recovery — framed for your iron build, not a generic calendar dump.",
            },
            {
              title: "Why it matters",
              body: "Context that ties today’s work to the bigger 140.6 arc so you understand the point of the effort.",
            },
            {
              title: "What changed",
              body: "When the plan shifts, TriOS surfaces what moved and why. Plan changes are proposals until you approve them.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-muted">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="text-xl font-semibold">Built for athletes chasing 140.6</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              TriOS is in early access. We’re shipping carefully, keeping claims conservative, and
              prioritizing the iron-distance loop first.
            </p>
          </div>
          <Link
            href="/early-access"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Request early access
          </Link>
        </div>
      </section>
    </>
  );
}
