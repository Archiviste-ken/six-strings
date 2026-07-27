import Container from "@/src/components/ui/Container";
import { bands } from "@/src/data/bands";
import { albums } from "@/src/data/albums";
import { genres } from "@/src/data/genres";

const formedYears = [...new Set(bands.map((b) => b.formed))].sort();
const yearSpan = `${formedYears[0]}–${formedYears[formedYears.length - 1]}`;

const stats = [
  { label: "Bands", value: `${bands.length}`, note: "Artists" },
  { label: "Albums", value: `${albums.length}`, note: "Records" },
  { label: "Genres", value: `${genres.length}`, note: "Styles" },
  { label: "Years", value: yearSpan, note: "Active" },
];

const pillars = [
  {
    heading: "Mission",
    text: "To document the artists, records, and movements that shaped rock and heavy metal.",
  },
  {
    heading: "Method",
    text: "Editorial rigour — each entry is written with chronological care and historical context.",
  },
  {
    heading: "Scope",
    text: "Six bands, twelve albums, four genres — with the archive growing over time.",
  },
  {
    heading: "Era",
    text: "From the late sixties through the present day, tracing the full arc of the genre.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Editorial masthead */}
      <section className="border-b border-[var(--border)] py-16">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow">About the Archive</span>
              <h1 className="mt-4 font-heading text-[clamp(2.8rem,6vw,5rem)] font-medium leading-[0.95] text-[var(--foreground)]">
                Six Strings
              </h1>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[var(--text-soft)] lg:text-right">
              An editorial archive devoted to the stories, records, and enduring lineage of rock and heavy metal.
            </p>
          </div>
        </Container>
      </section>

      {/* Two-column editorial section */}
      <section className="page-section border-b border-[var(--border)]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
            {/* Left: large serif statement */}
            <div>
              <p className="font-heading text-[clamp(1.5rem,3vw,2.4rem)] font-medium leading-[1.2] text-[var(--foreground)]">
                A digital archive devoted to the stories, records, and enduring lineage of rock and heavy metal.
              </p>
            </div>

            {/* Right: editorial pillars */}
            <div className="divide-y divide-[var(--border)]">
              {pillars.map((pillar) => (
                <div key={pillar.heading} className="py-6 first:pt-0 last:pb-0">
                  <span className="eyebrow">{pillar.heading}</span>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-soft)]">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stats section */}
      <section className="page-section">
        <Container>
          <div className="mb-14 flex items-center gap-4">
            <span className="eyebrow">By the Numbers</span>
            <span aria-hidden="true" className="block h-px flex-1 bg-[var(--border)]" />
          </div>

          <div className="grid grid-cols-2 gap-px bg-[var(--border)] sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 bg-[var(--background)] p-8"
              >
                <p className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-medium leading-none text-[var(--foreground)]">
                  {stat.value}
                </p>
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  {stat.note}
                </p>
                <p className="eyebrow text-[var(--foreground)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
