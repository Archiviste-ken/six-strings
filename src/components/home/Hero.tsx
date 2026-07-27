import Button from "@/src/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

      <div className="max-w-3xl">

        <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">

          🎸 Legends • 🎶 Riffs • 👑 Legacy

        </span>

        <h1 className="mt-8 text-6xl font-black leading-tight">

          Discover the legends behind every riff.

        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">

          Explore legendary bands, iconic albums, and the stories
          that shaped generations of rock and heavy metal.

        </p>

        <div className="mt-10 flex gap-4">

          <Button href="/bands">

            Explore Bands

          </Button>

          <Button
            href="/albums"
            variant="secondary"
          >
            Browse Albums
          </Button>

        </div>

      </div>

    </section>
  );
}