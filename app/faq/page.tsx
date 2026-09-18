import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about TriOS — iron-distance triathlon training software in early access.",
};

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "What is TriOS?",
    a: (
      <>
        TriOS is training software for iron-distance triathlon. The core promise is a{" "}
        <strong>morning brief</strong>: what to do today, why it matters for your build, and what
        changed since yesterday — so you can train with intent instead of guessing.
      </>
    ),
  },
  {
    q: "Who is it for?",
    a: (
      <>
        Athletes training toward <strong>iron-distance / 140.6</strong> (and long-course builds in
        that spirit). TriOS is in early access — we&apos;re prioritizing that iron-first loop before
        broadening.
      </>
    ),
  },
  {
    q: "What is early access / the waitlist?",
    a: (
      <>
        Early access means TriOS is early alpha: incomplete surfaces, honest changelog notes, and
        careful onboarding. The{" "}
        <Link href="/early-access" className="font-medium text-accent hover:text-accent-hover">
          waitlist
        </Link>{" "}
        is a free signup so we can notify you when more seats open. Joining the waitlist does not
        charge you or create a paid subscription.
      </>
    ),
  },
  {
    q: "Do plan changes apply automatically?",
    a: (
      <>
        <strong>No.</strong> When TriOS suggests adjusting your plan, those changes stay{" "}
        <strong>proposals until you approve them</strong>. You stay in control of what lands on your
        calendar.
      </>
    ),
  },
  {
    q: "Are Garmin, Strava, or Apple Health live today?",
    a: (
      <>
        <strong>Not as shipping live integrations on this marketing claim.</strong> Device and
        platform connections (Garmin, Strava, Apple Health, and similar) are{" "}
        <strong>roadmap / planned</strong>. We do not claim them as production-ready live sync here.
        See{" "}
        <Link href="/features" className="font-medium text-accent hover:text-accent-hover">
          Features
        </Link>{" "}
        for conservative capability language.
      </>
    ),
  },
  {
    q: "Is there pricing?",
    a: (
      <>
        <strong>Pricing comes later.</strong> The waitlist is free signup only — no payment is
        collected on this site today. We&apos;ll publish plans when we&apos;re ready to leave early
        access.
      </>
    ),
  },
  {
    q: "Where is the app?",
    a: (
      <>
        The current build runs on a <strong>staging</strong> URL until a production domain is live:{" "}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent hover:text-accent-hover"
        >
          Open TriOS app (staging)
        </a>
        . Expect rough edges — this is early alpha. Prefer joining the{" "}
        <Link href="/early-access" className="font-medium text-accent hover:text-accent-hover">
          waitlist
        </Link>{" "}
        if you want to be notified as access opens.
      </>
    ),
  },
  {
    q: "How do I get support?",
    a: (
      <>
        Use the{" "}
        <Link href="/support" className="font-medium text-accent hover:text-accent-hover">
          Support
        </Link>{" "}
        page. For waitlist or privacy questions, say so in your message so we can route it quickly.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Help</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">FAQ</h1>
      <p className="mt-4 text-muted">
        Straight answers for early-access TriOS. We keep claims conservative — if something isn&apos;t
        shipping yet, we say so.
      </p>

      <div className="mt-10 space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-border bg-card shadow-sm open:border-accent/40"
          >
            <summary className="cursor-pointer list-none px-5 py-4 text-left text-base font-semibold text-foreground outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-lg font-normal text-muted transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">Still have questions?</h2>
        <p className="mt-2 text-sm text-muted">
          Join the waitlist for early-access updates, or reach out on Support. Staging stays available
          as a secondary link while we iterate.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/early-access"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Join waitlist
          </Link>
          <Link
            href="/support"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
          >
            Support
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
