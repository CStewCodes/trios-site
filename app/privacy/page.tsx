import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How TriOS handles your account, training and health data.",
};

const link = "font-medium text-accent hover:text-accent-hover";
const heading = "text-lg font-semibold text-foreground";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Legal</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Privacy
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: October 24, 2026</p>

      <div className="mt-8 space-y-5 text-sm text-muted">
        <p>
          TriOS is coaching software for triathletes. It is not a medical device
          and does not diagnose or treat any condition. This page explains what
          the TriOS website and the TriOS iPhone app collect, why, and the
          choices you have.
        </p>

        <h2 className={heading}>What we collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-foreground">Account details</span>
            : the email and name you use to sign in.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Training information you give us
            </span>
            : your athlete profile, races, check-ins, planned and logged
            workouts, and notes. This includes whether you have a bike, where
            you can swim, and how you want to approach spending on gear. Coach
            uses these answers so it does not suggest gear or sessions you
            cannot use.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Apple Health data, only if you allow it
            </span>
            : workouts, sleep, heart rate, heart rate variability, resting heart
            rate, steps, weight and blood oxygen. TriOS reads this data. It
            never writes anything back to Apple Health.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Lab documents, only if you add them
            </span>
            : stored privately on your account where only you can reach them.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Waitlist details
            </span>
            : the email and optional name you submit on the{" "}
            <Link href="/early-access" className={link}>
              Early access
            </Link>{" "}
            page.
          </li>
        </ul>

        <h2 className={heading}>How we use it</h2>
        <p>
          To run TriOS: build your plan, write your daily brief, show your
          history, keep your account secure, and tell you about early access and
          product updates. We do not sell your data, and we do not use it for
          advertising.
        </p>

        <h2 className={heading}>Coach and AI</h2>
        <p>
          Coach sends information about you to a third-party AI model provider
          only when you ask it a question. Coach can read your daily Apple
          Health readings unless you turn that off in Settings in the iPhone
          app. When it is off, those readings, and earlier Coach replies from
          your other chats, are left out of what Coach is sent. Lab measurements
          are available to Coach only if you allow it. TriOS uses Coach as an
          assistant: it does not replace a doctor, and you decide what to do
          with its suggestions.
        </p>

        <h2 className={heading}>Who else handles your data</h2>
        <p>
          We use hosting and database providers to run the website and app, and
          an AI model provider for Coach as described above. They process data
          only to provide those services to us. When you connect a device or
          service such as Apple Health, Garmin or Strava, it connects only with
          your authorization, and you can disconnect it at any time.
        </p>

        <h2 className={heading}>Your choices</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Disconnect Apple Health in Settings. This stops new uploads from
            your iPhone.
          </li>
          <li>Turn off Coach use of your Apple Health readings in Settings.</li>
          <li>
            Turn off Coach access to your lab measurements, and delete lab
            documents.
          </li>
          <li>Export your account data from Settings.</li>
          <li>
            Delete your account from Settings. This removes your account and the
            data saved to it.
          </li>
          <li>
            Ask to be removed from the waitlist, or ask any privacy question,
            through the{" "}
            <Link href="/support" className={link}>
              Support
            </Link>{" "}
            page. Mark your message as privacy-related.
          </li>
        </ul>
        <p>
          Disconnecting Apple Health does not delete your Apple Health records
          or data already saved to your TriOS account. Use account deletion for
          that.
        </p>

        <h2 className={heading}>Security</h2>
        <p>
          Data is sent over encrypted connections and tied to your signed-in
          account. No system is perfectly secure, so please use a strong sign-in
          and tell us if you suspect a problem.
        </p>

        <h2 className={heading}>Children</h2>
        <p>
          TriOS is not directed to children under 13, and we do not knowingly
          collect their data.
        </p>

        <h2 className={heading}>Changes</h2>
        <p>
          If we change this page in a way that matters, we will update the date
          above and, for account holders, tell you in the app or by email.
        </p>

        <h2 className={heading}>Contact</h2>
        <p>
          Privacy questions: use the{" "}
          <Link href="/support" className={link}>
            Support
          </Link>{" "}
          page and mark your message as privacy-related.
        </p>
      </div>
    </div>
  );
}
