import FeaturedBands from "@/src/components/bands/FeaturedBands";
import BrowseGenres from "@/src/components/genres/BrowseGenres";
import Hero from "@/src/components/home/Hero";


export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBands />
      <BrowseGenres />
    </>
  );
}