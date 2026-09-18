import Link from "next/link";

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

const featureHighlights = [
  {
    title: "Morning brief",
    body: "What to do today, why it fits your iron build, and what changed overnight — readable before you leave the house.",
  },
  {
    title: "Iron-first planning",
    body: "Swim, bike, run, and recovery framed for 140.6 demands — not a generic fitness calendar.",
  },
  {
    title: "Proposal-based changes",
    body: "When the plan needs to move, TriOS suggests adjustments as proposals until you approve them.",
  },
  {
    title: "Athlete-readable context",
    body: "Plain-language explanations so you can trust the day’s work without digging through spreadsheets.",
  },
  {
    title: "Closed training loop",
    body: "Import → understand → plan → execute → learn — connected steps for triathlon, still early alpha.",
  },
  {
    title: "Integrations (roadmap)",
    body: "Garmin, Strava, and Apple Health style connections are planned — not claimed as shipping today.",
  },
];

const loopSteps = [
  { label: "Import", hint: "History & goals" },
  { label: "Understand", hint: "Load & constraints" },
  { label: "Plan", hint: "Proposals you approve" },
  { label: "Execute", hint: "Morning brief" },
  { label: "Learn", hint: "Feed outcomes back" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
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
            <Link
              href="/early-access"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
            >
              Join waitlist
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-slate-400"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Early alpha.{" "}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-slate-500 underline-offset-2 hover:text-slate-200"
            >
              Open TriOS app (staging)
            </a>{" "}
            until the production domain is live.
          </p>
        </div>
      </section>

      {/* Credibility strip — honest early-alpha; no fake testimonials or counts */}
      <section
        className="border-b border-border bg-card"
        aria-labelledby="home-credibility-heading"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="text-sm font-medium text-accent">Built in the open</p>
          <h2
            id="home-credibility-heading"
            className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Credibility without the theater
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            No fabricated testimonials or invented athlete counts. Here&apos;s what TriOS actually
            stands on today — early alpha, iron-first, and athlete approval on plan changes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Status</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">Early alpha + waitlist</h3>
              <p className="mt-2 text-sm text-muted">
                We&apos;re shipping carefully for iron-distance athletes. Join the waitlist for
                updates — free signup, no payment collected here.
              </p>
              <Link
                href="/early-access"
                className="mt-4 inline-flex text-sm font-semibold text-accent hover:text-accent-hover"
              >
                Join waitlist →
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Focus</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">Iron-distance / 140.6 first</h3>
              <p className="mt-2 text-sm text-muted">
                Morning brief clarity for long-course training — what today, why it matters, and
                what changed — before we broaden the audience.
              </p>
              <Link
                href="/faq"
                className="mt-4 inline-flex text-sm font-semibold text-accent hover:text-accent-hover"
              >
                Read the FAQ →
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Control</p>
              <h3 className="mt-2 text-base font-semibold text-foreground">You approve plan changes</h3>
              <p className="mt-2 text-sm text-muted">
                Suggested schedule changes stay proposals until you approve them. TriOS does not
                silently rewrite your calendar.
              </p>
              <Link
                href="/faq"
                className="mt-4 inline-flex text-sm font-semibold text-accent hover:text-accent-hover"
              >
                How approvals work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Morning brief promise */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          The morning brief promise
        </h2>
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

      {/* Feature highlight strip */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-accent">Capabilities</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Built for the iron training week
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                High-level highlights from early-access TriOS. Conservative claims — see the full
                feature set for roadmap notes.
              </p>
            </div>
            <Link
              href="/features"
              className="shrink-0 text-sm font-semibold text-accent hover:text-accent-hover"
            >
              Explore features →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureHighlights.map((f) => (
              <Link
                key={f.title}
                href="/features"
                className="group rounded-2xl border border-border bg-background p-5 shadow-sm transition-colors hover:border-accent/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <h3 className="text-base font-semibold group-hover:text-accent">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closed-loop teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-accent">How it works</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              A closed loop for triathlon
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              TriOS connects import → understand → plan → execute → learn so tomorrow’s brief
              reflects what actually happened — iron-distance first.
            </p>
          </div>
          <Link
            href="/how-it-works"
            className="shrink-0 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            See the full loop →
          </Link>
        </div>

        <ol className="mt-10 grid gap-3 sm:grid-cols-5">
          {loopSteps.map((step, i) => (
            <li
              key={step.label}
              className="relative rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
            >
              <span className="font-mono text-xs font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-semibold text-foreground">{step.label}</p>
              <p className="mt-1 text-xs text-muted">{step.hint}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA band */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="text-xl font-semibold">Built for athletes chasing 140.6</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              TriOS is in early access. We’re shipping carefully, keeping claims conservative, and
              prioritizing the iron-distance loop first. Join the waitlist — staging stays available
              as a secondary link.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/early-access"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
            >
              Join waitlist
            </Link>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
            >
              Open TriOS app (staging)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
