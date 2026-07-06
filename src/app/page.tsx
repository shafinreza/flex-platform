import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import QuickBuy from "@/components/home/QuickBuy";
import WhyFlex from "@/components/home/WhyFlex";
import FAQ from "@/components/home/FAQ";
import BlogPreview from "@/components/home/BlogPreview";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <TrustBar />

      <section className="px-5 py-[72px]">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="mb-3 text-[62px] font-black leading-[.9] tracking-[-0.04em]">
            OUR PRODUCTS
          </h2>

          <p className="mb-7 max-w-[62ch] text-[#5c6773]">
            We’re starting with one SKU — and making it flawless. More products are coming.
          </p>

          <QuickBuy />
        </div>
      </section>

      <WhyFlex />
      <FAQ />
      <BlogPreview />
      <Contact />
    </main>
  );
}
