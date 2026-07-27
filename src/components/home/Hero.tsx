"use client";

import Button from "@/src/components/ui/button";
import Container from "@/src/components/ui/Container";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center">
      <Container>
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
            🎸 Legends • 🎶 Riffs • 👑 Legacy
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight">
            Discover the legends behind every riff.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Explore legendary bands, iconic albums, and the stories that
            shaped generations of rock and heavy metal.
          </p>

          <div className="mt-10 flex gap-4">
            <Button href="/bands">Explore Bands</Button>

            <Button href="/albums" variant="secondary">
              Browse Albums
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}