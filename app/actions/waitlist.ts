"use server";

import { getSql } from "@/lib/db";

export type WaitlistState = {
  status: "idle" | "success" | "duplicate" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const emailRaw = String(formData.get("email") ?? "");
  const nameRaw = String(formData.get("name") ?? "");
  const email = normalizeEmail(emailRaw);
  const name = nameRaw.trim() || null;

  if (!email || !EMAIL_RE.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  if (name && name.length > 120) {
    return {
      status: "error",
      message: "Name is too long. Please keep it under 120 characters.",
    };
  }

  try {
    const sql = getSql();
    await sql`
      INSERT INTO waitlist_signups (email, name, source)
      VALUES (${email}, ${name}, 'early-access')
    `;
    return {
      status: "success",
      message:
        "You're on the TriOS waitlist. We'll email you about early access and product updates — nothing more.",
    };
  } catch (err: unknown) {
    const code =
      err && typeof err === "object" && "code" in err
        ? String((err as { code: unknown }).code)
        : "";
    const msg =
      err && typeof err === "object" && "message" in err
        ? String((err as { message: unknown }).message)
        : "";

    // Postgres unique_violation
    if (code === "23505" || /duplicate|unique/i.test(msg)) {
      return {
        status: "duplicate",
        message:
          "That email is already on the waitlist. You're all set — we'll be in touch when early access opens further.",
      };
    }

    console.error("waitlist insert failed", code || "unknown");
    return {
      status: "error",
      message:
        "Something went wrong saving your signup. Please try again in a moment.",
    };
  }
}
