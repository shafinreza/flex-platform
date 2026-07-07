import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[radial-gradient(900px_520px_at_30%_40%,rgba(255,255,255,.55),rgba(255,255,255,0)),linear-gradient(0deg,rgba(111,133,95,.16),rgba(111,133,95,.16))] px-5 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="mb-3 text-sm text-[#0f1720]/80">
            High performance nutrition
          </p>

          <h1 className="font-display text-[68px] leading-[0.9] tracking-[0.02em] text-white drop-shadow-xl md:text-[88px] lg:text-[96px]">
            FLEX YOUR
            <br />
            LIMITS
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#0f1720]/85">
            Clean, performance-driven nutrition for people who grind.{" "}
            <strong>Premium ingredients.</strong> No fillers. Just fuel.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="rounded-xl bg-[#6f855f] px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#0B864E]"
            >
              Shop FLEX
            </Link>

            <Link
              href="/#story"
              className="rounded-xl border border-black/15 px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#0f1720]"
            >
              Our story →
            </Link>
          </div>

          <p className="mt-4 text-xs text-[#0f1720]/60">
            More products coming. Same standards.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid aspect-square w-full max-w-[420px] place-items-center rounded-[18px] bg-white/10 p-4 shadow-[0_24px_70px_rgba(0,0,0,.10)]">
            <Image
              src="/assets/products/flex-jar.png"
              alt="FLEX Natural Peanut Butter"
              width={380}
              height={380}
              priority
              className="max-h-[380px] w-auto object-contain drop-shadow-[0_20px_32px_rgba(0,0,0,.20)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
