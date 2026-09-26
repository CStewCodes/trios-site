import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the TriOS marketing site and early-alpha app.",
};

const linkClass = "font-medium text-accent hover:text-accent-hover";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Terms of use</h1>
      <p className="mt-2 text-sm text-muted">Last updated: September 26, 2026 · Early alpha</p>

      <div className="mt-8 space-y-5 text-sm text-muted">
        <p>
          These terms cover your use of the TriOS marketing site, the early-access waitlist, and
          the early-alpha TriOS app. They are written in plain language. By using TriOS, you agree
          to them. The{" "}
          <Link href="/privacy" className={linkClass}>
            Privacy
          </Link>{" "}
          page explains what data we store and who processes it.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Early-alpha software</h2>
        <p>
          TriOS is in early alpha and is provided as-is. Features may change, break, or be removed
          without notice, and access may be limited or ended. The app currently runs at a temporary
          staging address until we set up a production domain. Keep your own copy of anything
          important. Settings includes an account export for this.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Waitlist and pricing</h2>
        <p>
          Joining the waitlist is free and is not a purchase. It does not guarantee access by any
          particular date. TriOS has no paid plans or checkout today.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Not medical advice</h2>
        <p>
          Training plans, daily briefs, readiness scores, fueling targets, and Coach replies are
          for general information only. They are not medical advice, diagnosis, or treatment. TriOS
          does not interpret lab results clinically. You are responsible for your own health,
          training, and race decisions. Talk to a qualified professional before making changes
          that could affect your health, and stop exercising and get appropriate care if you have
          warning symptoms.
        </p>

        <h2 className="text-lg font-semibold text-foreground">AI features</h2>
        <p>
          Coach and AI document review use an AI model from xAI. AI output can be incomplete or
          wrong. Values extracted from documents stay unreviewed until you check and save them. You
          are responsible for confirming anything you rely on. The Privacy page describes what data
          these features send.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Integrations</h2>
        <p>
          Direct Garmin, Strava, and Apple Health connections are not yet available. File import
          is the supported way to bring in data today. We do not promise that any particular
          integration will ship.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Your account and content</h2>
        <p>
          Keep your sign-in details secure and tell us about any unauthorized use once a contact
          channel is available. Email/password accounts can reset their password by email. You keep
          ownership of the data you enter or upload. You let us store and process it only to run
          the TriOS features you use, as described on the Privacy page. You can export or
          permanently delete your account from app Settings at any time.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Acceptable use</h2>
        <p>
          Do not misuse TriOS. That includes trying to access other people&apos;s accounts or data,
          interfering with or overloading the service, uploading content you have no right to
          share, or using TriOS in ways that harm other athletes or break applicable law.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Changes to these terms</h2>
        <p>
          We will update these terms as TriOS moves beyond early alpha and will change the
          &quot;Last updated&quot; date above when we do.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          The{" "}
          <Link href="/support" className={linkClass}>
            Support
          </Link>{" "}
          page lists the current contact options. A monitored contact address is not live yet.
        </p>
      </div>
    </div>
  );
}
