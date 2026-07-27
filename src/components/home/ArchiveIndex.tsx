import Link from "next/link";
import { Music, Disc3, Radio, Globe, CalendarDays } from "lucide-react";
import Container from "@/src/components/ui/Container";
import { bands } from "@/src/data/bands";
import { albums } from "@/src/data/albums";
import { genres } from "@/src/data/genres";

// Derive counts from actual data
const countries = [...new Set(bands.map((b) => b.country))].length;
const formedYears = [...new Set(bands.map((b) => b.formed))].sort();
const yearSpan = `${formedYears[0]}–${formedYears[formedYears.length - 1]}`;

const items = [
  {
    icon: Music,
    label: "Bands",
    count: `${bands.length}`,
    suffix: "Artists",
    description: "Legendary artists and their stories",
    href: "/bands",
  },
  {
    icon: Disc3,
    label: "Albums",
    count: `${albums.length}`,
    suffix: "Records",
    description: "Iconic records that shaped rock & metal",
    href: "/albums",
  },
  {
    icon: Radio,
    label: "Genres",
    count: `${genres.length}`,
    suffix: "Styles",
    description: "From heavy metal to doom, explore every sound",
    href: "/bands",
  },
  {
    icon: Globe,
    label: "Countries",
    count: `${countries}`,
    suffix: "Nations",
    description: "The global map of rock & metal culture",
    href: "/bands",
  },
  {
    icon: CalendarDays,
    label: "Years",
    count: yearSpan,
    suffix: "Active",
    description: "Browse by decade and explore key moments",
    href: "/bands",
  },
];

export default function ArchiveIndex() {
  return (
    <section className="page-section">
      <Container>
        {/* Section label */}
        <div className="mb-14 flex items-center gap-4">
          <span className="eyebrow">Browse the Archive</span>
          <span aria-hidden="true" className="block h-px flex-1 bg-[var(--border)]" />
        </div>

        {/* Five-column stat strip — separated by hairline verticals */}
        <div className="grid grid-cols-2 gap-px bg-[var(--border)] sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, label, count, suffix, description, href }) => (
            <Link
              key={label}
              href={href}
              data-animate="stagger-up"
              className="group flex flex-col gap-5 bg-[var(--background)] p-8 transition-colors duration-200 hover:bg-[var(--surface-strong)]"
            >
              {/* Icon */}
              <div aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--text-muted)] transition-colors duration-200 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                <Icon size={18} strokeWidth={1.25} />
              </div>

              {/* Count + label */}
              <div>
                <p className="font-heading text-3xl font-medium leading-none text-[var(--foreground)]">
                  {count}
                </p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  {suffix}
                </p>
              </div>

              {/* Category name */}
              <p className="eyebrow text-[var(--foreground)]">{label}</p>

              {/* Description */}
              <p className="text-[0.75rem] leading-5 text-[var(--text-muted)]">
                {description}
              </p>

              {/* Arrow */}
              <div className="mt-auto inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)] transition-all duration-200 group-hover:text-[var(--foreground)]">
                Explore
                <span
                  aria-hidden="true"
                  className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1 text-[var(--accent)]"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
