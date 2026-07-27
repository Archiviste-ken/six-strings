import AlbumCard from "./AlbumCard";
import Link from "next/link";
import Container from "@/src/components/ui/Container";

import { albums } from "@/src/data/albums";
import type { Band } from "@/src/types/band";

interface AlbumGridProps {
  band: Band;
}

export default function AlbumGrid({ band }: AlbumGridProps) {
  const bandAlbums = albums.filter((album) =>
    band.albums.includes(album.id)
  );

  // If this band has no albums in the data, render nothing
  if (bandAlbums.length === 0) return null;

  return (
    <section className="page-section border-b border-[var(--border)]">
      <Container>
        {/* Section header */}
        <div className="mb-12 flex items-center gap-4">
          <span className="eyebrow">Discography</span>
          <span
            aria-hidden="true"
            className="block h-px flex-1 bg-[var(--border)]"
          />
          <Link
            href="/albums"
            className="group inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.24em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
          >
            All Albums
            <span
              aria-hidden="true"
              className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Split: pull-quote left / album rows right */}
        <div className="grid gap-12 lg:grid-cols-[38fr_62fr] lg:gap-0">
          {/* Left: editorial label */}
          <div className="flex flex-col justify-between lg:border-r lg:border-[var(--border)] lg:pr-14">
            <div>
              <p className="font-heading text-[clamp(1.8rem,3.5vw,2.8rem)] font-medium leading-[1.06] text-[var(--foreground)]">
                Essential releases from {band.name}.
              </p>
              <p className="mt-5 text-sm leading-7 text-[var(--text-muted)]">
                {bandAlbums.length === 1
                  ? "One landmark album in the archive."
                  : `${bandAlbums.length} albums in the archive.`}
              </p>
            </div>
          </div>

          {/* Right: album table */}
          <div data-animate="stagger-grid" className="lg:pl-14">
            {bandAlbums.map((album, i) => (
              <AlbumCard key={album.id} album={album} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}