import { PRIVACY_CONTACT_EMAIL, PRIVACY_CONTACT_IS_PLACEHOLDER } from "@/lib/legal";

/** Renders the privacy contact email, visibly marked while it is a placeholder. */
export default function PrivacyContact() {
  return (
    <>
      <span className="font-mono text-xs text-foreground">{PRIVACY_CONTACT_EMAIL}</span>
      {PRIVACY_CONTACT_IS_PLACEHOLDER && (
        <span className="ml-2 rounded-full border border-border px-2 py-0.5 text-xs font-medium text-muted">
          Placeholder: not a monitored inbox yet
        </span>
      )}
    </>
  );
}
