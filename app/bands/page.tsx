import Container from "@/src/components/ui/Container";
import BandSearch from "@/src/components/bands/BandSearch";
import GenreFilter from "@/src/components/bands/GenreFilter";
import SortSelect from "@/src/components/bands/SortSelect";
import BandGrid from "@/src/components/bands/BandGrid";

export default function BandsPage() {
  return (
    <main>
      {/* Editorial masthead — different from a plain heading */}
      <section className="border-b border-[var(--border)] py-16">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            {/* Left: editorial label + display headline */}
            <div>
              <span className="eyebrow">Archive</span>
              <h1 className="mt-4 font-heading text-[clamp(2.8rem,6vw,5rem)] font-medium leading-[0.95] text-[var(--foreground)]">
                Legendary<br />Bands
              </h1>
            </div>

            {/* Right: description */}
            <p className="max-w-xs text-sm leading-7 text-[var(--text-soft)] lg:text-right">
              Discover legendary artists from every era of rock and heavy metal.
            </p>
          </div>
        </Container>
      </section>

      {/* Controls — search + sort */}
      <section className="border-b border-[var(--border)]">
        <Container className="py-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <BandSearch />
            <SortSelect />
          </div>
        </Container>
      </section>

      {/* Genre filter strip */}
      <section className="border-b border-[var(--border)]">
        <Container className="py-4">
          <GenreFilter />
        </Container>
      </section>

      {/* Band grid */}
      <section className="page-section">
        <Container>
          <BandGrid />
        </Container>
      </section>
    </main>
  );
}
