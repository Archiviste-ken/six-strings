"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/src/components/ui/Container";
import Logo from "@/src/components/layout/Logo";
import MobileMenu from "@/src/components/layout/MobileMenu";
import { navigationLinks } from "@/src/data/navigation";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Subtle top-down drop-in on load
      gsap.from(navRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });
    },
    { scope: navRef }
  );

  return (
    <header ref={navRef} className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-overlay-strong)] backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6 py-4">
        <Logo />

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-transparent pb-1 text-[0.7rem] uppercase tracking-[0.24em] text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
