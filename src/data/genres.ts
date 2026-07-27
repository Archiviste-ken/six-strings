import type { Genre } from "@/src/types/genre";

export const genres: Genre[] = [
  {
    id: 1,
    name: "Heavy Metal",
    slug: "heavy-metal",
    icon: "🤘",
    description: "The roots of metal.",
    bandCount: 12,
  },
  {
    id: 2,
    name: "Thrash Metal",
    slug: "thrash-metal",
    icon: "⚡",
    description: "Fast, aggressive, and loud.",
    bandCount: 8,
  },
  {
    id: 3,
    name: "Hard Rock",
    slug: "hard-rock",
    icon: "🎸",
    description: "Classic riffs and anthems.",
    bandCount: 10,
  },
  {
    id: 4,
    name: "Progressive Metal",
    slug: "progressive-metal",
    icon: "🎼",
    description: "Complex and technical.",
    bandCount: 6,
  },
];