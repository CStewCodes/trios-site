"use client";

import { useActionState } from "react";
import Link from "next/link";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initial: WaitlistState = { status: "idle", message: "" };

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" className="fill-accent" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" className="fill-slate-500" />
      <path d="M12 10v6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="7.5" r="1.25" fill="white" />
    </svg>
  );
}

export default function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initial);

  if (state.status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="rounded-2xl border-2 border-accent bg-accent-soft p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-start gap-4">
          <CheckIcon className="mt-0.5 h-10 w-10 shrink-0" />
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              You&apos;re on the TriOS waitlist
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
              {state.message}
            </p>
            <p className="mt-4 text-sm text-muted">
              Early alpha — we&apos;ll email when access opens further. No spam. Questions?{" "}
              <Link href="/support" className="font-medium text-accent hover:text-accent-hover">
                Support
              </Link>
              .
            </p>
            <p className="mt-6">
              <Link
                href="/"
                className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:border-accent/40"
              >
                Back to home
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (state.status === "duplicate") {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="rounded-2xl border-2 border-slate-300 bg-slate-50 p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-start gap-4">
          <InfoIcon className="mt-0.5 h-10 w-10 shrink-0" />
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              You&apos;re already on the list
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
              {state.message}
            </p>
            <p className="mt-4 text-sm text-muted">
              No extra confirmation email was sent. Need help?{" "}
              <Link href="/support" className="font-medium text-accent hover:text-accent-hover">
                Support
              </Link>
              .
            </p>
            <p className="mt-6">
              <Link
                href="/"
                className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:border-accent/40"
              >
                Back to home
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-semibold">Join the early-access waitlist</h2>
      <p className="mt-2 text-sm text-muted">
        Leave your email and we&apos;ll notify you about TriOS early access. Pricing comes later —
        this form only adds you to the waitlist.
      </p>

      <form action={formAction} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="waitlist-email" className="block text-sm font-medium text-foreground">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            inputMode="email"
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-accent placeholder:text-muted focus:ring-2"
            aria-required="true"
            disabled={pending}
          />
        </div>

        <div>
          <label htmlFor="waitlist-name" className="block text-sm font-medium text-foreground">
            Name <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="waitlist-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={120}
            placeholder="First name or preferred name"
            className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none ring-accent placeholder:text-muted focus:ring-2"
            disabled={pending}
          />
        </div>

        <p className="text-xs text-muted">
          We use your email only for TriOS early access and product updates. See our{" "}
          <Link href="/privacy" className="font-medium text-accent hover:text-accent-hover">
            Privacy
          </Link>{" "}
          page. You can ask to be removed anytime via Support.
        </p>

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Joining…" : "Join waitlist"}
        </button>
      </form>

      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={
          state.status === "error"
            ? "mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-900"
            : "sr-only"
        }
      >
        {state.status === "error" ? state.message : "Waiting for signup"}
      </div>
    </div>
  );
}
