import ProductInfo from "@/components/product/ProductInfo";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductTrust from "@/components/product/ProductTrust";
import WaysToEnjoy from "@/components/product/WaysToEnjoy";
import ProductReviews from "@/components/product/ProductReviews";
import ProductCard from "@/components/shop/ProductCard";
import { featuredBundle, featuredVariant } from "@/data/products";

export default function ProductPage() {
  return (
    <main className="bg-[#f6ead8] px-6 py-12 text-[#173b2f] md:py-20">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="rounded-[3rem] bg-[#fff8ed] p-8 shadow-sm ring-1 ring-[#173b2f]/10">
          <img
            src={featuredVariant.image}
            alt={featuredVariant.name}
            className="mx-auto max-h-[620px] w-auto object-contain"
          />
        </div>

        <ProductInfo />
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="mb-6">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#31574a]">
            Stock up
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">
            Also available as a pack of 6.
          </h2>
        </div>

        <div className="max-w-xl">
          <ProductCard
            product={{
              id: featuredBundle.id,
              name: featuredBundle.fullName,
              subtitle: featuredBundle.description,
              price: featuredBundle.price,
              image: featuredBundle.image,
              href: "/products/natural-smooth-510g",
              badge: featuredBundle.badge,
            }}
          />
        </div>
      </section>

      <div className="mx-auto mt-16 max-w-7xl space-y-12">
        <ProductTrust />
        <WaysToEnjoy />
        <ProductReviews />
        <ProductFAQ />
      </div>
    </main>
  );
}
