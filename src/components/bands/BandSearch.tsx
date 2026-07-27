import { Search } from "lucide-react";

export default function BandSearch() {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        placeholder="Search bands..."
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pr-4 pl-11 outline-none transition focus:border-red-500"
      />
    </div>
  );
}