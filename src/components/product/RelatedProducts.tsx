"use client";

import ProductCard from "@/components/shop/ProductCard";

export default function RelatedProducts() {
  return (
    <section className="bg-[#eef1ec] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#6f855f]">
          Shop more
        </p>

        <h2 className="mb-10 text-4xl font-black md:text-5xl">
          You may also like
        </h2>

        <div className="grid gap-5">
          <ProductCard
            badge="Available now"
            title="FLEX Natural Peanut Butter — Smooth"
            subtitle="100% roasted peanuts. No palm oil. No added sugar."
            price="£5.49"
          />

          <ProductCard
            variant="bundle"
            badge="Best value"
            title="6 × FLEX Natural Smooth 510g"
            subtitle="Stock up and save. Same smooth texture, same clean ingredients."
            savings="Save £7.95"
            price="£24.99"
          />
        </div>
      </div>
    </section>
  );
}
