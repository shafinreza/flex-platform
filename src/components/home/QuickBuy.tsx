import Image from "next/image";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { featuredVariant } from "@/data/products";

export default function QuickBuy() {
  return (
    <section id="products" className="bg-[#f4f6f3] px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-5xl leading-none tracking-[-0.02em] md:text-6xl">
          OUR PRODUCTS
        </h2>

        <p className="mt-2 max-w-2xl text-[#5c6773]">
          One clean product. Built for training days, breakfast bowls and
          everyday snacks.
        </p>

        <article className="mt-8 grid items-center gap-6 rounded-[18px] border border-black/10 bg-white p-6 md:grid-cols-[.9fr_1.1fr]">
          <div className="grid place-items-center rounded-2xl border border-black/10 bg-[#f7f9f6] p-6">
            <Image
              src={featuredVariant.image}
              alt={featuredVariant.name}
              width={280}
              height={280}
              className="max-h-[280px] w-auto object-contain drop-shadow-xl"
            />
          </div>

          <div>
            <h3 className="text-2xl font-black">
              FLEX Natural Peanut Butter — Smooth
            </h3>

            <p className="mt-2 text-[#5c6773]">{featuredVariant.size}</p>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm font-bold text-[#5c6773]">
                {featuredVariant.rating} Amazon rating
              </span>
            </div>

            <ul className="mt-5 space-y-2 text-[15px] text-[#0f1720]/80">
              <li>✓ 100% roasted peanuts</li>
              <li>✓ No palm oil</li>
              <li>✓ No added sugar</li>
              <li>✓ High protein</li>
            </ul>

            <div className="mt-6 text-4xl font-black text-[#6f855f]">
              £{featuredVariant.price.toFixed(2)}
            </div>

            <AddToCartButton productId={featuredVariant.id} />
          </div>
        </article>
      </div>
    </section>
  );
}
