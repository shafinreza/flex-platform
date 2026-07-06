import ProductCard from "@/components/shop/ProductCard";

export default function QuickBuy() {
  return (
    <section id="products" className="px-5 py-[72px]">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-3 text-[62px] font-black leading-[.9] tracking-[-0.04em]">
          OUR PRODUCTS
        </h2>

        <p className="mb-7 max-w-[62ch] text-[#5c6773]">
          We’re starting with one SKU — and making it flawless. More products are coming.
        </p>

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
