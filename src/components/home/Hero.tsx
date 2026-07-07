import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#fff7e8] px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#6f855f] shadow-sm">
            100% roasted peanuts
          </p>

          <h1 className="max-w-3xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-[#0f1720] md:text-8xl">
            Fuel what moves you.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Smooth natural peanut butter made with roasted peanuts. No palm oil.
            No added sugar. No nonsense.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-[#6f855f] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
            >
              Shop now
            </Link>

            <Link
              href="/products/natural-smooth-510g"
              className="rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#0f1720]"
            >
              View product
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            <Stat value="100%" label="Peanuts" />
            <Stat value="0" label="Palm oil" />
            <Stat value="4.3★" label="Amazon rating" />
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <Image
            src="/assets/products/natural-smooth-510g.png"
            alt="FLEX Natural Smooth Peanut Butter"
            width={720}
            height={720}
            priority
            className="mx-auto max-h-[560px] w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-2xl font-black text-[#0f1720]">{value}</p>
      <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
    </div>
  );
}
