import FlexButton from "@/components/ui/FlexButton";

export default function Newsletter() {
  return (
    <section className="bg-[#07130D] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl rounded-[40px] bg-white p-8 text-[#07130D] md:p-14">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-[#00A651]">
          Join FLEX
        </p>

        <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
          New flavours, recipes and offers — straight to your inbox.
        </h2>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="min-h-14 flex-1 rounded-full bg-[#F2F2F2] px-6 font-semibold outline-none"
          />

          <FlexButton className="text-white">Join Now</FlexButton>
        </div>
      </div>
    </section>
  );
}
