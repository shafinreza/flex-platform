import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhyFlex from "@/components/home/WhyFlex";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <main className="bg-[#f6ead8] text-[#173b2f]">
      <Hero />
      <TrustBar />
      <WhyFlex />
      <Reviews />
      <FAQ />
    </main>
  );
}
