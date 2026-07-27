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
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-red-600 text-white hover:bg-red-700"
      : "border border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }

  return <button className={`${base} ${styles}`}>{children}</button>;
}