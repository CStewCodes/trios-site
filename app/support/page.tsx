import type { Metadata } from "next";

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
        TriOS is in early access. We read every note from athletes testing the staging app —
        especially bugs that block the morning brief or planning loop.
      </p>

      <div className="mt-10 space-y-6">
        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="mt-2 text-sm text-muted">
            Reach the team at{" "}
            <a
              href="mailto:hello@trios.training"
              className="font-medium text-accent hover:text-accent-hover"
            >
              hello@trios.training
            </a>{" "}
            (placeholder inbox — replace when production mail is live). Include “privacy” or “bug”
            in the subject when relevant.
          </p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Staging app</h2>
          <p className="mt-2 text-sm text-muted">
            Try the current build:{" "}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:text-accent-hover"
            >
              Open TriOS app (staging)
            </a>
            . Note that this is a staging environment until the production domain ships.
          </p>
        </article>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">What to include</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            <li>What you expected vs. what happened</li>
            <li>Browser or device, and approximate time (America/Denver if possible)</li>
            <li>Whether the issue blocks training for the day</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
