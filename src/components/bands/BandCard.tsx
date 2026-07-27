import Image from "next/image";
import Link from "next/link";

import type { Band } from "@/src/types/band";

interface BandCardProps {
  band: Band;
}

export default function BandCard({ band }: BandCardProps) {
  return (
    <Link
      href={`/bands/${band.slug}`}
      className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-red-600"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={band.image}
          alt={band.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-5">
        <h3 className="text-xl font-bold">
          {band.name}
        </h3>

        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>{band.genre}</span>

          <span>{band.country}</span>
        </div>

        <div className="text-sm text-zinc-500">
          Formed • {band.formed}
        </div>
      </div>
    </Link>
  );
}