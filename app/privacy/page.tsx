import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What the TriOS marketing site and early-alpha app store, which providers process it, and how to export or delete it.",
};

const linkClass = "font-medium text-accent hover:text-accent-hover";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Privacy</h1>
      <p className="mt-2 text-sm text-muted">Last updated: September 26, 2026 · Early alpha</p>

      <div className="mt-8 space-y-5 text-sm text-muted">
        <p>
          TriOS is early-alpha software for iron-distance triathletes. This page describes what the
          TriOS marketing site and the TriOS app actually do with your data today. It is written in
          plain language, it is not a certification of compliance with any particular law, and we
          will update it as the product changes. We do not sell personal data.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Early-access waitlist (this site)</h2>
        <p>
          When you join the waitlist on the{" "}
          <Link href="/early-access" className={linkClass}>
            Early access
          </Link>{" "}
          page, we store your email address, the optional name you enter, the signup source (the
          early-access page), and the time you signed up. This is stored in a Postgres database
          hosted by Neon. We then send one confirmation email through Resend. Signing up again with
          the same email does not send another one. We use waitlist details only to contact you
          about TriOS early access and related product updates.
        </p>
        <p>
          The marketing site does not use its own analytics or advertising trackers. Like any
          website, our hosting provider (Vercel) handles your requests and may record standard
          request information, such as your IP address and browser type.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Your TriOS account (the app)</h2>
        <p>If you create an account in the TriOS app, we store:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">Account and sign-in data:</strong> your name, email
            address, and a hashed password (for email/password accounts), or the linked sign-in
            provider&apos;s account record. We also store session records, including the IP address
            and browser details of each signed-in session, and short-lived codes used for password
            resets and for signing in on a phone.
          </li>
          <li>
            <strong className="text-foreground">Training data you enter or import:</strong> athlete
            profile and race details, training zones, workouts, training plans and plan proposals,
            morning check-ins (including any notes), daily health readings such as sleep, HRV, and
            resting heart rate, nutrition logs, and fitness assessments.
          </li>
          <li>
            <strong className="text-foreground">Health evidence and documents:</strong> readings you
            add from lab or assessment reports, the consent settings you choose for each source
            (including whether it may be used for Coach), and whether you confirmed or rejected each
            reading. If you upload a private document (PDF or image, up to 10 MB), the file is kept
            in private storage on Vercel Blob. Its storage location is stored encrypted.
          </li>
          <li>
            <strong className="text-foreground">Coach conversations:</strong> the questions you ask
            Coach and the replies it gives, plus basic records of each request (status, provider,
            and model name).
          </li>
        </ul>
        <p>
          If you use the app without signing in, your data stays in your browser on that device.
        </p>

        <h2 className="text-lg font-semibold text-foreground">AI features and what they send</h2>
        <p>
          <strong className="text-foreground">Coach.</strong> When you ask Coach a question, the
          TriOS server sends your question, recent messages from the conversation, and a summary of
          your training context to xAI&apos;s Grok model. We send it either straight to xAI or
          through Vercel&apos;s AI Gateway, depending on how we have set things up. That summary can
          include your name, race, training zones, recent workouts, readiness and daily health
          readings, your latest check-in notes, nutrition, and assessment results. It also includes
          health-evidence readings, but only ones you have confirmed and only from sources you have
          allowed Coach to use. Nothing is sent to an AI provider unless you ask Coach something.
        </p>
        <p>
          <strong className="text-foreground">AI document review.</strong> This only runs if you
          choose AI review on a specific uploaded document and confirm the prompt. The document is
          then sent to xAI for a one-time extraction. TriOS asks xAI to delete its copy of the file
          once the analysis finishes. Every extracted value stays unreviewed and editable until you
          save it. Ordinary text extraction from documents runs on your device.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Service providers</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">Vercel</strong> hosts the marketing site and app,
            stores private uploaded documents (Vercel Blob), and may route Coach requests (AI
            Gateway).
          </li>
          <li>
            <strong className="text-foreground">Neon</strong> hosts the Postgres databases for the
            waitlist and for app accounts.
          </li>
          <li>
            <strong className="text-foreground">Resend</strong> delivers waitlist confirmation and
            password reset emails.
          </li>
          <li>
            <strong className="text-foreground">xAI</strong> provides the AI model for Coach and
            for AI document review.
          </li>
          <li>
            A few features call public services with limited, non-account data. If you ask for local
            weather on the daily brief, your browser sends your approximate coordinates to
            Open-Meteo. Race search sends your search terms to RunSignup and World Triathlon.
          </li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground">Integrations</h2>
        <p>
          Direct Garmin, Strava, and Apple Health connections are{" "}
          <strong className="text-foreground">not yet available</strong>. Today you can import
          files you export yourself, such as CSV, TCX, or GPX files and PDF or image reports. If we
          add a direct connection later, it will only connect with your explicit authorization, and
          we will update this page first.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Your controls</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong className="text-foreground">Export:</strong> in app Settings, you can download a
            JSON copy of your account records, Coach history, health evidence, source consent, and
            document details. The document files themselves are not included in that download. A
            separate health-evidence CSV download includes only readings you have confirmed.
          </li>
          <li>
            <strong className="text-foreground">Delete:</strong> in app Settings, you can
            permanently delete your account. TriOS first deletes your private uploaded documents
            from storage, then removes your app records, Coach history, health evidence, sources,
            sessions, and sign-in. If a document is still uploading, deletion waits and asks you to
            try again shortly.
          </li>
          <li>
            <strong className="text-foreground">Password reset:</strong> email/password accounts
            can request a reset link by email. The response looks the same whether or not an
            account exists. After a successful reset, all existing sessions are signed out.
          </li>
          <li>
            <strong className="text-foreground">Health evidence consent:</strong> each health source
            has its own import and Coach permissions. Turning them off stops new imports and stops
            that source&apos;s readings from being used by Coach.
          </li>
        </ul>

        <h2 className="text-lg font-semibold text-foreground">How long we keep data</h2>
        <p>
          We have not set fixed retention periods yet. App data is kept until you delete it or
          delete your account. Waitlist signups are kept until you ask to be removed. We will publish specific retention periods here once we decide them.
        </p>

        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          TriOS does not have a monitored privacy inbox yet. The{" "}
          <Link href="/support" className={linkClass}>
            Support
          </Link>{" "}
          page explains the current contact options, and we will list a privacy contact there as
          soon as one is live. Export and account deletion are available in the app now, so you
          don&apos;t need to contact us to use them.
        </p>
      </div>
    </div>
  );
}
