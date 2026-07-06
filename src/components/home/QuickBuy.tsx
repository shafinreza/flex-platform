import ProductCard from "@/components/shop/ProductCard";

export default function QuickBuy() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-[#0B864E]">
            Shop FLEX
          </p>

          <h2 className="text-5xl font-black leading-tight text-[#4C260F] md:text-6xl">
            Choose how you FLEX.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ProductCard
            badge="Everyday"
            title="Natural Smooth"
            subtitle="Perfect if you’re trying FLEX for the first time."
            price="£5.49"
          />

          <ProductCard
            variant="bundle"
            badge="Most Popular"
            title="Pack of 6"
            subtitle="Stock up, save £7.95 and never run out."
            savings="Save £7.95"
            price="£24.99"
          />
        </div>
      </div>
    </section>
  );
}