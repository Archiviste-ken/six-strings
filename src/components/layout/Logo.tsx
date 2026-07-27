import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex flex-col gap-1 leading-none text-[var(--foreground)] transition-colors duration-200"
    >
      <span className="font-heading text-xl uppercase tracking-[0.22em] md:text-2xl">
        Six Strings
      </span>
      <span className="hidden text-[0.62rem] uppercase tracking-[0.26em] text-[var(--text-muted)] sm:block">
        Digital Archive of Rock and Metal
      </span>
    </Link>
  );
}
