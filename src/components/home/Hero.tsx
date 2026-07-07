import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fff4df] px-5 py-10 lg:px-8 lg:py-16">
      <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-[#efb236]/30 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-[#0b864e]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#0f1720] shadow-sm">
            <Star size={14} className="fill-[#efb236] text-[#efb236]" />
            100% peanuts. Zero nonsense.
          </div>

          <h1 className="max-w-4xl text-[64px] font-black leading-[0.82] tracking-[-0.075em] text-[#0f1720] md:text-[96px] lg:text-[112px]">
            PEANUT
            <br />
            BUTTER
            <br />
            MADE TO
            <br />
            FLEX.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#334155]">
            Smooth, natural peanut butter for active days, busy mornings and
            spoon-straight-from-the-jar moments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-[#0f1720] px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#6f855f]"
            >
              Shop FLEX
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/products/natural-smooth-510g"
              className="inline-flex items-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#0f1720] transition hover:bg-[#f4f6f3]"
            >
              View product
            </Link>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            <MiniStat value="100%" label="Peanuts" />
            <MiniStat value="0" label="Palm oil" />
            <MiniStat value="4.3★" label="Amazon rating" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-10 bottom-8 h-24 rounded-full bg-[#4c260f]/25 blur-2xl" />

          <div className="relative mx-auto grid aspect-square max-w-[560px] place-items-center rounded-[3rem] bg-[#0b864e] p-8 shadow-2xl">
            <div className="absolute left-6 top-6 rounded-full bg-[#efb236] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#0f1720] rotate-[-8deg]">
              Smooth
            </div>

            <div className="absolute bottom-8 right-6 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-[#0f1720] rotate-[7deg]">
              High protein
            </div>

            <Image
              src="/assets/products/natural-smooth-510g.png"
              alt="FLEX Natural Smooth Peanut Butter"
              width={620}
              height={620}
              priority
              className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-4 shadow-sm">
      <p className="text-2xl font-black tracking-[-0.05em] text-[#0f1720]">
        {value}
      </p>
      <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
    </div>
  );
}
