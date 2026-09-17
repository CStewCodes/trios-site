import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About TriOS — iron-distance triathlon training software in early access.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Company</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">About TriOS</h1>
      <div className="mt-8 space-y-5 text-muted">
        <p>
          TriOS is software for iron-distance triathlon training. We believe long-course athletes
          deserve a clear morning brief: what today is for, why it matters for 140.6, and what
          changed in the plan.
        </p>
        <p>
          We’re building a closed loop — import, understand, plan, execute, learn — framed for
          triathlon rather than generic fitness tracking. When the plan needs to move, changes are
          proposals until the athlete approves.
        </p>
        <p>
          TriOS is in early access / alpha. We’re conservative about feature claims: live Garmin,
          Strava, and Apple Health connections are roadmap / planned, not presented as shipping
          today.
        </p>
        <p>
          Curious about the product? See{" "}
          <Link href="/features" className="font-medium text-accent hover:text-accent-hover">
            Features
          </Link>{" "}
          and{" "}
          <Link href="/how-it-works" className="font-medium text-accent hover:text-accent-hover">
            How it works
          </Link>
          , or reach out via{" "}
          <Link href="/support" className="font-medium text-accent hover:text-accent-hover">
            Support
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
