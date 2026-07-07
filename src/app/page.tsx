import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import QuickBuy from "@/components/home/QuickBuy";
import WhyFlex from "@/components/home/WhyFlex";
import FAQ from "@/components/home/FAQ";
import BlogPreview from "@/components/home/BlogPreview";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main id="top" className="bg-[#fffaf2]">
      <Hero />
      <TrustBar />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
                Shop FLEX
              </p>

              <h2 className="mt-3 text-6xl font-black leading-[0.9] tracking-[-0.07em] text-[#0f1720] md:text-8xl">
                YOUR
                <br />
                FLEX STASH.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-slate-600">
              Start with one jar or stock up with a 6-pack. Same smooth texture,
              same clean ingredients, same spoon-worthy energy.
            </p>
          </div>

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
