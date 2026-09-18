import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About TriOS — iron-distance / 140.6 triathlon training software. Morning brief clarity, proposal-based plan changes, early access.",
};

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Company</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">About TriOS</h1>
      <p className="mt-4 text-lg text-muted">
        Iron-distance triathlon training software — morning-brief clarity for athletes chasing
        140.6. Early alpha. No fake team bios, metrics, or testimonials on this page.
      </p>

      <section className="mt-12" aria-labelledby="about-who-heading">
        <h2 id="about-who-heading" className="text-xl font-semibold tracking-tight text-foreground">
          Who it’s for
        </h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Athletes training toward <strong className="font-medium text-foreground">iron-distance / 140.6</strong>{" "}
          (and long-course builds in that spirit). TriOS prioritizes that iron-first audience in
          early access before broadening. If you want a clear day — not another opaque calendar —
          you’re the person we’re building for.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="about-brief-heading">
        <h2 id="about-brief-heading" className="text-xl font-semibold tracking-tight text-foreground">
          The morning brief promise
        </h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          Long-course training is complex. TriOS centers a simple daily contract: clarity before
          the session starts.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>
            <strong className="font-medium text-foreground">What today</strong> — a clear session
            focus (swim, bike, run, or recovery) framed for your iron build
          </li>
          <li>
            <strong className="font-medium text-foreground">Why it matters</strong> — context that
            ties the day’s work to the bigger 140.6 arc
          </li>
          <li>
            <strong className="font-medium text-foreground">What changed</strong> — when the plan
            moves, you see what shifted and why (after you’ve approved proposals)
          </li>
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="about-loop-heading">
        <h2 id="about-loop-heading" className="text-xl font-semibold tracking-tight text-foreground">
          Closed loop, athlete approval
        </h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          We’re building{" "}
          <strong className="font-medium text-foreground">
            import → understand → plan → execute → learn
          </strong>{" "}
          framed for triathlon — not generic fitness tracking and not a silent AI calendar. When
          TriOS suggests adjusting your plan, those changes stay{" "}
          <strong className="font-medium text-foreground">proposals until you approve them</strong>.
          You stay in control of what lands on the calendar.
        </p>
        <p className="mt-3 text-sm text-muted">
          Walk the steps on{" "}
          <Link href="/how-it-works" className="font-medium text-accent hover:text-accent-hover">
            How it works
          </Link>{" "}
          or skim capabilities on{" "}
          <Link href="/features" className="font-medium text-accent hover:text-accent-hover">
            Features
          </Link>
          .
        </p>
      </section>

      <section className="mt-10" aria-labelledby="about-alpha-heading">
        <h2 id="about-alpha-heading" className="text-xl font-semibold tracking-tight text-foreground">
          Early alpha honesty
        </h2>
        <p className="mt-3 text-sm text-muted sm:text-base">
          TriOS is in early access / alpha. Surfaces are incomplete; we ship carefully and keep
          claims conservative. Live Garmin, Strava, and Apple Health connections are{" "}
          <strong className="font-medium text-foreground">roadmap / planned</strong> — not presented
          as shipping live sync today. Straight answers live in the{" "}
          <Link href="/faq" className="font-medium text-accent hover:text-accent-hover">
            FAQ
          </Link>
          .
        </p>
      </section>

      <section
        className="mt-12 rounded-2xl border-2 border-accent bg-accent-soft p-6 sm:p-8"
        aria-labelledby="about-cta-heading"
      >
        <h2 id="about-cta-heading" className="text-lg font-semibold text-foreground">
          Join early access
        </h2>
        <p className="mt-2 text-sm text-muted">
          Free waitlist signup for TriOS early-alpha updates. Pricing comes later — no payment
          collected here. Staging remains a secondary link while we iterate.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/early-access"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Join waitlist
          </Link>
          <Link
            href="/features"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
          >
            How it works
          </Link>
          <Link
            href="/faq"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
          >
            FAQ
          </Link>
          <Link
            href="/support"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
          >
            Support
          </Link>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
          >
            Open app (staging)
          </a>
        </div>
      </section>
    </div>
  );
}
