import type { Album } from "@/src/types/album";

interface AlbumCardProps {
  album: Album;
  index: number;
}

export default function AlbumCard({ album, index }: AlbumCardProps) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-start gap-x-8 border-b border-[var(--border)] py-6 last:border-b-0">
      {/* Index */}
      <span className="mt-1 w-6 text-[0.68rem] tabular-nums text-[var(--text-muted)]">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title + description */}
      <div className="min-w-0">
        <h4 className="font-heading text-2xl leading-tight text-[var(--foreground)]">
          {album.title}
        </h4>
        <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
          {album.description}
        </p>
        <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)]">
          {album.genre}
        </p>
      </div>

      {/* Year */}
      <span className="mt-1 font-heading text-2xl tabular-nums text-[var(--text-muted)]">
        {album.year}
      </span>
    </div>
  );
}