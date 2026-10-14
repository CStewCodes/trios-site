import type { Metadata } from "next";
import Link from "next/link";
import PrivacyContact from "@/components/PrivacyContact";
import { GOVERNING_LAW_JURISDICTION, MINIMUM_AGE, OPERATING_ENTITY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the TriOS website, waitlist, and early-access app.",
};

const linkClass = "font-medium text-accent hover:text-accent-hover";
const h2Class = "text-lg font-semibold text-foreground";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Terms of use</h1>
      <p className="mt-2 text-sm text-muted">Last updated: September 27, 2026</p>

      <div className="mt-8 space-y-5 text-sm text-muted">
        <p>
          These Terms of Use govern your use of the TriOS website, early-access waitlist, and app,
          operated by {OPERATING_ENTITY} (&quot;TriOS,&quot; &quot;we,&quot; &quot;us&quot;). By
          using TriOS, you agree to these terms. Our{" "}
          <Link href="/privacy" className={linkClass}>
            Privacy policy
          </Link>{" "}
          explains how we handle personal information.
        </p>

        <h2 className={h2Class}>Eligibility</h2>
        <p>
          You must be at least {MINIMUM_AGE} years old to use TriOS or join the waitlist.
        </p>

        <h2 className={h2Class}>Early-access service</h2>
        <p>
          TriOS is early-access software. Features may change, be interrupted, or be removed, and
          access may be limited or ended at any time. Joining the waitlist is free and does not
          guarantee access.
        </p>

        <h2 className={h2Class}>Not medical advice</h2>
        <p>
          TriOS provides training information for general purposes only. It is not medical advice,
          diagnosis, or treatment. You are responsible for your own health, training, and race
          decisions. Consult a qualified professional before making changes that could affect your
          health.
        </p>

        <h2 className={h2Class}>AI features</h2>
        <p>
          Some features use automated and AI processing. AI output can be wrong or incomplete.
          Review any output before relying on it.
        </p>

        <h2 className={h2Class}>Integrations</h2>
        <p>Garmin, Strava, and Apple Health integrations are not yet available.</p>

        <h2 className={h2Class}>Your account</h2>
        <p>
          You are responsible for keeping your sign-in details secure and for activity under your
          account. If you use an email and password, you can reset your password by email. You can
          export or delete your account from the app&apos;s Settings.
        </p>

        <h2 className={h2Class}>Your content</h2>
        <p>
          You keep ownership of the content you submit. You grant us permission to store and
          process it only as needed to provide the service to you, as described in our Privacy
          policy.
        </p>

        <h2 className={h2Class}>Acceptable use</h2>
        <p>
          Do not misuse TriOS. That includes trying to access accounts or data without
          authorization, interfering with the service, uploading content you have no right to
          share, or using TriOS in violation of applicable law.
        </p>

        <h2 className={h2Class}>Disclaimers and limitation of liability</h2>
        <p>
          TriOS is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of
          any kind, to the extent permitted by law. To the extent permitted by law, TriOS is not
          liable for indirect, incidental, or consequential damages arising from your use of the
          service.
        </p>

        <h2 className={h2Class}>Termination</h2>
        <p>
          You may stop using TriOS and delete your account at any time. We may suspend or end
          access if these terms are violated or if the service is discontinued.
        </p>

        <h2 className={h2Class}>Governing law</h2>
        <p>These terms are governed by the laws of {GOVERNING_LAW_JURISDICTION}.</p>

        <h2 className={h2Class}>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. When we do, we will change the &quot;Last
          updated&quot; date above. Continuing to use TriOS after a change means you accept the
          updated terms.
        </p>

        <h2 className={h2Class}>Contact</h2>
        <p>
          Questions about these terms: <PrivacyContact />
        </p>
      </div>
    </div>
  );
}
