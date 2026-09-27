import type { Metadata } from "next";
import Link from "next/link";
import PrivacyContact from "@/components/PrivacyContact";
import { MINIMUM_AGE, OPERATING_ENTITY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How TriOS collects, uses, shares, and retains personal information.",
};

const linkClass = "font-medium text-accent hover:text-accent-hover";
const h2Class = "text-lg font-semibold text-foreground";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Privacy policy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: September 27, 2026</p>

      <div className="mt-8 space-y-5 text-sm text-muted">
        <p>
          This Privacy Policy explains how TriOS (operated by {OPERATING_ENTITY}) (&quot;TriOS,&quot;
          &quot;we,&quot; &quot;us&quot;) collects, uses, shares, and retains personal information
          when you use this website, join the early-access waitlist, or use the TriOS app. TriOS is
          early-access software, and we may update this policy as the service changes.
        </p>

        <h2 className={h2Class}>Information we collect</h2>
        <p>
          <strong className="text-foreground">Waitlist.</strong> When you join the waitlist on the{" "}
          <Link href="/early-access" className={linkClass}>
            Early access
          </Link>{" "}
          page, we collect your email address, an optional name, the signup source, and the time
          you signed up. We send you one confirmation email.
        </p>
        <p>
          <strong className="text-foreground">Account information.</strong> If you create an
          account, we collect your name, email address, and sign-in credentials (passwords are
          stored hashed), along with session information such as IP address and browser details.
        </p>
        <p>
          <strong className="text-foreground">Information you provide.</strong> This includes your
          athlete profile, race details, training zones, workouts, training plans, check-ins and
          notes, daily health and recovery readings, nutrition logs, fitness assessments, health
          evidence you add or confirm, documents you upload, your consent settings, and your
          messages to in-app coaching features.
        </p>
        <p>
          <strong className="text-foreground">Technical information.</strong> Our service providers
          may automatically receive standard technical information when you use the website or
          app, such as IP address, browser type, device information, and request logs.
        </p>

        <h2 className={h2Class}>How we use information</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>To provide, operate, and maintain the TriOS website and app</li>
          <li>To provide the features you request, including training plans and coaching</li>
          <li>To communicate with you about early access, your account, and service updates</li>
          <li>To secure the service, prevent misuse, and fix problems</li>
          <li>To comply with legal obligations</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2 className={h2Class}>How we share information</h2>
        <p>
          We share personal information with third-party service providers that process it on our
          behalf to run TriOS. These include hosting, database, file storage, and email providers,
          and third-party service providers, including AI processing, that power features such as
          in-app coaching and document review. Features you request, such as local weather and race
          search, may send the information needed for that request (for example, your approximate
          location or search terms) to third-party services. We may also disclose information when
          required by law or to protect the rights and safety of TriOS, our users, or others.
        </p>

        <h2 className={h2Class}>Integrations</h2>
        <p>
          Garmin, Strava, and Apple Health integrations are{" "}
          <strong className="text-foreground">not yet available</strong>. You can import files you
          export yourself.
        </p>

        <h2 className={h2Class}>Your choices and rights</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">Account export:</strong> you can download a copy of
            your account data from the app&apos;s Settings. A separate health-evidence export
            includes only the readings you have confirmed.
          </li>
          <li>
            <strong className="text-foreground">Account deletion:</strong> you can delete your
            account from the app&apos;s Settings. Deletion removes your account data, including
            private documents you uploaded.
          </li>
          <li>
            <strong className="text-foreground">Password reset:</strong> if you use an email and
            password, you can reset your password by email.
          </li>
          <li>
            <strong className="text-foreground">Other requests:</strong> depending on where you
            live, you may have additional rights to access, correct, or delete your information. To
            make a request, or to be removed from the waitlist, contact us at the address below.
          </li>
        </ul>

        <h2 className={h2Class}>Data retention</h2>
        <p>
          We keep personal information while your account is active or as needed to provide the
          service. After you delete your account, or ask us to delete your information, we delete
          or anonymize it within a reasonable period, except where the law requires us to keep it
          longer.
        </p>

        <h2 className={h2Class}>Security</h2>
        <p>
          We use reasonable measures to protect personal information. No method of transmission or
          storage is completely secure, so we cannot guarantee absolute security.
        </p>

        <h2 className={h2Class}>Children</h2>
        <p>
          TriOS is not intended for anyone under {MINIMUM_AGE}. You must be at least {MINIMUM_AGE}{" "}
          years old to use TriOS or join the waitlist. We do not knowingly collect personal
          information from anyone under {MINIMUM_AGE}.
        </p>

        <h2 className={h2Class}>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. When we do, we will change the &quot;Last
          updated&quot; date above.
        </p>

        <h2 className={h2Class}>Contact</h2>
        <p>
          Privacy questions and requests: <PrivacyContact />
        </p>
        <p>
          See also our{" "}
          <Link href="/terms" className={linkClass}>
            Terms of use
          </Link>{" "}
          and{" "}
          <Link href="/support" className={linkClass}>
            Support
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}
