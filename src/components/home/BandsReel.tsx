import Image from "next/image";
import Link from "next/link";
import Container from "@/src/components/ui/Container";
import { bands } from "@/src/data/bands";

// Take the first 3 bands for the reel
const reelBands = bands.slice(0, 3);

export default function BandsReel() {
  return (
    <section className="border-b border-[var(--border)]">
      {/* Section label strip */}
      <Container className="py-8">
        <div className="flex items-center gap-4">
          <span className="eyebrow">Legendary Bands</span>
          <span aria-hidden="true" className="block h-px flex-1 bg-[var(--border)]" />
          <Link
            href="/bands"
            className="group inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.24em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
          >
            All Bands
            <span aria-hidden="true" className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Container>

      {/* Horizontal reel — three equal panels, no standard card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {reelBands.map((band, index) => (
          <Link
            key={band.id}
            href={`/bands/${band.slug}`}
            aria-label={`View ${band.name} — ${band.genre}`}
            data-animate="fade-up"
            className={`group relative block overflow-hidden ${
              index < reelBands.length - 1 ? "border-b sm:border-b-0 sm:border-r border-[var(--border)]" : ""
            }`}
          >
            {/* Image — tall portrait aspect */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={band.image}
                alt={band.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />

              {/* Gradient overlay — strong at bottom */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--bg-overlay-strong) 0%, var(--bg-overlay-soft) 40%, transparent 70%)",
                }}
              />

              {/* Hover accent line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 inset-x-0 h-[2px] translate-y-full bg-[var(--accent)] transition-transform duration-300 group-hover:translate-y-0"
              />

              {/* Content at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="eyebrow mb-3 text-[var(--accent)]">{band.genre}</p>
                <h3 className="font-heading text-[clamp(1.6rem,3.5vw,2.6rem)] leading-[0.96] text-[var(--foreground)]">
                  {band.name}
                </h3>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  {band.country} · {band.formed}
                </p>

                {/* Arrow that slides in on hover */}
                <div className="mt-4 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--foreground)] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  View
                  <span aria-hidden="true" className="text-[var(--accent)]">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
