import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EFDFC7]">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-5 py-14 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-16">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-[#EFB236] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#4C260F]">
            FLEX MADE FUN
          </div>

          <h1 className="max-w-3xl text-[58px] font-black leading-[0.88] tracking-[-0.065em] text-[#4C260F] md:text-[88px] lg:text-[98px]">
            Fuel what
            <br />
            moves you.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4C260F]/80">
            Smooth natural peanut butter made from 100% roasted peanuts. No palm
            oil. No added sugar. Just proper peanut butter.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="text-lg text-[#EFB236]">★★★★★</span>
            <span className="font-black text-[#4C260F]">4.4</span>
            <span className="text-sm font-bold text-[#4C260F]/65">
              Amazon rating
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-[#0B864E] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#096b3f]"
            >
              Shop Now →
            </Link>

            <Link
              href="/products/natural-smooth-510g"
              className="rounded-full border-2 border-[#4C260F] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#4C260F] transition hover:bg-[#4C260F] hover:text-white"
            >
              View Product
            </Link>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-4">
            <Claim title="100%" text="Roasted peanuts" />
            <Claim title="No" text="Palm oil" />
            <Claim title="No" text="Added sugar" />
          </div>
        </div>

        <div className="relative flex min-h-[350px] items-center justify-center lg:justify-start">
          <div className="absolute h-[280px] w-[280px] rounded-full bg-[#EFB236]/45 blur-3xl" />
          <div className="absolute bottom-12 h-14 w-52 rounded-full bg-[#4C260F]/20 blur-2xl" />

          <Image
            src="/assets/products/flex-jar.png"
            alt="FLEX Natural Peanut Butter"
            width={320}
            height={320}
            priority
            className="relative z-10 max-h-[330px] w-auto object-contain drop-shadow-[0_24px_32px_rgba(76,38,15,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}

function Claim({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white/75 p-4 shadow-sm">
      <p className="text-xl font-black text-[#4C260F]">{title}</p>
      <p className="mt-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#4C260F]/65">
        {text}
      </p>
    </div>
  );
}
