import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EFDFC7]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <div className="mb-6 inline-flex rounded-full bg-[#EFB236] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#4C260F]">
            FLEX MADE FUN
          </div>

          <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] text-[#4C260F] md:text-8xl">
            Fuel what
            <br />
            moves you.
          </h1>

          <p className="mt-7 max-w-xl text-xl leading-8 text-[#4C260F]/80">
            Natural peanut butter made from roasted peanuts. No palm oil. No
            added sugar. Just proper peanut butter.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-[#0B864E] px-8 py-4 font-black text-white transition hover:bg-[#096f42]"
            >
              Shop Now
            </Link>

            <Link
              href="/products/natural-smooth-510g"
              className="rounded-full border-2 border-[#4C260F] px-8 py-4 font-black text-[#4C260F]"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#4C260F]">
              100% Roasted Peanuts
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#4C260F]">
              No Palm Oil
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#4C260F]">
              No Added Sugar
            </span>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute h-[390px] w-[390px] rounded-full bg-[#EFB236]/45 blur-3xl" />

          <Image
            src="/assets/products/flex-jar.png"
            alt="FLEX Peanut Butter"
            width={390}
            height={390}
            priority
            className="relative z-10 max-h-[430px] w-auto drop-shadow-[0_30px_40px_rgba(76,38,15,0.28)]"
          />
        </div>
      </div>
    </section>
  );
}
