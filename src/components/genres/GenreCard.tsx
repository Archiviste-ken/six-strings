import Link from "next/link";

import type { Genre } from "@/src/types/genre";

interface GenreCardProps {
  genre: Genre;
}

export default function GenreCard({ genre }: GenreCardProps) {
  return (
    <Link
      href={`/genres/${genre.slug}`}
      className="group block border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]"
    >
      <div className="text-3xl">{genre.icon}</div>

      <h3 className="mt-5 font-heading text-xl text-[var(--foreground)]">{genre.name}</h3>

      <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
        {genre.description}
      </p>

      <p className="mt-6 text-[0.7rem] uppercase tracking-[0.2em] text-[var(--accent)]">
        {genre.bandCount} Bands
      </p>
    </Link>
  );
}