"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Template({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Use a small timeout to let the DOM settle and Next.js routing finish
      // before calculating ScrollTrigger start positions.
      const t = setTimeout(() => {
        // 1. Hero Reveal (app/page.tsx)
        if (document.querySelector('[data-animate="hero-title"]')) {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          tl.fromTo(
            '[data-animate="hero-eyebrow"]',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 }
          )
            .fromTo(
              '[data-animate="hero-title"]',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 1 },
              "-=0.6"
            )
            .fromTo(
              '[data-animate="hero-date"]',
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.8 },
              "-=0.7"
            )
            .fromTo(
              '[data-animate="hero-cta"]',
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 0.8 },
              "-=0.6"
            )
            .fromTo(
              '[data-animate="hero-label"]',
              { opacity: 0, x: -20 },
              { opacity: 1, x: 0, duration: 0.8 },
              "-=0.8"
            );
        }

        // 2. Band Hero Reveal
        if (document.querySelector('[data-animate="band-hero"]')) {
          gsap.fromTo(
            '[data-animate="band-hero"] h1',
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.1 }
          );
          gsap.fromTo(
            '[data-animate="band-hero"] .eyebrow',
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }
          );
        }

        // 3. Scroll Reveals (fade-up)
        const fadeUps = gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]');
        fadeUps.forEach((el) => {
          gsap.fromTo(el, { opacity: 0, y: 35 }, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%", // Trigger when top of element hits 85% from top of viewport
            },
          });
        });

        // 4. Staggered Grids
        const staggerGrids = gsap.utils.toArray<HTMLElement>('[data-animate="stagger-grid"]');
        staggerGrids.forEach((grid) => {
          // Find direct children or items with stagger-item
          const items = grid.querySelectorAll('[data-animate="stagger-item"], > *');

          if (items.length > 0) {
            gsap.fromTo(items, { opacity: 0, y: 30 }, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: grid,
                start: "top 80%",
              },
            });
          }
        });

        // 5. Stagger Up (used in ArchiveIndex stat items)
        const staggerUps = gsap.utils.toArray<HTMLElement>('[data-animate="stagger-up"]');
        if (staggerUps.length > 0) {
          gsap.fromTo(staggerUps, { opacity: 0, y: 40 }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: staggerUps[0],
              start: "top 85%",
            },
          });
        }

        ScrollTrigger.refresh();
      }, 50);

      return () => clearTimeout(t);
    },
    { scope: container }
  );

  return (
    <div ref={container} className="min-h-screen">
      {children}
    </div>
  );
}
