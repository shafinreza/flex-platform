import type { Metadata } from "next";
import { FREE_SHIPPING_THRESHOLD, storefrontProducts } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/shop/ProductCard";

export const metadata: Metadata = {
  title: "Shop FLEX Peanut Butter | Natural Smooth Bundles",
  description:
    "Shop FLEX Natural Smooth Peanut Butter. Single jar, 2 pack, 3 pack and 6 pack bundles. Free UK delivery over £25.",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);
}

export default function ShopPage() {
  return (
    <main className="bg-[#f6ead8] text-[#173b2f]">
      {/* Shop hero */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow="Shop FLEX"
          title={"Choose your fuel"}
          subtitle={
            `Natural smooth peanut butter for breakfast, workouts, snacks and recipes. Free UK delivery over ${formatPrice(
              FREE_SHIPPING_THRESHOLD
            )}.`
          }
        />
      </section>
      {/* Product grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {storefrontProducts.map((product) => {
            const isSingle = product.id === "natural-smooth-510g";
            const savings = product.compareAtPrice
              ? `Save £${(product.compareAtPrice - product.price).toFixed(2)}`
              : undefined;
            return (
              <ProductCard
                key={product.id}
                product={product}
                badge={isSingle ? "Most popular" : product.badge}
                savings={savings}
              />
            );
          })}
        </div>
      </section>
      {/* Promise bar */}
      <section className="bg-[#fff8ed] py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-3">
          <div>
            <h3 className="text-xl font-black">No added sugar</h3>
            <p className="mt-2 text-sm text-[#31574a]">Just simple, natural peanut butter for everyday use.</p>
          </div>
          <div>
            <h3 className="text-xl font-black">No palm oil</h3>
            <p className="mt-2 text-sm text-[#31574a]">Smooth texture, rich roasted taste and no unnecessary extras.</p>
          </div>
          <div>
            <h3 className="text-xl font-black">Free delivery over £{FREE_SHIPPING_THRESHOLD}</h3>
            <p className="mt-2 text-sm text-[#31574a]">The 6 Pack unlocks free UK delivery automatically.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
