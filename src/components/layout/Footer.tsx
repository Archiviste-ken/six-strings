import Link from "next/link";

import Container from "@/src/components/ui/Container";
import { navigationLinks } from "@/src/data/navigation";
import { genres } from "@/src/data/genres";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(17,17,17,0.55)]">
      {/* 3-column top section */}
      <Container className="grid gap-10 py-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)] md:items-start">
        {/* Brand column */}
        <div className="space-y-4">
          <span className="block font-heading text-2xl uppercase tracking-[0.18em] text-[var(--foreground)]">
            Six Strings
          </span>
          <p className="max-w-md text-sm leading-7 text-[var(--text-soft)]">
            A digital archive devoted to the stories, records, and enduring
            lineage of rock and heavy metal.
          </p>
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--text-muted)]">
            Premium &middot; Editorial &middot; Timeless
          </p>
        </div>

        {/* Archive links column */}
        <nav aria-label="Archive links" className="space-y-4">
          <p className="eyebrow">Archive</p>
          <div className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.78rem] uppercase tracking-[0.22em] text-[var(--text-soft)] transition-colors duration-200 hover:text-[var(--foreground)]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Genres column */}
        <nav aria-label="Genres" className="space-y-4">
          <p className="eyebrow">Genres</p>
          <div className="flex flex-col gap-3">
            {genres.map((genre) => (
              <Link
                key={genre.slug}
                href={`/genres/${genre.slug}`}
                className="text-[0.78rem] uppercase tracking-[0.22em] text-[var(--text-soft)] transition-colors duration-200 hover:text-[var(--foreground)]"
              >
                {genre.name}
              </Link>
            ))}
          </div>
        </nav>
      </Container>

      {/* Bottom strip */}
      <Container className="border-t border-[var(--border)] py-4">
        <div className="flex flex-col gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Six Strings</p>
          <p>Editorial archive of rock and metal</p>
        </div>
      </Container>
    </footer>
  );
}
