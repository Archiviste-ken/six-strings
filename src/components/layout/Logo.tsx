import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-bold tracking-tight transition hover:opacity-80"
    >
      🤘 Six Strings
    </Link>
  );
}