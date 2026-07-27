import Link from "next/link";
import Container from "@/src/components/ui/Container";
import { albums } from "@/src/data/albums";
import { bands } from "@/src/data/bands";

// Resolve band name from bandId
function getBandName(bandId: number): string {
  return bands.find((b) => b.id === bandId)?.name ?? "Unknown";
}

export default function AlbumsIndex() {
  return (
    <section className="page-section border-b border-[var(--border)]">
      <Container>
        {/* Horizontal rule with label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="eyebrow">Essential Albums</span>
          <span aria-hidden="true" className="block h-px flex-1 bg-[var(--border)]" />
        </div>

        {/* Split: pull-quote left / album rows right */}
        <div className="grid gap-12 lg:grid-cols-[42fr_58fr] lg:gap-0">
          {/* Left: typographic pull-quote */}
          <div className="flex flex-col justify-between lg:border-r lg:border-[var(--border)] lg:pr-16">
            <p className="font-heading text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.05] text-[var(--foreground)]">
              The albums<br />that defined<br />generations.
            </p>

            <div className="mt-10 lg:mt-0">
              <p className="mb-6 text-sm leading-7 text-[var(--text-muted)]">
                A curated index of the essential records from rock and heavy
                metal history — selected for lasting impact and cultural weight.
              </p>
              <Link
                href="/albums"
                className="group inline-flex items-center gap-3 border-b border-[var(--border)] pb-1 transition-colors duration-200 hover:border-[var(--accent)]"
              >
                <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--foreground)]">
                  View All Albums
                </span>
                <span
                  aria-hidden="true"
                  className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1 text-[var(--accent)]"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right: album rows — text-only (no covers) */}
          <div className="lg:pl-16">
            {/* Table header */}
            <div className="mb-4 grid grid-cols-[auto_1fr_auto] items-center gap-x-8 border-b border-[var(--border)] pb-3">
              <span className="text-[0.62rem] uppercase tracking-[0.26em] text-[var(--text-muted)]">No.</span>
              <span className="text-[0.62rem] uppercase tracking-[0.26em] text-[var(--text-muted)]">Title</span>
              <span className="text-[0.62rem] uppercase tracking-[0.26em] text-[var(--text-muted)]">Year</span>
            </div>

            {/* Album rows */}
            <div className="divide-y divide-[var(--border)]">
              {albums.map((album, i) => (
                <div
                  key={album.id}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-8 py-5 transition-colors duration-200 hover:bg-[var(--surface-strong)]"
                >
                  {/* Number */}
                  <span className="w-6 text-[0.7rem] tabular-nums text-[var(--text-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Title + band */}
                  <div className="min-w-0">
                    <p className="font-heading text-lg leading-tight text-[var(--foreground)] group-hover:text-[var(--foreground)]">
                      {album.title}
                    </p>
                    <p className="mt-0.5 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      {getBandName(album.bandId)} · {album.genre}
                    </p>
                  </div>

                  {/* Year */}
                  <span className="text-[0.78rem] tabular-nums tracking-wider text-[var(--text-muted)]">
                    {album.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
