import Link from "next/link";

import type { Genre } from "@/src/types/genre";

interface GenreCardProps {
  genre: Genre;
}

export default function GenreCard({ genre }: GenreCardProps) {
  return (
    <Link
      href={`/genres/${genre.slug}`}
      className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-600"
    >
      <div className="text-4xl">{genre.icon}</div>

      <h3 className="mt-5 text-xl font-bold">{genre.name}</h3>

      <p className="mt-2 text-sm text-zinc-400">
        {genre.description}
      </p>

      <p className="mt-6 text-sm font-medium text-red-500">
        {genre.bandCount} Bands
      </p>
    </Link>
  );
}