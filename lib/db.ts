import { neon } from "@neondatabase/serverless";

function connectionString(): string {
  const raw = process.env.DATABASE_URL;
  if (!raw) {
    throw new Error("DATABASE_URL is not configured");
  }
  // Strip accidental surrounding quotes from pasted env values
  return raw.trim().replace(/^["']|["']$/g, "");
}

export function getSql() {
  return neon(connectionString());
}
