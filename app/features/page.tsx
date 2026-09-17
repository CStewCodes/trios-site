import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "High-level TriOS capabilities for iron-distance triathlon training — early access.",
};

const features = [
  {
    title: "Morning brief",
    body: "A daily summary of what to do, why it fits your iron plan, and what changed overnight — designed to be read before you leave the house.",
  },
  {
    title: "Iron-first planning",
    body: "Planning oriented around 140.6 / iron-distance builds: volume, key sessions, and recovery framed for long-course demands.",
  },
  {
    title: "Proposal-based plan changes",
    body: "When TriOS suggests adjusting your plan, those changes stay proposals until you approve them. You stay in control.",
  },
  {
    title: "Closed training loop",
    body: "Import → understand → plan → execute → learn. TriOS aims to connect those steps for triathlon, not leave them as disconnected tools.",
  },
  {
    title: "Athlete-readable context",
    body: "Explanations in plain language so you can trust the day’s work without digging through spreadsheets or coach notes.",
  },
  {
    title: "Device & platform integrations",
    body: "Garmin, Strava, and Apple Health style connections are on the roadmap / planned — not claimed as shipping in this early alpha.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Product</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Features</h1>
      <p className="mt-4 max-w-2xl text-muted">
        High-level capabilities for early-access TriOS. We’re deliberate about what we claim —
        nothing below assumes live third-party integrations are shipping today.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">{f.title}</h2>
            <p className="mt-2 text-sm text-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
