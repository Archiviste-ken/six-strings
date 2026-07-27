"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/src/data/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="inline-flex h-11 w-11 items-center justify-center border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[var(--surface-soft)] md:hidden"
      >
        <Menu size={22} />
      </button>

      {open && (
        <div
          role="presentation"
          className="fixed inset-0 z-40 bg-[var(--bg-overlay-mid)] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-50 flex h-screen w-72 flex-col border-l border-[var(--border)] bg-[var(--background)] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-5">
          <div>
            <p className="eyebrow">Navigation</p>
            <h2 className="mt-2 font-heading text-2xl">Archive</h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center border border-transparent text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--border)] hover:bg-[var(--surface-soft)]"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col px-6 py-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--border)] py-4 text-[0.78rem] uppercase tracking-[0.22em] text-[var(--text-soft)] transition-colors duration-200 hover:text-[var(--foreground)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
