#!/usr/bin/env node

const ROUTES = [
  "/",
  "/about",
  "/features",
  "/how-it-works",
  "/faq",
  "/support",
  "/early-access",
  "/privacy",
  "/terms",
];
const REQUEST_TIMEOUT_MS = 10_000;

function getBaseUrl(value) {
  let url;

  try {
    url = new URL(value);
  } catch {
    throw new Error("BASE_URL must be an absolute HTTP or HTTPS URL.");
  }

  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password
  ) {
    throw new Error("BASE_URL must be an absolute HTTP or HTTPS URL without credentials.");
  }

  return url.origin;
}

function getTagContent(html, tag) {
  return html.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}\\s*>`, "i"))?.[1] ?? "";
}

function hasTextContent(html) {
  const text = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&(?:nbsp|#160|#x0*a0);/gi, " ")
    .replace(/[\s\u200b\ufeff]/g, "");

  return text.length > 0;
}

async function checkRoute(baseUrl, route) {
  const url = new URL(route, baseUrl);

  try {
    const response = await fetch(url, {
      headers: { accept: "text/html" },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      return `${route}: HTTP ${response.status}`;
    }

    const html = await response.text();
    const title = getTagContent(html, "title")
      .replace(/<[^>]*>/g, "")
      .replace(/&(?:nbsp|#160|#x0*a0);/gi, "")
      .trim();
    const main = getTagContent(html, "main");

    if (!title) {
      return `${route}: missing or empty <title>`;
    }

    if (!hasTextContent(main)) {
      return `${route}: missing or empty <main> content`;
    }

    return null;
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    return `${route}: request failed (${reason})`;
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length !== 1) {
    console.error("Usage: node scripts/site-smoke.mjs BASE_URL");
    process.exitCode = 2;
    return;
  }

  let baseUrl;

  try {
    baseUrl = getBaseUrl(args[0]);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 2;
    return;
  }

  const failures = [];

  for (const route of ROUTES) {
    const failure = await checkRoute(baseUrl, route);

    if (failure) {
      failures.push(failure);
    }
  }

  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(`FAIL ${failure}`);
    }

    console.error(`${failures.length} of ${ROUTES.length} routes failed.`);
    process.exitCode = 1;
    return;
  }

  console.log(`All ${ROUTES.length} public routes passed.`);
}

await main();
