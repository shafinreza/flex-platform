import Image from "next/image";
import Button from "@/components/ui/button";

export default function NewHero() {
  return (
    <section className="bg-[#f6ead8] px-6 py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
            Single Jar
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-[#173b2f] md:text-7xl">
            Fuel your FLEX
          </h1>

          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-[#31574a] md:text-xl">
            Premium smooth peanut butter made from 100% roasted peanuts. No palm
            oil. No added sugar. Built for breakfast, shakes and everyday
            snacking.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/shop">Shop now — £4.99</Button>
            <Button href="#benefits" variant="secondary">
              See benefits
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {["No added sugar", "No palm oil", "Free delivery £25+"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-full bg-[#fffaf0] px-7 py-4 text-center text-xs font-black uppercase leading-tight tracking-wide text-[#173b2f] shadow-sm"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] px-8 py-8 shadow-sm md:px-12 md:py-10">
          <Image
            src="/assets/products/natural-smooth-510g.png"
            alt="FLEX Natural Smooth Peanut Butter"
            width={760}
            height={760}
            priority
            className="mx-auto h-auto max-h-[430px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
