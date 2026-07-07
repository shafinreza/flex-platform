import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF4DF]">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(239,178,54,0.35),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:py-20">
        <div>
          <div className="mb-6 inline-flex rounded-full bg-[#EFB236] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#4C260F]">
            FLEX MADE FUN
          </div>

          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] text-[#4C260F] md:text-8xl">
            Fuel what
            <br />
            moves you.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4C260F]/80">
            Smooth natural peanut butter made from 100% roasted peanuts. No
            palm oil. No added sugar. Built for everyday fuel.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-xl text-[#EFB236]">★★★★★</span>
            <span className="font-black text-[#4C260F]">4.4</span>
            <span className="text-[#4C260F]/60">34+ Amazon reviews</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-[#0B864E] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-[#096b3f]"
            >
              Shop Now →
            </Link>

            <Link
              href="/products/natural-smooth-510g"
              className="rounded-full border-2 border-[#4C260F] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#4C260F]"
            >
              View Product
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-5">
            <MiniClaim title="100%" text="Roasted peanuts" />
            <MiniClaim title="No" text="Palm oil" />
            <MiniClaim title="No" text="Added sugar" />
          </div>
        </div>

        <div className="relative flex min-h-[470px] items-center justify-center">
          <div className="absolute h-[360px] w-[360px] rounded-full bg-[#EFB236]/35 blur-3xl" />
          <div className="absolute bottom-8 h-20 w-72 rounded-full bg-[#4C260F]/20 blur-2xl" />

          <Image
            src="/assets/products/flex-jar.png"
            alt="FLEX Natural Peanut Butter"
            width={470}
            height={470}
            priority
            className="relative z-10 max-h-[470px] w-auto object-contain drop-shadow-[0_35px_40px_rgba(76,38,15,0.28)]"
          />
        </div>
      </div>
    </section>
  );
}

function MiniClaim({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-full border border-[#4C260F]/20 bg-white text-sm font-black text-[#0B864E]">
        ✓
      </div>
      <div>
        <p className="font-black text-[#4C260F]">{title}</p>
        <p className="text-xs font-black uppercase tracking-[0.12em] text-[#4C260F]/70">
          {text}
        </p>
      </div>
    </div>
  );
}
