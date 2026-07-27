import Image from "next/image";
import Container from "@/src/components/ui/Container";
import { bands } from "@/src/data/bands";

// Key eras with a band image from existing assets
const eras = [
  { year: 1965, label: "Pre-Metal" },
  { year: 1970, label: "Heavy Metal" },
  { year: 1975, label: "NWOBHM" },
  { 
    year: 1981, 
    label: "Thrash",
    blurbHeadline: "The Big Four emerge.",
    blurb: "The early 1980s saw the explosive rise of thrash metal. Metallica, Slayer, Megadeth, and Anthrax — collectively known as the Big Four — redefined aggression, speed, and technical musicianship. Their landmark debuts changed rock music forever.",
    bandsMentioned: "Metallica · Slayer · Megadeth · Pantera"
  },
  { year: 1991, label: "Groove" },
  { year: 2000, label: "Nu-Metal" },
  { year: 2010, label: "Revival" },
  { year: 2020, label: "Today" },
];

// Highlight the 1981 Thrash era
const HIGHLIGHT_INDEX = 3;

// Use Iron Maiden (1975) as the era image
const eraImage = bands.find((b) => b.id === 3)!;

export default function ChronologyStrip() {
  return (
    <section className="page-section border-b border-[var(--border)] overflow-hidden">
      <Container size="wide">
        {/* Label row */}
        <div className="mb-10 flex items-center gap-4">
          <span className="eyebrow">Timeline</span>
          <span aria-hidden="true" className="block h-px flex-1 bg-[var(--border)]" />
        </div>

        {/* Year markers row */}
        <div className="relative mb-0">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute top-[1.1rem] inset-x-0 h-px bg-[var(--border)]"
          />

          <ol
            aria-label="Timeline"
            className="relative grid"
            style={{ gridTemplateColumns: `repeat(${eras.length}, minmax(0, 1fr))` }}
          >
            {eras.map((era, i) => {
              const isHighlight = i === HIGHLIGHT_INDEX;
              return (
                <li key={era.year} aria-current={isHighlight ? "step" : undefined} className="flex flex-col items-center">
                  {/* Dot */}
                  <div
                    className={`relative z-10 flex h-[1.4rem] w-[1.4rem] items-center justify-center rounded-full border transition-colors duration-200 ${
                      isHighlight
                        ? "border-[var(--accent)] bg-[var(--accent)]"
                        : "border-[var(--border-strong)] bg-[var(--surface-raised)]"
                    }`}
                  >
                    {isHighlight && (
                      <span
                        aria-hidden="true"
                        className="block h-1.5 w-1.5 rounded-full bg-[var(--primary-foreground)]"
                      />
                    )}
                  </div>

                  {/* Year label */}
                  <p
                    className={`mt-3 text-[0.62rem] uppercase tracking-[0.22em] ${
                      isHighlight ? "text-[var(--foreground)]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {era.year}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Highlighted era detail card */}
        <div className="mt-10 grid items-start gap-10 border-t border-[var(--border)] pt-10 lg:grid-cols-[1fr_auto]">
          {/* Text side */}
          <div className="max-w-xl">
            <p className="eyebrow text-[var(--accent)]">{eras[HIGHLIGHT_INDEX].label} Era · {eras[HIGHLIGHT_INDEX].year}</p>
            <h3 className="mt-4 font-heading text-[clamp(1.6rem,3vw,2.6rem)] leading-tight text-[var(--foreground)]">
              {eras[HIGHLIGHT_INDEX].blurbHeadline}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
              {eras[HIGHLIGHT_INDEX].blurb}
            </p>
            <p className="mt-6 text-[0.62rem] uppercase tracking-[0.26em] text-[var(--text-muted)]">
              Bands formed during this era: {eras[HIGHLIGHT_INDEX].bandsMentioned}
            </p>
          </div>

          {/* Image side */}
          <div className="relative aspect-[3/2] w-full overflow-hidden border border-[var(--border)] lg:aspect-[4/3] lg:w-64">
            <Image
              src={eraImage.image}
              alt={eraImage.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 256px"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, var(--bg-overlay-mid) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
