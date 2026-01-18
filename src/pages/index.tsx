
import AI from "@/components/home/AI";
import FeaturedWork from "@/components/home/FeaturedWork";
import Hero from "@/components/home/Hero";
import HowIWork from "@/components/home/HowIWork";
import WorkHighlights from "@/components/home/WorkHighlights";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedWork />
      <AI />
      <HowIWork />
      <WorkHighlights />
 

    </div>
  );
}