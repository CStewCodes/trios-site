import Link from "next/link";

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

const productLinks = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/early-access", label: "Early access" },
  { href: "/changelog", label: "Changelog" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-foreground">TriOS</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Iron-distance triathlon training software. Morning brief clarity for what today, why it
            matters, and what changed — built for 140.6 athletes in early access.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-medium text-accent hover:text-accent-hover"
          >
            Open TriOS app (staging) →
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted sm:px-6">
        © {new Date().getFullYear()} TriOS. Early alpha — features and availability may change.
      </div>
    </footer>
  );
}
