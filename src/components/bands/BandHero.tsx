import Image from "next/image";
import Link from "next/link";
import Container from "@/src/components/ui/Container";
import type { Band } from "@/src/types/band";

interface BandHeroProps {
  band: Band;
}

export default function BandHero({ band }: BandHeroProps) {
  return (
    <section data-animate="band-hero" className="relative min-h-[78vh] overflow-hidden border-b border-[var(--border)]">
      {/* Full-bleed photo */}
      <div className="absolute inset-0">
        <Image
          src={band.image}
          alt={band.name}
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Dark gradients: strong bottom, soft top */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(9,9,9,0.97) 0%, rgba(9,9,9,0.65) 45%, rgba(9,9,9,0.2) 100%)",
          }}
        />
        {/* Left bleed for readability on wide screens */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/2 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, rgba(9,9,9,0.6) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[78vh] flex-col justify-between">
        {/* Top: back navigation */}
        <div className="pt-8">
          <Container>
            <Link
              href="/bands"
              className="group inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
            >
              <span
                aria-hidden="true"
                className="translate-x-0 transition-transform duration-200 group-hover:-translate-x-1"
              >
                ←
              </span>
              All Bands
            </Link>
          </Container>
        </div>

        {/* Bottom: band identity */}
        <Container className="pb-14">
          {/* Eyebrow: genre + country */}
          <p className="eyebrow text-[var(--accent)]">
            {band.genre} · {band.country}
          </p>

          {/* Band name — the centrepiece */}
          <h1 className="mt-4 font-heading text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.9] tracking-tight text-[var(--foreground)]">
            {band.name}
          </h1>

          {/* Metadata strip */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--border)] pt-6">
            <div className="flex flex-col gap-1">
              <span className="text-[0.6rem] uppercase tracking-[0.26em] text-[var(--text-muted)]">
                Formed
              </span>
              <span className="font-heading text-2xl text-[var(--foreground)]">
                {band.formed}
              </span>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-8 w-px bg-[var(--border)] sm:block"
            />

            <div className="flex flex-col gap-1">
              <span className="text-[0.6rem] uppercase tracking-[0.26em] text-[var(--text-muted)]">
                Origin
              </span>
              <span className="font-heading text-2xl text-[var(--foreground)]">
                {band.country}
              </span>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-8 w-px bg-[var(--border)] sm:block"
            />

            <div className="flex flex-col gap-1">
              <span className="text-[0.6rem] uppercase tracking-[0.26em] text-[var(--text-muted)]">
                Genre
              </span>
              <span className="font-heading text-2xl text-[var(--foreground)]">
                {band.genre}
              </span>
            </div>

            <div
              aria-hidden="true"
              className="hidden h-8 w-px bg-[var(--border)] sm:block"
            />

            <div className="flex flex-col gap-1">
              <span className="text-[0.6rem] uppercase tracking-[0.26em] text-[var(--text-muted)]">
                Members
              </span>
              <span className="font-heading text-2xl text-[var(--foreground)]">
                {band.members.length}
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}