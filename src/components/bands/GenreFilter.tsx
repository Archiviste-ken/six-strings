const genres = [
  "All",
  "Heavy Metal",
  "Thrash Metal",
  "Hard Rock",
  "Progressive Metal",
];

export default function GenreFilter() {
  return (
    <div className="flex flex-wrap gap-3">
      {genres.map((genre) => (
        <button
          key={genre}
          className="rounded-full border border-zinc-800 bg-zinc-900 px-5 py-2 text-sm transition hover:border-red-500 hover:text-white"
        >
          {genre}
        </button>
      ))}
    </div>
  );
}