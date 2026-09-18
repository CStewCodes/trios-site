"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initial: WaitlistState = { status: "idle", message: "" };

export default function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const isOk = state.status === "success" || state.status === "duplicate";

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-semibold">Join the early-access waitlist</h2>
      <p className="mt-2 text-sm text-muted">
        Leave your email and we&apos;ll notify you about TriOS early access. Pricing comes later —
        this form only adds you to the waitlist.
      </p>

      <form ref={formRef} action={formAction} className="mt-6 space-y-4" noValidate>
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
        className={`mt-4 rounded-xl px-4 py-3 text-sm ${
          state.status === "idle"
            ? "sr-only"
            : isOk
              ? "bg-accent-soft text-foreground"
              : "border border-red-200 bg-red-50 text-red-900"
        }`}
      >
        {state.message || "Status"}
      </div>
    </div>
  );
}
