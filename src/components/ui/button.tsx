import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-3 border px-5 py-3 text-[0.76rem] uppercase tracking-[0.22em] transition-colors duration-200";

  const styles =
    variant === "primary"
      ? "border-[var(--border-strong)] bg-[var(--surface-soft)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
      : "border-transparent bg-transparent text-[var(--accent)] hover:border-[var(--border)] hover:bg-[var(--accent-soft)]";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles}`}>
        {children}
        <span aria-hidden="true" className="text-[0.9em]">
          →
        </span>
      </Link>
    );
  }

  return (
    <button className={`${base} ${styles}`}>
      {children}
      <span aria-hidden="true" className="text-[0.9em]">
        →
      </span>
    </button>
  );
}
