# TriOS marketing site

Public marketing site for **TriOS** — iron-distance triathlon training software (early access).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Vercel-ready (`npm run build`)
- Neon Postgres for early-access waitlist (`@neondatabase/serverless`)
- Resend for waitlist confirmation email (`resend`)

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero + morning brief promise |
| `/features` | Capability cards |
| `/how-it-works` | Closed loop (import → understand → plan → execute → learn) |
| `/early-access` | Early-access waitlist signup |
| `/faq` | FAQ — early-access honest answers |
| `/changelog` | Starter changelog (early alpha) |
| `/about` | About TriOS |
| `/privacy` | Privacy placeholder |
| `/terms` | Terms placeholder |
| `/support` | Support / contact |

Primary CTA → [TriOS app (staging)](https://race-ops-staging-eosin.vercel.app)

## Environment variables

Copy `.env.example` to `.env.local` for local development. **Never commit secrets.**

| Variable | Required | Notes |
|----------|----------|--------|
| `DATABASE_URL` | Yes (for waitlist) | Neon connection string for project **`trios-site-waitlist`**. Server-only. Set the same value in Vercel project env for production/preview. |
| `RESEND_API_KEY` | Recommended | Resend API key (server-only). Used to send one confirmation email after a **new** waitlist signup. If missing, signup still succeeds and send is skipped (logged). |
| `RESEND_FROM` | Optional | From address. Defaults to `TriOS <onboarding@resend.dev>` until a custom domain is verified in Resend. |

The waitlist writes to table `waitlist_signups` (email unique, optional name, source default `early-access`). Duplicate signups do not send another confirmation email. Email failures never roll back a successful insert.

## Local development

```bash
npm install
cp .env.example .env.local   # then set DATABASE_URL from Neon
npm run dev
```

```bash
npm run build
```

## Notes

- Brand is **TriOS** (not TriPilot).
- No GitHub Actions workflows in this repo.
- Waitlist only on `/early-access` — no payment/checkout in this marketing site yet. Pricing comes later.
- Conservative feature claims; device integrations called out as roadmap/planned when mentioned.
