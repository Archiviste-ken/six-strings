"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Band } from "@/src/types/band";

interface BandCardProps {
  band: Band;
}

export default function BandCard({ band }: BandCardProps) {
  return (
    <Link
      href={`/bands/${band.slug}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-colors duration-300 hover:border-red-600"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{
            y: -8,
            scale: 1.05,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          <Image
            src={band.image}
            alt={band.name}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="text-xl font-bold">{band.name}</h3>

        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>{band.genre}</span>
          <span>{band.country}</span>
        </div>

        <div className="text-sm text-zinc-500">Formed • {band.formed}</div>
      </div>
    </Link>
  );
}
