import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Ingredients section showcasing that FLEX peanut butter is made from
 * 100% roasted peanuts. Includes an illustration sourced from
 * Wikimedia Commons stored locally in the repo. The layout places the
 * image alongside text for greater emphasis on simplicity.
 */
export default function Ingredients() {
  return (
    <section id="ingredients" className="bg-[#f6ead8] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 md:gap-20 items-center">
        <div>
          <SectionHeading
            eyebrow="Ingredients"
            title={"Nothing but peanuts"}
            subtitle={"We only use freshly roasted peanuts – no palm oil, no added sugar, no nonsense."}
          />
          <p className="mt-8 text-base md:text-lg leading-relaxed text-[#31574a] max-w-xl">
            We roast premium peanuts to bring out their rich, nutty flavour then
            grind them smooth. That is it. The result is a naturally creamy
            texture with wholesome fats and protein to fuel your day.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/assets/illustrations/peanuts.svg"
            alt="Roasted peanuts illustration"
            width={400}
            height={400}
            className="max-w-[90%] h-auto"
          />
        </div>
      </div>
    </section>
  );
}