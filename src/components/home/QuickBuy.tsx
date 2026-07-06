import ProductCard from "@/components/shop/ProductCard";

export default function QuickBuy() {
  return (
    <div id="products" className="grid gap-5">
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
  );
}
