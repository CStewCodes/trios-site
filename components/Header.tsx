import Link from "next/link";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/early-access", label: "Early access" },
  { href: "/changelog", label: "Changelog" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

const APP_URL = "https://race-ops-staging-eosin.vercel.app";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
            T
          </span>
          <span>TriOS</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-accent px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Open app (staging)
        </a>
      </div>

      <nav
        className="flex gap-4 overflow-x-auto border-t border-border px-4 py-2 text-xs text-muted md:hidden"
        aria-label="Mobile"
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap hover:text-foreground">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
