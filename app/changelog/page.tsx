import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "TriOS product changelog — early alpha notes.",
};

type ChangelogEntry = {
  date: string;
  title: string;
  body: string;
  bullets?: string[];
  tag: string;
};

const entries: ChangelogEntry[] = [
  {
    date: "2026-09-26",
    title: "App: calendar views, clearer numbers, Log, Body, and account recovery",
    body: "A batch of early-alpha app updates. Still alpha — expect rough edges while we iterate.",
    bullets: [
      "Plan now has a navigable weekly calendar: step to the previous or next week, select each session on a day independently, and instructions start collapsed",
      "Plan adds Day, Week, and Month views with previous/next, running through race week",
      "Tap ? next to numbers for plain-language explanations — on Brief (training load, season phase, weather, strain) and in workout details",
      "The Load and form chart is labeled Fitness, Fatigue, and Form with distinct lines and a short how-to-read note; jargon moved into the hints",
      "Password reset and account recovery for email/password accounts; a successful reset signs out existing sessions",
      "Searchable Log: search, filter, and sort workouts; planned-vs-actual shows only for confirmed matches, and unmatched or duplicate records stay visible and labeled",
      "Add an optional start time when creating or editing a workout manually",
      "Clearer Body recovery overview: seven-day coverage, latest readings by date, 28-day trends by source, and guidance when data is sparse",
      "Deleting your account now removes your private uploaded documents, and new uploads are blocked once deletion starts",
      "Health evidence CSV export now includes only confirmed rows",
    ],
    tag: "Alpha",
  },
  {
    date: "2026-09-18",
    title: "App: athlete-correctness fixes",
    body: "Fixes aimed at guidance you can trust. Early alpha — nothing here changes your plan without your approval.",
    bullets: [
      "Plan-gap repair: if weeks before your race block are uncovered, Plan offers a reviewed \u201cStart training now\u201d proposal; your calendar stays unchanged unless you accept",
      "Completed activities are matched to the right planned session (including two-a-days and bricks); ambiguous matches stay unmatched until you confirm",
      "Brief no longer says recovery is \u201cin range\u201d or shows a readiness score without data; stale readings show their date and source",
      "Race and Fuel no longer calculate splits or macro targets from missing or zero thresholds or body mass, and show which input to set",
      "Desktop layout fixes: no more content running off the right edge, and the header no longer covers the sidebar",
    ],
    tag: "Alpha",
  },
  {
    date: "2026-09-18",
    title: "FAQ, credibility, Support, and How it works",
    body: "More complete early-alpha marketing IA — still honest, still no fake metrics. Brand TriOS only.",
    bullets: [
      "FAQ page (/faq) with nav links — waitlist, proposal-based plan changes, integrations as roadmap/planned",
      "Home credibility strip — early alpha + waitlist, iron-distance first, you approve plan changes (no fake testimonials)",
      "Support completeness — primary Join waitlist CTA, FAQ/changelog self-serve, honest contact (no production inbox claim)",
      "How it works deepen — richer closed-loop detail plus a clear proposal-until-approve gate",
    ],
    tag: "Site",
  },
  {
    date: "2026-09-18",
    title: "Early-access waitlist on the marketing site",
    body: "Athletes can join the TriOS early-access waitlist from the marketing site. Still early alpha — expect rough edges while we iterate.",
    bullets: [
      "Waitlist form on /early-access (email required, optional name) writes to Neon",
      "Confirmation email via Resend after a successful new signup (duplicates do not re-send)",
      "Primary site CTAs now point to Join waitlist (/early-access); staging remains a secondary link",
      "Clearer on-page success and duplicate confirmation UI after submit",
    ],
    tag: "Site",
  },
  {
    date: "2026-09-17",
    title: "Marketing site scaffold",
    body: "Public TriOS marketing pages live: home, features, how-it-works, early access, changelog, about, privacy, terms, and support. Initial primary CTA pointed at the staging app (later moved to the waitlist).",
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
            {entry.bullets && entry.bullets.length > 0 ? (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
                {entry.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
