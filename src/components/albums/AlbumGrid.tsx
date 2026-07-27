import AlbumCard from "./AlbumCard";

import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/shared/SectionHeading";

import { albums } from "@/src/data/albums";
import type { Band } from "@/src/types/band";

interface AlbumGridProps {
  band: Band;
}

export default function AlbumGrid({ band }: AlbumGridProps) {
  const bandAlbums = albums.filter((album) =>
    band.albums.includes(album.id)
  );

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Discography"
          title="Albums"
          description={`Essential releases from ${band.name}.`}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bandAlbums.map((album) => (
            <AlbumCard
              key={album.id}
              album={album}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}