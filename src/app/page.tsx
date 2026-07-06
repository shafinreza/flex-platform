import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import QuickBuy from "@/components/home/QuickBuy";
import WhyFlex from "@/components/home/WhyFlex";
import Reviews from "@/components/home/Reviews";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <TrustBar />
      <QuickBuy />
      <WhyFlex />
      <Reviews />
      <Newsletter />
    </main>
  );
}
