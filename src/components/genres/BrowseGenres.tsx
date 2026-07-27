import GenreCard from "./GenreCard";
import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/shared/SectionHeading";
import { genres } from "@/src/data/genres";

export default function BrowseGenres() {
  return (
    <section className="page-section">
      <Container>
        <SectionHeading
          eyebrow="Explore"
          title="Browse by Genre"
          description="Discover bands through the styles that defined generations of rock and metal."
        />

        <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {genres.map((genre) => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </div>
      </Container>
    </section>
  );
}