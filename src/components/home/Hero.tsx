import FlexButton from "@/components/ui/FlexButton";

export default function Hero() {
  return (
    <section className="bg-[#EFDFC7] px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#0B864E]">
            Peanut butter made fun
          </p>

          <h1 className="max-w-2xl text-6xl font-black leading-[0.95] tracking-tight text-[#4C260F] md:text-8xl">
            Healthy never tasted this good.
          </h1>

          <p className="mt-6 max-w-xl text-xl font-semibold leading-relaxed text-[#4C260F]/80">
            Natural peanut butter made for people who move. High protein, no
            added sugar, no palm oil — just real roasted peanuts.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <FlexButton>Shop Now</FlexButton>
            <FlexButton variant="outline">See Recipes</FlexButton>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black uppercase tracking-wide text-[#4C260F]">
            <span>High Protein</span>
            <span>•</span>
            <span>No Added Sugar</span>
            <span>•</span>
            <span>No Palm Oil</span>
          </div>
        </div>

        <div className="relative rounded-[40px] bg-[#0B864E] p-10 shadow-[14px_14px_0_#4C260F]">
          <div className="absolute -left-5 -top-5 rounded-full bg-[#EFB236] px-5 py-3 text-lg font-black text-[#4C260F]">
            SOOO SMOOTH
          </div>

          <div className="flex aspect-square items-center justify-center rounded-[32px] bg-[#EFDFC7]">
            <div className="text-center">
              <div className="text-7xl">🥜</div>
              <p className="mt-4 text-2xl font-black text-[#4C260F]">
                Product image here
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-5 rounded-full bg-[#EF6838] px-5 py-3 text-lg font-black text-white">
            100% PEANUTS
          </div>
        </div>
      </div>
    </section>
  );
}