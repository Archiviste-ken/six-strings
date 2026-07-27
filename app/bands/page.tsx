import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/shared/SectionHeading";

import BandSearch from "@/src/components/bands/BandSearch";
import GenreFilter from "@/src/components/bands/GenreFilter";
import SortSelect from "@/src/components/bands/SortSelect";
import BandGrid from "@/src/components/bands/BandGrid";

export default function BandsPage() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Explore"
          title="Browse Bands"
          description="Discover legendary bands from every era of rock and heavy metal."
        />

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <BandSearch />
          <SortSelect />
        </div>

        <div className="mt-6">
          <GenreFilter />
        </div>

        <BandGrid />
      </Container>
    </main>
  );
}