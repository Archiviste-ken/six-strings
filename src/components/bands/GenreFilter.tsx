import { genres } from "@/src/data/genres";

export default function GenreFilter() {
  return (
    <div className="flex flex-wrap gap-2">
      {/* "All" button as the default selected state */}
      <button className="border border-[var(--accent)] bg-[var(--accent-soft)] px-5 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--foreground)] transition-colors duration-200">
        All
      </button>

      {/* Dynamic genres from data */}
      {genres.map((genre) => (
        <button
          key={genre.slug}
          aria-pressed="false"
          className="border border-[var(--border)] bg-transparent px-5 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--foreground)]"
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}