import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import QuickBuy from "@/components/home/QuickBuy";
import WhyFlex from "@/components/home/WhyFlex";
import FAQ from "@/components/home/FAQ";
import BlogPreview from "@/components/home/BlogPreview";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main id="top" className="bg-[#f4f6f3]">
      <Hero />
      <TrustBar />
      <QuickBuy />
      <WhyFlex />
      <FAQ />
      <BlogPreview />
      <Contact />
    </main>
  );
}
