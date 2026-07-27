import { notFound } from "next/navigation";
import AlbumGrid from "@/src/components/albums/AlbumGrid";
import BandHero from "@/src/components/bands/BandHero";
import BandInfo from "@/src/components/bands/BandInfo";
import { bands } from "@/src/data/bands";

export async function generateStaticParams() {
  return bands.map((band) => ({
    slug: band.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BandPage({ params }: PageProps) {
  const { slug } = await params;

  const band = bands.find((item) => item.slug === slug);

  if (!band) {
    notFound();
  }

  return (
    <main>
      <BandHero band={band} />
      <BandInfo band={band} />
      <AlbumGrid band={band} />
    </main>
  );
}
