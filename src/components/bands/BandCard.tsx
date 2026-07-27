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
      data-animate="stagger-item"
      className="group block overflow-hidden border border-[var(--border)] bg-[var(--card)] transition-colors duration-300 hover:border-[var(--accent)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <div
          className="h-full w-full transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105"
        >
          <Image
            src={band.image}
            alt={band.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </div>

      <div className="space-y-3 border-t border-[var(--border)] p-5">
        <h3 className="font-heading text-xl text-[var(--foreground)]">{band.name}</h3>

        <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          <span>{band.genre}</span>
          <span>{band.country}</span>
        </div>

        <div className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          Formed · {band.formed}
        </div>
      </div>
    </Link>
  );
}
