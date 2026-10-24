import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the TriOS website and iPhone app.",
};

const link = "font-medium text-accent hover:text-accent-hover";
const heading = "text-lg font-semibold text-foreground";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Terms of use
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: October 24, 2026</p>

      <div className="mt-8 space-y-5 text-sm text-muted">
        <p>
          These terms cover your use of the TriOS website and iPhone app. By
          using TriOS you agree to them. Our{" "}
          <Link href="/privacy" className={link}>
            Privacy policy
          </Link>{" "}
          explains how we handle your information.
        </p>

        <h2 className={heading}>Who can use TriOS</h2>
        <p>
          You must be at least 13 years old to use TriOS or join the waitlist.
        </p>

        <h2 className={heading}>Early-access software</h2>
        <p>
          TriOS is early-access software. Features can change, be interrupted or
          be removed, and access can be limited or ended. Joining the waitlist
          is free and does not guarantee access.
        </p>

        <h2 className={heading}>Not medical advice</h2>
        <p>
          TriOS gives training information for general purposes. It is not
          medical advice, diagnosis or treatment, and it is not a medical
          device. You are responsible for your own health, training and race
          decisions. Talk to a qualified professional before changing anything
          that could affect your health.
        </p>

        <h2 className={heading}>Coach and AI</h2>
        <p>
          Some features, including Coach, use AI. AI output can be wrong or
          incomplete. Review it before you rely on it. You decide what to do
          with any suggestion.
        </p>

        <h2 className={heading}>Connected services</h2>
        <p>
          You can connect services such as Apple Health. They connect only with
          your authorization, and you can disconnect them at any time in the
          app.
        </p>

        <h2 className={heading}>Your account</h2>
        <p>
          You are responsible for keeping your sign-in details secure and for
          activity under your account. You can export your data or delete your
          account from Settings in the app.
        </p>

        <h2 className={heading}>Your content</h2>
        <p>
          You keep ownership of what you add to TriOS. You let us store and
          process it only as needed to provide the service to you, as described
          in the Privacy policy.
        </p>

        <h2 className={heading}>Acceptable use</h2>
        <p>
          Do not misuse TriOS. That includes trying to reach accounts or data
          without permission, interfering with the service, uploading content
          you have no right to share, or breaking the law.
        </p>

        <h2 className={heading}>No warranty and limits on liability</h2>
        <p>
          TriOS is provided &quot;as is&quot; and &quot;as available&quot;,
          without warranties of any kind, to the extent the law allows. To the
          extent the law allows, we are not liable for indirect, incidental or
          consequential damages from your use of the service.
        </p>

        <h2 className={heading}>Ending your use</h2>
        <p>
          You can stop using TriOS and delete your account at any time. We can
          suspend or end access if these terms are broken or if the service is
          discontinued.
        </p>

        <h2 className={heading}>Changes</h2>
        <p>
          We may update these terms. When we do, we will change the date above.
          Using TriOS after a change means you accept the updated terms.
        </p>

        <h2 className={heading}>Contact</h2>
        <p>
          Questions about these terms: use the{" "}
          <Link href="/support" className={link}>
            Support
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
