import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "TriOS terms of use placeholder — early access.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Terms of use</h1>
      <p className="mt-2 text-sm text-muted">Last updated: September 17, 2026 · Placeholder for early access</p>

      <div className="mt-8 space-y-5 text-sm text-muted">
        <p>
          These placeholder terms apply to the TriOS marketing site and early-access / alpha
          software. They will be replaced with final terms before general availability.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Early access software</h2>
        <p>
          TriOS is provided as-is during alpha. Features may change, break, or be removed.
          Training guidance is informational — you remain responsible for your health, coaching
          decisions, and race preparation.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Acceptable use</h2>
        <p>
          Do not misuse the service, attempt unauthorized access, or use TriOS in ways that harm
          other athletes or violate applicable law.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Accounts & staging</h2>
        <p>
          Staging app access may be limited or revoked. The staging URL is temporary until a
          production domain is configured.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href="/support" className="font-medium text-accent hover:text-accent-hover">
            Support
          </a>
          .
        </p>
      </div>
    </div>
  );
}
