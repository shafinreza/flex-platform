import Image from "next/image";
import ProductCard from "@/components/shop/ProductCard";
import AddToCartButton from "@/components/cart/AddToCartButton";
import SectionHeading from "@/components/ui/SectionHeading";
import NutritionTable from "@/components/product/NutritionTable";
import Benefits from "@/components/home/Benefits";
import CTA from "@/components/home/CTA";
import {
  FREE_SHIPPING_THRESHOLD,
  featuredVariant,
  storefrontProducts,
} from "@/data/products";

export default function ProductPage() {
  return (
    <main className="bg-[#f6ead8] text-[#173b2f]">
      {/* Hero section */}
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Gallery */}
        <div className="sticky top-24 self-start">
          <div className="overflow-hidden rounded-3xl bg-[#fff8ed] p-8 shadow-md ring-1 ring-[#173b2f]/10">
            <Image
              src={featuredVariant.image}
              alt={featuredVariant.name}
              width={600}
              height={720}
              priority
              className="mx-auto h-auto w-full object-contain"
            />
          </div>
        </div>
        {/* Info */}
        <div className="space-y-6">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#6b7d2f]">
            {featuredVariant.name}
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Smooth peanut butter. Clean fuel.
          </h1>
          <p className="text-lg leading-7 text-[#31574a] max-w-prose">
            Premium natural peanut butter made with roasted peanuts. No added
            sugar, no palm oil, no fillers. Choose the pack size that fits your
            routine.
          </p>
          {/* Features list */}
          <div className="flex flex-wrap gap-3">
            {featuredVariant.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-[#fff8ed] px-4 py-2 text-sm font-black shadow-sm ring-1 ring-[#173b2f]/10"
              >
                ✓ {feature}
              </span>
            ))}
          </div>
          {/* Price and add to cart */}
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-black">
                £{featuredVariant.price.toFixed(2)}
              </span>
              <span className="text-sm font-bold text-[#6b6b5f]">510g jar</span>
            </div>
            <AddToCartButton
              productId={featuredVariant.id}
              className="inline-flex h-14 w-full max-w-sm items-center justify-center rounded-full bg-[#173b2f] px-8 text-base font-black text-[#f8ead4] transition-colors hover:bg-[#102a22]"
            >
              Add to cart
            </AddToCartButton>
            {/* Delivery offer bar */}
            <div className="rounded-3xl bg-[#173b2f] p-4 text-[#f8ead4] max-w-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">
                Delivery offer
              </p>
              <p className="mt-1 text-lg font-black">
                Free UK delivery over £{FREE_SHIPPING_THRESHOLD}
              </p>
              <p className="mt-1 text-xs font-bold opacity-85">
                The 6-pack qualifies automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pack selection */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Choose your pack"
          title={"Buy once, enjoy all week"}
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {storefrontProducts.map((product) => {
            const savings = product.compareAtPrice
              ? `Save £${(product.compareAtPrice - product.price).toFixed(2)}`
              : undefined;
            return (
              <ProductCard
                key={product.id}
                product={product}
                badge={product.id === "natural-smooth-510g" ? "Most popular" : product.badge}
                savings={savings}
              />
            );
          })}
        </div>
      </section>
      {/* Nutrition and benefits */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-2">
        {/* Nutrition table */}
        <div>
          <SectionHeading
            eyebrow="Nutrition"
            title={"Typical values"}
            subtitle={"Per 100g serving"}
          />
          <div className="mt-6 overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#173b2f]/10">
            <NutritionTable />
          </div>
        </div>
        {/* Additional benefits */}
        <div>
          <SectionHeading
            eyebrow="Benefits"
            title={"Why you'll love it"}
            subtitle={"Clean ingredients, sustained energy and a rich roasted taste."}
          />
          <div className="mt-6">
            <Benefits />
          </div>
        </div>
      </section>
      {/* CTA for free delivery */}
      <CTA />
    </main>
  );
}
