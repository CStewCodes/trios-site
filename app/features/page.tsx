import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description:
    "TriOS capabilities for iron-distance triathlon training — morning brief, proposal-based planning, closed loop. Early access; integrations roadmap.",
};

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

const features = [
  {
    title: "Morning brief",
    status: "Focus of early alpha",
    body: "A daily summary designed to be read before you leave the house: what to do today, why it fits your iron plan, and what changed overnight.",
    points: [
      "Session focus framed for swim, bike, run, or recovery — not a generic calendar dump",
      "Plain-language “why” tied to your 140.6 / iron-distance arc",
      "Surfaces what moved when the plan changed — after you’ve approved proposals",
    ],
  },
  {
    title: "Iron-first planning",
    status: "Focus of early alpha",
    body: "Planning oriented around 140.6 / iron-distance builds: volume, key sessions, and recovery framed for long-course demands.",
    points: [
      "Long-course first — we prioritize iron-distance athletes in early access",
      "Swim / bike / run / recovery shaped around race goals and real constraints",
      "Conservative claims while surfaces are still hardening in early alpha",
    ],
  },
  {
    title: "Proposal-based plan changes",
    status: "Product rule",
    body: "When TriOS suggests adjusting your plan, those changes stay proposals until you approve them. Nothing silently rewrites your calendar.",
    points: [
      "Explicit athlete approval before schedule changes take effect",
      "You see what would change — not a behind-the-scenes edit",
      "Same rule as the rest of TriOS: automation assists; you decide",
    ],
  },
  {
    title: "Closed training loop",
    status: "Focus of early alpha",
    body: "Import → understand → plan → execute → learn. TriOS aims to connect those steps for triathlon, not leave them as disconnected tools.",
    points: [
      "Outcomes feed the next morning brief so the loop actually closes",
      "Triathlon-framed — not cycling-only analytics bolted onto chat",
      "See the full walkthrough on How it works",
    ],
  },
  {
    title: "Athlete-readable context",
    status: "Focus of early alpha",
    body: "Explanations in plain language so you can trust the day’s work without digging through spreadsheets or opaque coach notes.",
    points: [
      "Readable reasons instead of unexplained prescription",
      "Missing or incomplete data called out honestly — not dressed up as “in range”",
      "Early alpha: expect rough edges while we harden clarity",
    ],
  },
  {
    title: "Device & platform integrations",
    status: "Roadmap / planned",
    body: "Garmin, Strava, and Apple Health style connections are on the roadmap / planned — not claimed as live shipping integrations in this early alpha.",
    points: [
      "Official APIs and athlete authorization only — no scraping, no password asks",
      "Until live connections ship, treat device sync as planned, not done",
      "Manual / file import paths may exist in the app; marketing does not equate that to live Garmin/Strava/Health sync",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Product</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Features</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Capabilities for early-access TriOS — iron-distance first, morning-brief clarity, and
        athlete approval on plan changes. We separate what we&apos;re focused on now from what is
        still roadmap. No fake metrics or invented testimonials.
      </p>

      {/* Shipping vs roadmap */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <section
          className="rounded-2xl border-2 border-accent bg-accent-soft p-5 sm:p-6"
          aria-labelledby="shipping-now-heading"
        >
          <h2 id="shipping-now-heading" className="text-base font-semibold text-foreground">
            Focus of early alpha (now)
          </h2>
          <p className="mt-2 text-sm text-muted">
            Morning brief, iron-first planning, proposal-gated changes, closed-loop intent, and
            athlete-readable context. Surfaces are incomplete — early alpha tone applies.
          </p>
          <p className="mt-3 text-sm text-muted">
            Walk the loop on{" "}
            <Link href="/how-it-works" className="font-medium text-accent hover:text-accent-hover">
              How it works
            </Link>
            .
          </p>
        </section>

        <section
          className="rounded-2xl border border-dashed border-border bg-card/60 p-5 sm:p-6"
          aria-labelledby="roadmap-heading"
        >
          <h2 id="roadmap-heading" className="text-base font-semibold text-foreground">
            Roadmap / planned (not live claims)
          </h2>
          <p className="mt-2 text-sm text-muted">
            Live Garmin, Strava, and Apple Health connections — and broader device publish —
            are <strong className="font-medium text-foreground">roadmap / planned</strong>. They are
            not claimed as shipping live sync on this site.
          </p>
          <p className="mt-3 text-sm text-muted">
            Straight answers in the{" "}
            <Link href="/faq" className="font-medium text-accent hover:text-accent-hover">
              FAQ
            </Link>
            .
          </p>
        </section>
      </div>

      {/* Proposal callout */}
      <aside
        className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
        aria-labelledby="features-proposal-heading"
      >
        <h2 id="features-proposal-heading" className="text-base font-semibold text-foreground">
          Plan changes are proposals until you approve
        </h2>
        <p className="mt-2 text-sm text-muted">
          Automation can suggest moves; TriOS does not silently rewrite your calendar. Approved
          proposals only. Same product rule across Brief, Plan, and this marketing site.
        </p>
      </aside>

      {/* Capability grid — same 6, deepened */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">{f.status}</p>
            <h2 className="mt-2 text-lg font-semibold">{f.title}</h2>
            <p className="mt-2 text-sm text-muted">{f.body}</p>
            <ul className="mt-4 flex-1 list-disc space-y-1.5 pl-5 text-sm text-muted">
              {f.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">Try early access</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Join the TriOS waitlist for early-alpha updates. Free signup — pricing comes later.
          Staging stays a secondary link while we iterate.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/early-access"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Join waitlist
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
          >
            How it works
          </Link>
          <Link
            href="/faq"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
          >
            FAQ
          </Link>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
          >
            Open app (staging)
          </a>
        </div>
      </section>
    </div>
  );
}
