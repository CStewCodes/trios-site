import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early access",
  description: "TriOS early access and pricing placeholder for iron-distance athletes.",
};

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

export default function EarlyAccessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Get started</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Early access & pricing
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        TriOS is in early alpha. We’re onboarding iron-distance athletes carefully while the product
        hardens. Pricing below is a placeholder until we publish firm plans.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Early access</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight">Invite</p>
          <p className="mt-2 text-sm text-muted">
            Limited alpha seats for athletes training toward iron-distance / 140.6. Expect
            incomplete features, honest changelog notes, and direct feedback channels.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>• Morning brief & planning loop (alpha)</li>
            <li>• Proposal-based plan changes</li>
            <li>• Staging app access today</li>
          </ul>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Open TriOS app (staging)
          </a>
        </article>

        <article className="rounded-2xl border border-dashed border-border bg-card/60 p-8">
          <h2 className="text-xl font-semibold">Paid plans</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-muted">TBD</p>
          <p className="mt-2 text-sm text-muted">
            Pricing tiers will be published when we’re ready to leave early access. No paid
            commitment is required to explore the staging app right now.
          </p>
          <p className="mt-6 text-sm text-muted">
            Questions about access? Reach us on the{" "}
            <a href="/support" className="font-medium text-accent hover:text-accent-hover">
              Support
            </a>{" "}
            page.
          </p>
        </article>
      </div>
    </div>
  );
}
