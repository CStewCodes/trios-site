import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "The TriOS closed loop for iron-distance triathlon: import, understand, plan, execute, learn — with plan changes as proposals until you approve.",
};

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

const steps = [
  {
    n: "01",
    title: "Import",
    summary:
      "Start from your real iron-distance context — history and race goals — not a blank template.",
    details: [
      "Bring in what you’ve already done so the week isn’t invented from thin air.",
      "Anchor on your 140.6 / iron-distance target date and constraints you care about.",
      "Live Garmin, Strava, and Apple Health connections are roadmap / planned — not claimed as shipping live sync on this page.",
    ],
  },
  {
    n: "02",
    title: "Understand",
    summary:
      "See load, fatigue signals, and schedule constraints in athlete-readable language before you change anything.",
    details: [
      "Translate the week into plain language so you know why a hard day or rest day is there.",
      "Surface gaps and conflicts early — travel, life load, or incomplete data — without pretending missing metrics are “in range.”",
      "Early alpha: expect incomplete surfaces while we harden the morning brief and planning loop.",
    ],
  },
  {
    n: "03",
    title: "Plan",
    summary:
      "Shape swim / bike / run / recovery around your iron build. Suggested changes stay proposals until you approve them.",
    details: [
      "Long-course volume and key sessions framed for 140.6 demands — not a generic fitness calendar.",
      "When TriOS suggests moving or adjusting work, you get a proposal — not a silent calendar rewrite.",
      "Nothing lands on your plan until you explicitly approve it.",
    ],
  },
  {
    n: "04",
    title: "Execute",
    summary:
      "Open the morning brief: what today is for, why it matters, and what changed — then do the session with intent.",
    details: [
      "A clear session focus before you leave the house: swim, bike, run, or recovery.",
      "Context that ties today’s work to the bigger iron arc.",
      "If the plan moved, the brief should say what changed and why — still subject to your prior approval on proposals.",
    ],
  },
  {
    n: "05",
    title: "Learn",
    summary:
      "Feed outcomes back into the loop so tomorrow’s brief reflects what actually happened.",
    details: [
      "Completed, missed, or adjusted sessions inform the next day’s clarity.",
      "The loop closes: import → understand → plan → execute → learn — then repeat.",
      "We’re careful about claims in early alpha; learning quality improves as evidence and approvals stay inspectable.",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Process</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h1>
      <p className="mt-4 max-w-2xl text-muted">
        TriOS runs a closed loop for iron-distance triathlon training:{" "}
        <strong className="font-medium text-foreground">
          import → understand → plan → execute → learn
        </strong>
        . The framing is 140.6 first. Early alpha — integrations and automation expand carefully; we
        don’t invent live device claims here.
      </p>

      {/* Proposal callout */}
      <aside
        className="mt-8 rounded-2xl border-2 border-accent bg-accent-soft p-5 sm:p-6"
        aria-labelledby="proposal-callout-heading"
      >
        <h2 id="proposal-callout-heading" className="text-base font-semibold text-foreground">
          Plan changes don’t auto-apply
        </h2>
        <p className="mt-2 text-sm text-muted">
          When TriOS suggests adjusting your schedule, those changes stay{" "}
          <strong className="font-medium text-foreground">proposals until you approve them</strong>.
          You stay in control of what lands on the calendar. See the{" "}
          <Link href="/faq" className="font-medium text-accent hover:text-accent-hover">
            FAQ
          </Link>{" "}
          for the short version.
        </p>
      </aside>

      <ol className="mt-12 space-y-6">
        {steps.map((step) => (
          <li
            key={step.n}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="font-mono text-sm font-semibold text-accent">{step.n}</span>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{step.title}</h2>
                <p className="mt-2 text-sm text-foreground/90 sm:text-base">{step.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                  {step.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">Ready for early access?</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Join the TriOS waitlist for early-alpha updates. Free signup — pricing comes later.
          Staging remains available as a secondary link while we iterate.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/early-access"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Join waitlist
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
