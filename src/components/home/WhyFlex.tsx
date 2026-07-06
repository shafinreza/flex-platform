import FlexButton from "@/components/ui/FlexButton";

export default function WhyFlex() {
  return (
    <section id="story" className="bg-[#eef1ec] px-5 py-[72px]">
      <div className="mx-auto grid max-w-[1120px] gap-6 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <h2 className="mb-3 text-[62px] font-black leading-[.9] tracking-[-0.04em]">
            OUR STORY
          </h2>

          <p className="mb-4 max-w-[70ch] text-[#0f1720]/90">
            FLEX started with a simple belief:{" "}
            <strong>performance fuel should taste great.</strong> We cut the
            noise and focused on what matters — quality ingredients and clean formulation.
          </p>

          <p className="mb-6 max-w-[70ch] text-[#0f1720]/90">
            FLEX is a clean pantry staple built for training days and healthy kitchens.
            No added sugar, no palm oil, no fillers — just roasted peanuts, ground smooth.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[14px] border border-[rgba(15,23,32,.10)] bg-white p-5">
              <div className="text-[42px] font-black leading-none text-[#6f855f]">
                132g
              </div>
              <div className="mt-2 font-semibold text-[#5c6773]">
                Protein per jar
              </div>
            </div>

            <div className="rounded-[14px] border border-[rgba(15,23,32,.10)] bg-white p-5">
              <div className="text-[42px] font-black leading-none text-[#6f855f]">
                100%
              </div>
              <div className="mt-2 font-semibold text-[#5c6773]">
                Roasted peanuts
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white/90 p-6">
          <div className="mb-3 inline-block rounded-full bg-[rgba(111,133,95,.14)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em]">
            Coming soon
          </div>

          <h3 className="mb-3 text-2xl font-black">
            More products. Same standards.
          </h3>

          <p className="mb-6 text-[#5c6773]">
            As we expand the range, every product stays clean, performance-driven,
            and built around real ingredients.
          </p>

          <FlexButton variant="outline">Read updates</FlexButton>
        </div>
      </div>
    </section>
  );
}
