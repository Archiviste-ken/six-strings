import Hero from "@/src/components/home/Hero";
import FeaturedStory from "@/src/components/home/FeaturedStory";
import BandsReel from "@/src/components/home/BandsReel";
import AlbumsIndex from "@/src/components/home/AlbumsIndex";
import ChronologyStrip from "@/src/components/home/ChronologyStrip";
import ArchiveIndex from "@/src/components/home/ArchiveIndex";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedStory />
      <BandsReel />
      <AlbumsIndex />
      <ChronologyStrip />
      <ArchiveIndex />
    </main>
  );
}