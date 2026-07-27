import Image from "next/image";
import Link from "next/link";
import Container from "@/src/components/ui/Container";

import { bands } from "@/src/data/bands";
import type { Band } from "@/src/types/band";

interface SimilarBandsProps {
  band: Band;
}

export default function SimilarBands({ band }: SimilarBandsProps) {
  const similarBands = bands
    .filter((item) => item.genre === band.genre && item.id !== band.id)
    .slice(0, 3);

  if (similarBands.length === 0) {
    return null;
  }

  return (
    <section className="page-section border-b border-[var(--border)]">
      <Container>
        {/* Section header */}
        <div className="mb-12 flex items-center gap-4">
          <span className="eyebrow">You May Also Like</span>
          <span
            aria-hidden="true"
            className="block h-px flex-1 bg-[var(--border)]"
          />
          <span className="text-[0.65rem] uppercase tracking-[0.24em] text-[var(--text-muted)]">
            More {band.genre}
          </span>
        </div>

        {/* Horizontal panel list — not a standard card grid */}
        <div className="grid gap-px bg-[var(--border)] sm:grid-cols-3">
          {similarBands.map((item) => (
            <Link
              key={item.id}
              href={`/bands/${item.slug}`}
              className="group relative flex flex-col overflow-hidden bg-[var(--background)] transition-colors duration-200 hover:bg-[var(--surface-strong)]"
            >
              {/* Image — wide landscape format */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(9,9,9,0.7) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Text below image */}
              <div className="flex flex-1 flex-col gap-2 p-6">
                <p className="eyebrow text-[var(--accent)]">{item.genre}</p>
                <h3 className="font-heading text-2xl leading-tight text-[var(--foreground)]">
                  {item.name}
                </h3>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {item.country} · {item.formed}
                </p>

                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--foreground)]">
                    View
                    <span
                      aria-hidden="true"
                      className="translate-x-0 text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}