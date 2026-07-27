import type { Album } from "@/src/types/album";

export const albums: Album[] = [
  {
    id: 1,
    title: "Paranoid",
    slug: "paranoid",
    cover: "/albums/paranoid.jpg",
    year: 1970,
    bandId: 1,
    genre: "Heavy Metal",
    description:
      "One of the most influential heavy metal albums ever released.",
  },
  {
    id: 2,
    title: "Master of Reality",
    slug: "master-of-reality",
    cover: "/albums/master-of-reality.jpg",
    year: 1971,
    bandId: 1,
    genre: "Heavy Metal",
    description:
      "A landmark album that helped define doom metal.",
  },
];