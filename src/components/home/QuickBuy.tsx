import ProductCard from "@/components/shop/ProductCard";

export default function QuickBuy() {
  return (
    <section className="bg-[#EFDFC7] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0B864E]">
            Shop FLEX
          </p>

          <h1 className="text-5xl font-black leading-tight text-[#4C260F] md:text-7xl">
            Choose your FLEX.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-[#4C260F]/75">
            Start with our Natural Smooth peanut butter — or stock up and save.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <ProductCard
            badge="Natural Smooth"
            title="FLEX Smooth 510g"
            subtitle="High Protein • No Added Sugar • No Palm Oil"
            price="£5.49"
          />

          <ProductCard
            variant="bundle"
            badge="BEST VALUE"
            title="Pack of 6"
            subtitle="6 × 510g jars. Perfect for families, meal prep and everyday fuel."
            savings="Save £7.95"
            price="£24.99"
          />
        </div>
      </div>
    </section>
  );
}