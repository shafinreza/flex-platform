import Image from "next/image";
import type { Metadata } from "next";
import AddToCartButton from "@/components/cart/AddToCartButton";
import NutritionTable from "@/components/product/NutritionTable";
import ProductReviews from "@/components/product/ProductReviews";
import ProductFAQ from "@/components/product/ProductFAQ";

export const metadata: Metadata = {
  title: "FLEX Natural Smooth Peanut Butter 510g",
  description:
    "FLEX Natural Smooth Peanut Butter made with 100% roasted peanuts. No palm oil. No added sugar. Available as single jar, 2 pack, 3 pack and 6 pack.",
};

const packs = [
  {
    id: "natural-smooth-510g",
    name: "Single Jar",
    detail: "1 × 510g",
    price: "£4.99",
    badge: "Most Popular",
    note: "Try FLEX",
  },
  {
    id: "natural-smooth-2-pack",
    name: "2 Pack",
    detail: "2 × 510g",
    price: "£9.49",
    badge: "Save 49p",
    note: "Good for regular use",
  },
  {
    id: "natural-smooth-3-pack",
    name: "3 Pack",
    detail: "3 × 510g",
    price: "£13.99",
    badge: "Popular",
    note: "Best for families",
  },
  {
    id: "natural-smooth-6-pack",
    name: "6 Pack",
    detail: "6 × 510g",
    price: "£26.99",
    badge: "Best Value",
    note: "Free UK delivery",
  },
];

const benefits = [
  "100% roasted peanuts",
  "No palm oil",
  "No added sugar",
  "25.7g protein /100g",
];

export default function ProductPage() {
  return (
    <main className="bg-[#f6ead8] text-[#173b2f]">
      <section className="px-6 py-8 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm">
              <Image
                src="/assets/products/natural-smooth-510g.png"
                alt="FLEX Natural Smooth Peanut Butter"
                width={820}
                height={820}
                priority
                className="mx-auto h-auto max-h-[560px] w-auto object-contain mix-blend-multiply"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Front", "Texture", "Ingredients"].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#173b2f]/10 bg-[#fff7e8] p-3 text-center text-xs font-black uppercase tracking-wide text-[#31574a]"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
              Natural Smooth Peanut Butter
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Smooth peanut butter. Clean everyday fuel.
            </h1>

            <div className="mt-5 flex items-center gap-2 text-sm font-black">
              <span className="text-[#e5b15a]">★★★★★</span>
              <span>4.5 star reviews</span>
            </div>

            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-[#31574a]">
              Premium peanut butter made from 100% roasted peanuts. No palm oil,
              no added sugar, no fillers. Choose your pack size below.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {benefits.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#fffaf0] px-4 py-3 text-xs font-black uppercase tracking-wide"
                >
                  ✓ {item}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-5 shadow-sm">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
                    Choose your pack
                  </p>
                  <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                    Better value when you stock up.
                  </h2>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {packs.map((pack) => (
                  <article
                    key={pack.id}
                    className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-4 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="rounded-full bg-[#6f855f] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white">
                          {pack.badge}
                        </span>
                        <h3 className="mt-4 text-2xl font-black">{pack.name}</h3>
                        <p className="mt-1 text-sm font-bold text-[#31574a]">
                          {pack.detail}
                        </p>
                      </div>

                      <p className="text-2xl font-black tracking-[-0.05em]">
                        {pack.price}
                      </p>
                    </div>

                    <p className="mt-3 text-sm font-bold text-[#31574a]">
                      {pack.note}
                    </p>

                    <AddToCartButton
                      productId={pack.id}
                      className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
                    />
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[2rem] bg-[#173b2f] p-5 text-[#f8ead4]">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d9eb7c]">
                Delivery offer
              </p>
              <p className="mt-2 text-xl font-black">
                Free UK delivery over £25
              </p>
              <p className="mt-1 text-sm font-bold text-[#f8ead4]/80">
                The 6 Pack qualifies automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-6 py-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
              Why FLEX
            </p>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Built for breakfast, workouts and everyday snacking.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["Clean ingredients", "Made with roasted peanuts only."],
              ["No palm oil", "Naturally smooth without unnecessary oils."],
              ["No added sugar", "Rich roasted taste without added sugar."],
              ["High protein", "25.7g protein per 100g."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-5 shadow-sm"
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm font-bold leading-relaxed text-[#31574a]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NutritionTable />
      <ProductReviews />
      <ProductFAQ />

      <div className="sticky bottom-0 z-40 border-t border-[#173b2f]/10 bg-[#fffaf0]/95 px-4 py-3 backdrop-blur md:hidden">
        <AddToCartButton
          productId="natural-smooth-510g"
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4]"
        >
          Add Single Jar — £4.99
        </AddToCartButton>
      </div>
    </main>
  );
}
