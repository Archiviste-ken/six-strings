import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden border-b border-[var(--border)]">
      {/* Background grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          opacity: 0.35,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Right image panel */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[55%]">
        <div
          className="relative h-full w-full"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 25%, black 100%), linear-gradient(to top, transparent 0%, black 15%, black 100%)",
            maskComposite: "intersect",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%, black 100%), linear-gradient(to top, transparent 0%, black 15%, black 100%)",
            WebkitMaskComposite: "source-in",
          }}
        >
          <Image
            src="/hero-guitarist.jpg"
            alt="Legendary rock guitarist"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[var(--container-wide)] flex-col px-[var(--gutter)] pb-8 pt-12">
        <div className="flex flex-1 flex-col justify-center max-w-[36rem] lg:max-w-[42rem]">
          {/* Eyebrow */}
          <div data-animate="hero-eyebrow">
            <span className="eyebrow">Digital Archive · Est. 1968</span>
          </div>

          {/* Display headline */}
          <h1
            data-animate="hero-title"
            className="mt-6 font-heading text-[clamp(3.2rem,8vw,6.5rem)] font-medium leading-[0.94] tracking-tight text-[var(--foreground)]"
          >
            The digital
            <br />
            <em className="not-italic text-[var(--foreground)]">archive</em> of
            <br />
            rock &amp; metal
            <br />
            culture.
          </h1>

          {/* Date range */}
          <p
            data-animate="hero-date"
            className="mt-8 flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-[var(--text-muted)]"
          >
            <span>1968</span>
            <span
              aria-hidden="true"
              className="block h-px w-8 bg-[var(--accent)]"
            />
            <span>Present</span>
          </p>

          {/* CTA */}
          <div data-animate="hero-cta" className="mt-10">
            <Link
              href="/bands"
              className="editorial-link group inline-flex items-center gap-3 border-b border-[var(--border)] pb-1 transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              <span className="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--foreground)]">
                Explore Archive
              </span>
              <span
                aria-hidden="true"
                className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom-left issue label */}
        <div
          data-animate="hero-label"
          className="mt-auto hidden md:block"
        >
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[var(--text-muted)]">
            Rock &amp; Metal · Timeless · Iconic
          </p>
        </div>
      </div>
    </section>
  );
}