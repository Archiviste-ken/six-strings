import Container from "@/src/components/ui/Container";
import type { Band } from "@/src/types/band";

interface BandInfoProps {
  band: Band;
}

export default function BandInfo({ band }: BandInfoProps) {
  return (
    <section className="page-section border-b border-[var(--border)]">
      <Container>
        {/* Two-column editorial layout: story left, members right */}
        <div className="grid gap-16 lg:grid-cols-[60fr_40fr] lg:gap-24">

          {/* Left: Story / History */}
          <div>
            {/* Section marker */}
            <div className="mb-10 flex items-center gap-4">
              <span className="eyebrow">Story</span>
              <span
                aria-hidden="true"
                className="block h-px flex-1 bg-[var(--border)]"
              />
            </div>

            {/* Large statement from description */}
            <p className="font-heading text-[clamp(1.3rem,2.5vw,1.85rem)] font-medium leading-[1.18] text-[var(--foreground)]">
              {band.description}
            </p>

            {/* History body copy */}
            <p className="mt-8 text-base leading-8 text-[var(--text-soft)]">
              {band.history}
            </p>
          </div>

          {/* Right: Members */}
          <div className="lg:border-l lg:border-[var(--border)] lg:pl-16">
            {/* Section marker */}
            <div className="mb-10 flex items-center gap-4">
              <span className="eyebrow">Members</span>
              <span
                aria-hidden="true"
                className="block h-px flex-1 bg-[var(--border)]"
              />
            </div>

            {/* Member list — typographic rows */}
            <ul className="divide-y divide-[var(--border)]">
              {band.members.map((member, index) => (
                <li
                  key={member}
                  className="flex items-center gap-5 py-5"
                >
                  {/* Index number */}
                  <span className="w-5 shrink-0 text-[0.65rem] tabular-nums text-[var(--text-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Member name */}
                  <span className="font-heading text-xl text-[var(--foreground)]">
                    {member}
                  </span>
                </li>
              ))}
            </ul>

            {/* Formation footnote */}
            <p className="mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Est. {band.formed} · {band.country}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}