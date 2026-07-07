export default function WhyFlex() {
  return (
    <section id="story" className="bg-[#eef1ec] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <h2 className="font-display font-display text-[58px] leading-none tracking-[-0.02em]">
            OUR STORY
          </h2>

          <p className="mt-5 max-w-3xl text-[#0f1720]/85">
            FLEX started with a simple belief:{" "}
            <strong>performance fuel should taste great.</strong> We cut the
            noise and focused on what matters — quality ingredients and clean
            formulation.
          </p>

          <p className="mt-4 max-w-3xl text-[#0f1720]/85">
            FLEX is a clean pantry staple built for training days and healthy
            kitchens. No added sugar, no palm oil, no fillers — just roasted
            peanuts, ground smooth.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Stat value="132g" label="Protein per jar" />
            <Stat value="100%" label="Roasted peanuts" />
          </div>
        </div>

        <div className="rounded-[18px] border border-black/10 bg-white/90 p-6">
          <span className="rounded-full bg-[#6f855f]/15 px-3 py-2 text-xs font-black uppercase tracking-[0.12em]">
            Coming soon
          </span>

          <h3 className="mt-5 text-2xl font-black">
            More products. Same standards.
          </h3>

          <p className="mt-3 text-[#5c6773]">
            As we expand the range, every product stays clean,
            performance-driven, and built around real ingredients.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5">
      <p className="font-display text-[42px] leading-none text-[#6f855f]">
        {value}
      </p>
      <p className="mt-2 font-semibold text-[#5c6773]">{label}</p>
    </div>
  );
}
