import BandCard from "./BandCard";

import { bands } from "@/src/data/bands";

export default function BandGrid() {
  return (
    <div data-animate="stagger-grid" className="grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {bands.map((band) => (
        <BandCard key={band.id} band={band} />
      ))}
    </div>
  );
}