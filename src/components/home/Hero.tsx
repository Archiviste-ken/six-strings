import Link from "next/link";
import { FaGuitar } from "react-icons/fa6";

import HeroVisual from "./HeroVisual";

// import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20">

        <div className="flex-1">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">

            <FaGuitar className="text-red-500" />

            Built for Rock & Heavy Metal

          </div>

          <h1 className="max-w-3xl text-6xl font-black leading-tight tracking-tight">

            Discover the

            <span className="block text-red-500">

              legends

            </span>

            behind every riff.

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

            Explore legendary bands, iconic albums, and the music
            that shaped generations of rock and heavy metal.

          </p>

          <div className="mt-10 flex gap-4">

            <Button size="lg">

              Explore Bands

            </Button>

            <Button size="lg" variant="secondary">

              Browse Albums

            </Button>

          </div>

        </div>

        <HeroVisual />

      </div>
    </section>
  );
}