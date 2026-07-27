import Image from "next/image";

import type { Album } from "@/src/types/album";

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-red-600">
      <div className="relative aspect-square">
        <Image
          src={album.cover}
          alt={album.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg">
          {album.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          {album.year}
        </p>
      </div>
    </div>
  );
}