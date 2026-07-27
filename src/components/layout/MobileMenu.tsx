"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/src/data/navigation";

const links = [
  { name: "Bands", href: "/bands" },
  { name: "Albums", href: "/albums" },
  { name: "Favorites", href: "/favorites" },
  { name: "About", href: "/about" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-zinc-800 p-2 text-white transition hover:bg-zinc-900 md:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-72 transform border-l border-zinc-800 bg-zinc-950 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 p-6">
          <h2 className="text-lg font-bold">Menu</h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 transition hover:bg-zinc-900"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col p-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}