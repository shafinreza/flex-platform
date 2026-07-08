import ProductCard from "@/components/shop/ProductCard";
import { storefrontProducts } from "@/data/products";

export default function ShopPage() {
  return (
    <main className="bg-[#f6ead8] px-6 py-16 text-[#173b2f] md:py-24">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#31574a]">
            Shop FLEX
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Peanut butter that actually works hard.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#31574a]">
            Natural smooth peanut butter made with roasted peanuts. No palm oil,
            no added sugar, no fillers. Buy one jar or stock up with the pack of 6.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {storefrontProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
