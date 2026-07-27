export default function SortSelect() {
  return (
    <select aria-label="Sort bands by" className="border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-muted)] outline-none transition-colors duration-200 focus:border-[var(--accent)] focus:text-[var(--foreground)]">
      <option>Name (A–Z)</option>
      <option>Name (Z–A)</option>
      <option>Oldest First</option>
      <option>Newest First</option>
    </select>
  );
}