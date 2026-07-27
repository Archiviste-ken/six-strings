import GenreCard from "./GenreCard";

import SectionHeading from "@/src/components/shared/SectionHeading";
import { genres } from "@/src/data/genres";

export default function BrowseGenres() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Explore"
        title="Browse by Genre"
        description="Discover bands through the styles that defined generations of rock and metal."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {genres.map((genre) => (
          <GenreCard
            key={genre.id}
            genre={genre}
          />
        ))}
      </div>
    </section>
  );
}