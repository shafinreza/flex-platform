import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";
import ProductCard from "@/components/shop/ProductCard";
import {
  FREE_SHIPPING_THRESHOLD,
  featuredBundle,
  featuredVariant,
  storefrontProducts,
} from "@/data/products";

export default function Hero() {
  return (
    <section className="bg-[#f6ead8] px-6 py-12 text-[#173b2f] md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-[#31574a]">
            Natural Peanut Butter
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
            Fuel your FLEX.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#31574a]">
            Smooth roasted peanut butter with no added sugar and no palm oil.
            Built for breakfast, gym bags, smoothies and everyday snacking.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AddToCartButton product={{ id: featuredBundle.id }}>
              Get 6-pack — £{featuredBundle.price.toFixed(2)}
            </AddToCartButton>

            <Link
              href="#products"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[#173b2f] px-8 text-base font-black transition hover:bg-[#173b2f] hover:text-[#f8ead4]"
            >
              Choose pack size
            </Link>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center text-xs font-black uppercase tracking-wide">
            <div className="rounded-2xl bg-white/60 px-3 py-4">No added sugar</div>
            <div className="rounded-2xl bg-white/60 px-3 py-4">No palm oil</div>
            <div className="rounded-2xl bg-white/60 px-3 py-4">Free delivery £{FREE_SHIPPING_THRESHOLD}+</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-[3rem] bg-[#e5b15a] opacity-30 blur-3xl" />
          <div className="relative rounded-[3rem] bg-[#fff8ed] p-8 shadow-2xl ring-1 ring-[#173b2f]/10">
            <img
              src={featuredVariant.image}
              alt="FLEX Natural Smooth Peanut Butter"
              className="mx-auto max-h-[520px] w-auto object-contain"
            />

            <div className="mt-6 rounded-3xl bg-[#173b2f] p-6 text-[#f8ead4]">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-bold opacity-80">Best value</p>
                  <p className="text-3xl font-black">
                    6-pack £{featuredBundle.price.toFixed(2)}
                  </p>
                </div>
                <p className="max-w-[180px] text-right text-sm font-bold">
                  Unlock free UK delivery and stock up properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="products" className="mx-auto mt-16 max-w-7xl">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#31574a]">
              Buy direct
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">
              Choose your FLEX.
            </h2>
          </div>

          <Link href="/shop" className="hidden font-black underline md:block">
            View shop
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {storefrontProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
