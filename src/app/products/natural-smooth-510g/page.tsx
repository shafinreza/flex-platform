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
  },
  {
    id: "natural-smooth-2-pack",
    name: "2 Pack",
    detail: "2 × 510g",
    price: "£9.49",
    badge: "Save 49p",
  },
  {
    id: "natural-smooth-3-pack",
    name: "3 Pack",
    detail: "3 × 510g",
    price: "£13.99",
    badge: "Popular",
  },
  {
    id: "natural-smooth-6-pack",
    name: "6 Pack",
    detail: "6 × 510g",
    price: "£26.99",
    badge: "Best Value",
  },
];

export default function ProductPage() {
  return (
    <main className="bg-[#f6ead8] text-[#173b2f]">
      <section className="px-6 py-10 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-8">
            <Image
              src="/assets/products/natural-smooth-510g.png"
              alt="FLEX Natural Smooth Peanut Butter"
              width={760}
              height={760}
              priority
              className="mx-auto h-auto max-h-[520px] w-auto object-contain mix-blend-multiply"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
              Natural Smooth Peanut Butter
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Smooth peanut butter. Clean everyday fuel.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-[#31574a]">
              Premium peanut butter made from 100% roasted peanuts. No palm oil,
              no added sugar, no fillers. Choose your pack size below.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["100% Peanuts", "No Palm Oil", "No Added Sugar", "25.7g Protein /100g"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#fffaf0] px-4 py-3 text-xs font-black uppercase tracking-wide"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-6 py-10 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
              Choose your pack
            </p>
            <h2 className="text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Pick your FLEX.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {packs.map((pack) => (
              <article
                key={pack.id}
                className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-5 shadow-sm"
              >
                <span className="rounded-2xl bg-[#6f855f] px-3 py-2 text-xs font-black uppercase tracking-wide text-white">
                  {pack.badge}
                </span>
                <h3 className="mt-5 text-2xl font-black">{pack.name}</h3>
                <p className="mt-1 text-sm font-bold text-[#31574a]">
                  {pack.detail}
                </p>
                <p className="mt-4 text-3xl font-black">{pack.price}</p>
                <AddToCartButton
                  productId={pack.id}
                  className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <NutritionTable />
      <ProductReviews />
      <ProductFAQ />
    </main>
  );
}
