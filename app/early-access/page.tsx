import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Early access",
  description:
    "Join the TriOS early-access waitlist for iron-distance triathlon training software.",
};

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

export default function EarlyAccessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Get started</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Early access waitlist
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        TriOS is in early alpha for iron-distance / 140.6 athletes. Join the waitlist and we&apos;ll
        reach out as we open more seats. Pricing comes later — signing up here only puts you on the
        waitlist.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
        <WaitlistForm />

        <aside className="space-y-6">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold">What early access means</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>• Morning brief &amp; planning loop (alpha)</li>
              <li>• Plan changes as proposals until you approve</li>
              <li>• Incomplete surfaces and honest changelog notes</li>
              <li>• Staging app available while we iterate</li>
            </ul>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
            >
              Open TriOS app (staging)
            </a>
            <p className="mt-3 text-xs text-muted">
              Staging until the production domain is live. Alpha software — expect rough edges.
            </p>
          </article>

          <article className="rounded-2xl border border-dashed border-border bg-card/60 p-6 sm:p-8">
            <h2 className="text-lg font-semibold">Pricing later</h2>
            <p className="mt-2 text-sm text-muted">
              Paid plans are not part of this waitlist signup. We&apos;ll publish pricing when
              we&apos;re ready to leave early access. No payment is collected here.
            </p>
            <p className="mt-4 text-sm text-muted">
              Questions? See{" "}
              <Link href="/support" className="font-medium text-accent hover:text-accent-hover">
                Support
              </Link>
              .
            </p>
          </article>
        </aside>
      </div>
    </div>
  );
}
