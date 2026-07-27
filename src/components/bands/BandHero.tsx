import Image from "next/image";

import Container from "@/src/components/ui/Container";
import type { Band } from "@/src/types/band";
import Button from "@/src/components/ui/button";

interface BandHeroProps {
  band: Band;
}

export default function BandHero({ band }: BandHeroProps) {
  return (
    <section className="border-b border-zinc-800 py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src={band.image}
              alt={band.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-red-500">
              {band.genre}
            </p>

            <h1 className="mt-4 text-6xl font-black">
              {band.name}
            </h1>

            <p className="mt-4 text-zinc-400">
              {band.country} • Formed {band.formed}
            </p>

            <p className="mt-8 text-lg leading-8 text-zinc-300">
              {band.description}
            </p>

            <div className="mt-10">
              <Button>
                ♥ Add to Favorites
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}