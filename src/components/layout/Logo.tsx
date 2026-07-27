import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl font-black tracking-tight text-white transition hover:text-red-500"
    >
      🤘 Six Strings
    </Link>
  );
}