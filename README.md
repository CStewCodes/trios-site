# TriOS marketing site

Public marketing site for **TriOS** — iron-distance triathlon training software (early access).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Vercel-ready (`npm run build`)

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero + morning brief promise |
| `/features` | Capability cards |
| `/how-it-works` | Closed loop (import → understand → plan → execute → learn) |
| `/early-access` | Early access / pricing placeholder |
| `/changelog` | Starter changelog (early alpha) |
| `/about` | About TriOS |
| `/privacy` | Privacy placeholder |
| `/terms` | Terms placeholder |
| `/support` | Support / contact |

Primary CTA → [TriOS app (staging)](https://race-ops-staging-eosin.vercel.app)

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build
```

## Notes

- Brand is **TriOS** (not TriPilot).
- No GitHub Actions workflows in this repo.
- Conservative feature claims; device integrations called out as roadmap/planned when mentioned.
