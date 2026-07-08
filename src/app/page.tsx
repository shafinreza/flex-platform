import NewHero from "@/components/home/NewHero";
import HomeProductRange from "@/components/home/HomeProductRange";
import Benefits from "@/components/home/Benefits";
import Ingredients from "@/components/home/Ingredients";
import WaysToUse from "@/components/home/WaysToUse";
import WhyFlex from "@/components/home/WhyFlex";
import Reviews from "@/components/home/Reviews";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <main className="bg-[#f6ead8] text-[#173b2f]">
      <NewHero />
      <HomeProductRange />
      <Benefits />
      <Ingredients />
      <WaysToUse />
      <WhyFlex />
      <Reviews />
      <CTA />
      <FAQ />
    </main>
  );
}
