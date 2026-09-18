import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "TriOS support and contact for early-access athletes.",
};

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Help</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Support & contact</h1>
      <p className="mt-4 text-muted">
        TriOS is in early alpha. Start with self-serve links below, or join the waitlist for
        early-access updates. We care most about bugs that block the morning brief or planning
        loop — no fake response-time promises.
      </p>

      {/* Primary CTA */}
      <section className="mt-10 rounded-2xl border-2 border-accent bg-accent-soft p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-foreground">Join the early-access waitlist</h2>
        <p className="mt-2 text-sm text-muted">
          Free signup for TriOS early-access updates. Pricing comes later — this is not a paid
          checkout. Best first step if you want to be notified as seats open.
        </p>
        <Link
          href="/early-access"
          className="mt-5 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
        >
          Join waitlist
        </Link>
      </section>

      <div className="mt-8 space-y-6">
        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Self-serve</h2>
          <p className="mt-2 text-sm text-muted">
            Many early-access questions are already covered honestly on the site:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/faq" className="font-medium text-accent hover:text-accent-hover">
                FAQ
              </Link>{" "}
              — what TriOS is, waitlist, plan approvals, integrations roadmap, pricing later
            </li>
            <li>
              <Link href="/changelog" className="font-medium text-accent hover:text-accent-hover">
                Changelog
              </Link>{" "}
              — what recently shipped on the marketing site and early-alpha notes
            </li>
            <li>
              <Link href="/how-it-works" className="font-medium text-accent hover:text-accent-hover">
                How it works
              </Link>{" "}
              — closed loop: import → understand → plan → execute → learn
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Early-access contact</h2>
          <p className="mt-2 text-sm text-muted">
            A dedicated production support inbox is <strong>not live yet</strong>. For early-access
            product updates, use the{" "}
            <Link href="/early-access" className="font-medium text-accent hover:text-accent-hover">
              waitlist
            </Link>
            . For bugs or account issues while testing staging, include the details below when you
            reach us through channels we publish as they come online — we will not pretend{" "}
            <span className="font-mono text-xs">hello@trios.training</span> is a monitored production
            mailbox today.
          </p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Staging app</h2>
          <p className="mt-2 text-sm text-muted">
            Secondary link to the current build (staging until a production domain ships):
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent/50"
          >
            Open TriOS app (staging)
          </a>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">What to include for a bug report</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            <li>What you expected vs. what happened</li>
            <li>Browser or device, and approximate time (America/Denver if possible)</li>
            <li>Whether the issue blocks training for the day</li>
            <li>Whether you were on the waitlist, staging app, or both</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
