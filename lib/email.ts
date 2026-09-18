import { Resend } from "resend";

const DEFAULT_FROM = "TriOS <onboarding@resend.dev>";

function fromAddress(): string {
  const raw = process.env.RESEND_FROM?.trim();
  return raw && raw.length > 0 ? raw : DEFAULT_FROM;
}

/**
 * Sends waitlist confirmation. Never throws to callers — logs and returns false on failure.
 * Skips send (and logs) when RESEND_API_KEY is missing.
 */
export async function sendWaitlistConfirmation(opts: {
  to: string;
  name?: string | null;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.warn("waitlist confirmation skipped: RESEND_API_KEY not configured");
    return false;
  }

  const greeting = opts.name?.trim() ? `Hi ${opts.name.trim()},` : "Hi,";
  const subject = "You're on the TriOS early-access waitlist";
  const text = [
    greeting,
    "",
    "Thanks for joining the TriOS early-access waitlist.",
    "",
    "TriOS is iron-distance triathlon training software — morning-brief clarity for what today is for, why it matters, and what changed. We're in early alpha and opening access carefully.",
    "",
    "We'll email you when early access opens further. No spam — only TriOS early access and product updates related to your signup.",
    "",
    "— The TriOS team",
  ].join("\n");

  const html = `
    <p>${escapeHtml(greeting)}</p>
    <p>Thanks for joining the <strong>TriOS</strong> early-access waitlist.</p>
    <p>TriOS is iron-distance triathlon training software — morning-brief clarity for what today is for, why it matters, and what changed. We're in early alpha and opening access carefully.</p>
    <p>We'll email you when early access opens further. No spam — only TriOS early access and product updates related to your signup.</p>
    <p>— The TriOS team</p>
  `.trim();

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromAddress(),
      to: opts.to,
      subject,
      text,
      html,
    });
    if (error) {
      console.error("waitlist confirmation send failed", error.name || "resend_error");
      return false;
    }
    return true;
  } catch (err: unknown) {
    const name = err && typeof err === "object" && "name" in err ? String((err as { name: unknown }).name) : "unknown";
    console.error("waitlist confirmation send threw", name);
    return false;
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
