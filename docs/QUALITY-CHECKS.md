# Public site smoke checks

Run the public-route smoke check against a local site or preview by passing its base URL:

```sh
node scripts/site-smoke.mjs BASE_URL
```

The check requests `/`, `/about`, `/features`, `/how-it-works`, `/faq`, `/support`, `/early-access`, `/privacy`, and `/terms`. Each route must return a successful response with a nonempty `<title>` and `<main>` content. Requests follow redirects and time out after 10 seconds; failed routes are reported and make the command exit nonzero.

Run the repository checks before review:

```sh
npm run lint
npm run build
```
