import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Ingredients() {
  return (
    <section id="ingredients" className="bg-[#f6ead8] px-6 py-10 md:py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Ingredients"
            title="Nothing but peanuts"
            subtitle="We only use roasted peanuts — no palm oil, no added sugar, no nonsense."
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#31574a] md:text-lg">
            FLEX is made with roasted peanuts only. Smooth, rich and naturally
            packed with plant protein for everyday fuel.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-8">
          <Image
            src="/assets/products/natural-smooth-510g.png"
            alt="FLEX Natural Smooth Peanut Butter"
            width={520}
            height={520}
            className="mx-auto h-80 w-auto object-contain mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
