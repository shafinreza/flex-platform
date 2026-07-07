import Hero from "@/components/home/Hero";
import QuickBuy from "@/components/home/QuickBuy";
import TrustBar from "@/components/home/TrustBar";
import WhyFlex from "@/components/home/WhyFlex";
import FAQ from "@/components/home/FAQ";
import BlogPreview from "@/components/home/BlogPreview";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="bg-[#FFFDF8]">
      <Hero />

      <section className="border-b border-[#4C260F]/10 bg-[#FFFDF8] px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0B864E]">
            Shop FLEX
          </p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-5xl font-black tracking-[-0.05em] text-[#0f1720] md:text-6xl">
              Choose your stash
            </h2>
            <p className="max-w-md leading-7 text-[#4C260F]/70">
              One jar or a 6-pack. Same smooth texture, same clean ingredients,
              same spoon-worthy energy.
            </p>
          </div>
        </div>
      </section>

      <QuickBuy />
      <TrustBar />
      <WhyFlex />
      <FAQ />
      <BlogPreview />
      <Contact />
    </main>
  );
}
