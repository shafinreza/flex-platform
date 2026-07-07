import Image from "next/image";
import Link from "next/link";

export default function QuickBuy() {
  return (
    <section id="products" className="bg-[#f4f6f3] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-['Bebas_Neue',Arial,sans-serif] text-[62px] leading-none tracking-[0.06em]">
          OUR PRODUCTS
        </h2>

        <p className="mt-2 max-w-2xl text-[#5c6773]">
          We’re starting with one SKU — and making it flawless. More products
          are coming.
        </p>

        <article className="mt-8 grid items-center gap-6 rounded-[18px] border border-black/10 bg-white p-6 md:grid-cols-[.95fr_1.05fr]">
          <div className="grid place-items-center rounded-2xl border border-black/10 bg-[#f7f9f6] p-6">
            <Image
              src="/assets/products/flex-jar.png"
              alt="FLEX Natural Peanut Butter — Smooth"
              width={260}
              height={260}
              className="max-h-[260px] w-auto object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,.15)]"
            />
          </div>

          <div>
            <h3 className="text-2xl font-black">
              FLEX Natural Peanut Butter — Smooth
            </h3>

            <ul className="mt-5 space-y-2 text-[#0f1720]/80">
              <li>
                <strong>Ingredients:</strong> Roasted peanuts (100%)
              </li>
              <li>
                <strong>Allergen info:</strong> Contains peanuts
              </li>
              <li>No palm oil • No added sugar</li>
              <li>
                <strong>Protein:</strong> 132g per jar approx.
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/products/natural-smooth-510g"
                className="rounded-xl bg-[#6f855f] px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#0B864E]"
              >
                Buy now
              </Link>

              <span className="text-sm text-[#5c6773]">
                Crunchy version coming after launch.
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
