import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "TriOS product changelog — early alpha notes.",
};

const entries = [
  {
    date: "2026-09-17",
    title: "Marketing site scaffold",
    body: "Public TriOS marketing pages live: home, features, how-it-works, early access, changelog, about, privacy, terms, and support. Primary CTA points to the staging app.",
    tag: "Site",
  },
  {
    date: "2026-09",
    title: "Early alpha — staging app",
    body: "Core morning-brief and planning loop available on staging for invited athletes. Expect incomplete surfaces and frequent iteration. Device integrations (Garmin / Strava / Apple Health) remain roadmap / planned.",
    tag: "Alpha",
  },
  {
    date: "2026-Q3",
    title: "Project kickoff",
    body: "TriOS positioned as iron-distance first training software with a closed import → understand → plan → execute → learn loop. Plan changes treated as proposals until athlete approval.",
    tag: "Milestone",
  },
];

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-accent">Updates</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Changelog</h1>
      <p className="mt-4 text-muted">
        Starter entries for early alpha. Dates and scope will firm up as we ship. This product is
        early — treat everything as subject to change.
      </p>

      <div className="mt-12 space-y-8">
        {entries.map((entry) => (
          <article key={entry.title} className="border-b border-border pb-8 last:border-0">
            <div className="flex flex-wrap items-center gap-3">
              <time className="font-mono text-xs text-muted">{entry.date}</time>
              <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                {entry.tag}
              </span>
            </div>
            <h2 className="mt-2 text-xl font-semibold">{entry.title}</h2>
            <p className="mt-2 text-sm text-muted">{entry.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
