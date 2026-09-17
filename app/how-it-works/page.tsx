import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description: "The TriOS closed loop for iron-distance triathlon: import, understand, plan, execute, learn.",
};

const steps = [
  {
    n: "01",
    title: "Import",
    body: "Bring in training history and race goals so TriOS starts from your real iron-distance context — not a blank template.",
  },
  {
    n: "02",
    title: "Understand",
    body: "Surface load, fatigue signals, and schedule constraints in athlete-readable language so the week makes sense before you adjust it.",
  },
  {
    n: "03",
    title: "Plan",
    body: "Shape swim / bike / run / recovery around your 140.6 target. Suggested changes stay proposals until you approve them.",
  },
  {
    n: "04",
    title: "Execute",
    body: "Open the morning brief, know what today is for, and complete the session with clear intent.",
  },
  {
    n: "05",
    title: "Learn",
    body: "Feed outcomes back into the loop so tomorrow’s brief reflects what actually happened — and what changed because of it.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Process</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h1>
      <p className="mt-4 max-w-2xl text-muted">
        TriOS is built around a closed loop for triathlon training. The framing is iron-distance
        first; integrations and automation expand carefully as we leave early alpha.
      </p>

      <ol className="mt-12 space-y-6">
        {steps.map((step) => (
          <li
            key={step.n}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-start"
          >
            <span className="font-mono text-sm font-semibold text-accent">{step.n}</span>
            <div>
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-2xl bg-accent-soft p-6">
        <p className="text-sm text-foreground">
          Ready to try the staging app?{" "}
          <Link href="/early-access" className="font-semibold text-accent hover:text-accent-hover">
            Join early access
          </Link>{" "}
          or open the{" "}
          <a
            href="https://race-ops-staging-eosin.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:text-accent-hover"
          >
            TriOS app (staging)
          </a>
          .
        </p>
      </div>
    </div>
  );
}
