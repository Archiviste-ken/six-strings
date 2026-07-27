import Image from "next/image";
import Link from "next/link";
import Container from "@/src/components/ui/Container";
import { bands } from "@/src/data/bands";

// Featured band: Black Sabbath (id 1) — the originals
const featured = bands.find((b) => b.id === 1)!;

export default function FeaturedStory() {
  return (
    <section className="page-section border-b border-[var(--border)]">
      <Container>
        {/* Section marker */}
        <div className="mb-12 flex items-center gap-4">
          <span className="eyebrow">Featured Story</span>
          <span
            aria-hidden="true"
            className="block h-px flex-1 bg-[var(--border)]"
          />
        </div>

        {/* Asymmetric two-col: 55 text / 45 image */}
        <div className="grid items-end gap-0 lg:grid-cols-[55fr_45fr]">
          {/* Left: editorial text block */}
          <div className="pb-0 pr-0 lg:pb-16 lg:pr-16" data-animate="fade-up">
            <p className="font-heading text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.92] text-[var(--foreground)]">
              {featured.name}
            </p>

            <p className="mt-6 max-w-sm font-heading text-[clamp(1.25rem,2.5vw,1.85rem)] leading-[1.18] text-[var(--text-soft)]">
              The band that<br />started it all.
            </p>

            <p className="mt-6 max-w-[34ch] text-sm leading-7 text-[var(--text-muted)]">
              {featured.description}
            </p>

            <p className="mt-3 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              {featured.country} · Formed {featured.formed}
            </p>

            <Link
              href={`/bands/${featured.slug}`}
              className="group mt-10 inline-flex items-center gap-3 border-b border-[var(--border)] pb-1 transition-colors duration-200 hover:border-[var(--accent)]"
            >
              <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--foreground)]">
                Read Their Story
              </span>
              <span
                aria-hidden="true"
                className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1 text-[var(--accent)]"
              >
                →
              </span>
            </Link>
          </div>

          {/* Right: band photo */}
          <div className="mt-12 lg:mt-0" data-animate="fade-up">
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--border)]">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover object-top grayscale-[20%] transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Bottom caption strip */}
              <div className="absolute bottom-0 inset-x-0 border-t border-[var(--border)] bg-[var(--bg-overlay-mid)] px-5 py-3 backdrop-blur-sm">
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  {featured.genre} · Birmingham, England · {featured.formed}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
