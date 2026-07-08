import ProductCard from "@/components/shop/ProductCard";
import {
  FREE_SHIPPING_THRESHOLD,
  featuredVariant,
  storefrontProducts,
} from "@/data/products";

export default function ProductPage() {
  return (
    <main className="bg-[#f6ead8] px-6 py-12 text-[#173b2f] md:py-20">
      <section className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[3rem] bg-[#fff8ed] p-8 shadow-sm ring-1 ring-[#173b2f]/10">
          <img
            src={featuredVariant.image}
            alt={featuredVariant.name}
            className="mx-auto max-h-[620px] w-auto object-contain"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#31574a]">
            FLEX Natural Smooth
          </p>

          <h1 className="text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">
            Smooth peanut butter. Clean fuel.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#31574a]">
            Premium natural peanut butter made with roasted peanuts. No added sugar,
            no palm oil, no fillers. Choose the pack size that fits your routine.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {featuredVariant.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-[#fff8ed] px-4 py-2 text-sm font-black shadow-sm ring-1 ring-[#173b2f]/10"
              >
                ✓ {feature}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-[#173b2f] p-5 text-[#f8ead4]">
            <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80">
              Delivery offer
            </p>
            <p className="mt-2 text-2xl font-black">
              Free UK delivery over £{FREE_SHIPPING_THRESHOLD}
            </p>
            <p className="mt-2 text-sm font-bold opacity-85">
              The 6-pack qualifies automatically.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <div className="mb-6">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#31574a]">
            Choose your pack
          </p>
          <h2 className="mt-2 text-4xl font-black tracking-tight">
            Buy once, enjoy all week.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {storefrontProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-3">
        {[
          ["No added sugar", "Naturally nutty without unnecessary sweeteners."],
          ["No palm oil", "Simple ingredients and a smooth roasted texture."],
          ["Fitness friendly", "Easy fuel for oats, shakes, toast and snacks."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-[2rem] bg-[#fff8ed] p-6 shadow-sm ring-1 ring-[#173b2f]/10"
          >
            <h3 className="text-2xl font-black">{title}</h3>
            <p className="mt-3 text-sm font-bold leading-6 text-[#31574a]">
              {text}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
