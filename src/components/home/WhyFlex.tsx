import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyFlex() {
  return (
    <section id="story" className="bg-[#e9f1e6] px-6 py-12 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        {/* Story copy */}
        <div>
          <SectionHeading
            eyebrow="Our story"
            title={"Born out of necessity"}
            subtitle={"We set out to create the cleanest peanut butter for athletes and food lovers alike."}
          />
          <p className="mt-8 max-w-prose text-base md:text-lg leading-relaxed text-[#31574a]">
            FLEX began with a simple belief: performance fuel should taste
            incredible. Tired of overly sweet spreads and unnecessary oils, we
            focused on what matters – quality ingredients and clean formulation.
            FLEX is a pantry staple built for training days and healthy
            kitchens. No added sugar, no palm oil, no fillers — just roasted
            peanuts, ground smooth.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Stat value="132g" label="Protein per jar" />
            <Stat value="100%" label="Roasted peanuts" />
          </div>
        </div>
        {/* Coming soon card */}
        <div className="rounded-3xl border border-[#173b2f]/10 bg-white p-6 shadow-sm">
          <span className="rounded-full bg-[#6f855f]/15 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#6f855f]">
            Coming soon
          </span>
          <h3 className="mt-5 text-2xl font-black text-[#173b2f]">
            More products. Same standards.
          </h3>
          <p className="mt-3 text-[#31574a]">
            As we expand our range, every product stays clean, performance-driven
            and built around real ingredients.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[#173b2f]/10 bg-white p-5">
      <p className="font-display text-5xl leading-none text-[#6f855f]">
        {value}
      </p>
      <p className="mt-2 font-semibold text-[#31574a]">{label}</p>
    </div>
  );
}
