import { Search } from "lucide-react";
import Input from "@/src/components/ui/Input";

export default function BandSearch() {
  return (
    <div className="relative w-full max-w-md">
      <label htmlFor="band-search" className="sr-only">Search bands</label>
      <Search
        size={16}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-[var(--text-muted)]"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <Input
        id="band-search"
        type="text"
        placeholder="Search bands…"
        className="pl-11"
      />
    </div>
  );
}