import QuickBuy from "@/components/home/QuickBuy";
import TrustBar from "@/components/home/TrustBar";
import Hero from "@/components/home/Hero";
import WhyFlex from "@/components/home/WhyFlex";
import RecipesPreview from "@/components/home/RecipesPreview";
import Reviews from "@/components/home/Reviews";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main>
      <QuickBuy />
      <TrustBar />
      <Hero />
      <WhyFlex />
      <RecipesPreview />
      <Reviews />
      <Newsletter />
    </main>
  );
}