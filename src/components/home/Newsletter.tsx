import FlexButton from "@/components/ui/FlexButton";

export default function Newsletter() {
  return (
    <section className="bg-[#0B864E] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em]">
          Join Team FLEX
        </p>

        <h2 className="text-5xl font-black md:text-7xl">
          Be the first to hear about
          <br />
          new flavours, recipes & offers.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
          We're just getting started. Join the FLEX community and get exclusive
          launches, healthy recipes and subscriber-only offers.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 rounded-full border-2 border-[#4C260F] px-6 py-4 text-black outline-none"
          />

          <FlexButton variant="secondary">
            Join Now
          </FlexButton>
        </div>

      </div>
    </section>
  );
}