export default function SortSelect() {
  return (
    <select className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none transition focus:border-red-500">
      <option>Name (A–Z)</option>
      <option>Name (Z–A)</option>
      <option>Oldest First</option>
      <option>Newest First</option>
    </select>
  );
}