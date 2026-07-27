import Container from "@/src/components/ui/Container";
import { albums } from "@/src/data/albums";
import { bands } from "@/src/data/bands";

export default function AlbumsPage() {
  return (
    <main>
      {/* Editorial masthead */}
      <section className="border-b border-[var(--border)] py-16">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow">Archive</span>
              <h1 className="mt-4 font-heading text-[clamp(2.8rem,6vw,5rem)] font-medium leading-[0.95] text-[var(--foreground)]">
                Essential<br />Albums
              </h1>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[var(--text-soft)] lg:text-right">
              A curated selection of records that defined rock and heavy metal across the decades.
            </p>
          </div>
        </Container>
      </section>

      {/* Hairline divider */}
      <section className="hairline-divider" />

      {/* Albums table */}
      <section className="page-section">
        <Container>
          {albums.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-medium text-[var(--foreground)]">
                No albums in the archive yet.
              </p>
              <p className="mt-4 text-sm text-[var(--text-muted)]">
                Records will appear here as the archive grows.
              </p>
            </div>
          ) : (
            <div>
              {/* Table header */}
              <div className="mb-4 grid grid-cols-[2.5rem_1fr_auto_auto] items-center gap-6 border-b border-[var(--border)] pb-4 text-[0.65rem] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                <span>#</span>
                <span>Title</span>
                <span className="hidden sm:block">Year</span>
                <span className="hidden sm:block">Band</span>
              </div>

              {/* Table rows */}
              <div className="divide-y divide-[var(--border)]">
                {albums.map((album, index) => {
                  const band = bands.find((b) => b.id === album.bandId);
                  return (
                    <div
                      key={album.id}
                      className="grid grid-cols-[2.5rem_1fr_auto_auto] items-start gap-6 py-6"
                    >
                      {/* Index */}
                      <span className="font-heading text-[clamp(1.2rem,2vw,1.6rem)] font-medium leading-none text-[var(--text-muted)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Title + description + genre */}
                      <div>
                        <p className="font-heading text-lg font-medium leading-snug text-[var(--foreground)]">
                          {album.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[var(--text-soft)]">
                          {album.description}
                        </p>
                        <p className="mt-2 text-[0.65rem] uppercase tracking-[0.22em] text-[var(--accent)]">
                          {album.genre}
                        </p>
                      </div>

                      {/* Year */}
                      <span className="hidden pt-1 text-sm text-[var(--text-muted)] sm:block">
                        {album.year}
                      </span>

                      {/* Band name */}
                      <span className="hidden pt-1 text-sm text-[var(--text-soft)] sm:block">
                        {band?.name ?? "Unknown"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
