import BandCard from "./BandCard";

import SectionHeading from "@/src/components/shared/SectionHeading";
import { bands } from "@/src/data/bands";

export default function FeaturedBands() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Featured"
        title="Legendary Bands"
        description="From the pioneers of heavy metal to the icons of thrash and hard rock."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {bands.slice(0, 6).map((band) => (
          <BandCard
            key={band.id}
            band={band}
          />
        ))}
      </div>
    </section>
  );
}