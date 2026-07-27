import Container from "@/src/components/ui/Container";
import Button from "@/src/components/ui/button";

export default function FavouritesPage() {
  // TODO: Phase 7 — wire to localStorage/context
  return (
    <main>
      {/* Editorial masthead */}
      <section className="border-b border-[var(--border)] py-16">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow">Collection</span>
              <h1 className="mt-4 font-heading text-[clamp(2.8rem,6vw,5rem)] font-medium leading-[0.95] text-[var(--foreground)]">
                Your<br />Favourites
              </h1>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[var(--text-soft)] lg:text-right">
              Save bands you love and return to them at any time.
            </p>
          </div>
        </Container>
      </section>

      {/* Empty state */}
      <section className="page-section">
        <Container>
          <div className="flex min-h-[40vh] flex-col items-center justify-center py-24 text-center">
            <p className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] text-[var(--foreground)]">
              Nothing saved yet.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--text-soft)]">
              Browse the archive and mark bands you love.
            </p>
            <div className="mt-10">
              <Button href="/bands">Browse the Archive</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
