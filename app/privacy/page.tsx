import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "TriOS privacy policy placeholder — early access.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Privacy</h1>
      <p className="mt-2 text-sm text-muted">
        Last updated: September 18, 2026 · Placeholder for early access
      </p>

      <div className="mt-8 space-y-5 text-sm text-muted">
        <p>
          This is a starter privacy notice for the TriOS marketing site and early-access product.
          It is not final legal counsel and will be replaced with a complete policy before broader
          launch.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Early-access waitlist</h2>
        <p>
          If you join the waitlist on the{" "}
          <Link href="/early-access" className="font-medium text-accent hover:text-accent-hover">
            Early access
          </Link>{" "}
          page, we collect the email you submit and an optional name. We use that information only
          to communicate about TriOS early access and product updates. We do not sell waitlist
          data. You can ask to be removed via{" "}
          <Link href="/support" className="font-medium text-accent hover:text-accent-hover">
            Support
          </Link>
          .
        </p>

        <h2 className="text-lg font-semibold text-foreground">What else we collect</h2>
        <p>
          Depending on how you use TriOS (marketing site vs. staging app), we may also process
          basic usage analytics and training-related data you choose to import into the app. We do
          not sell personal data.
        </p>

        <h2 className="text-lg font-semibold text-foreground">How we use it</h2>
        <p>
          To operate the service, improve the morning brief and planning loop, communicate about
          early access, and keep the product secure. Training data stays scoped to providing TriOS
          features you request.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Third parties</h2>
        <p>
          Hosting and infrastructure providers (for example Vercel and our database host) may
          process data as needed to run the site, waitlist, and app. Planned device integrations
          (Garmin, Strava, Apple Health) — when enabled — will only connect with your explicit
          authorization.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          Privacy questions: use the{" "}
          <Link href="/support" className="font-medium text-accent hover:text-accent-hover">
            Support
          </Link>{" "}
          page and mark your message as privacy-related.
        </p>
      </div>
    </div>
  );
}
