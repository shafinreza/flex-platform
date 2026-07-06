"use client";

import Image from "next/image";
import Link from "next/link";
import FlexButton from "@/components/ui/FlexButton";
import { bundles, featuredVariant, productFamilies } from "@/data/products";
import { useCart } from "@/components/cart/CartProvider";

const faqs = [
  ["Is FLEX peanut butter vegan?", "Yes — it is made from roasted peanuts only."],
  ["Does it contain added sugar?", "No. FLEX has no added sugar."],
  ["Does it contain palm oil?", "No. FLEX is made without palm oil."],
  ["Why does oil separate?", "Natural peanut butter can separate because we do not use palm oil or stabilisers. Just stir before use."],
];

export default function NaturalSmoothPage() {
  const product = featuredVariant;
  const family = productFamilies[0];
  const bundle = bundles[0];
  const { addItem, checkout } = useCart();

  async function buyNow() {
    addItem(product.id);

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: [{ id: product.id, quantity: 1 }] }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  }

  return (
    <main>
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-[1120px] gap-8 md:grid-cols-[.95fr_1.05fr]">
          <div className="md:sticky md:top-24 md:h-fit">
            <div className="rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-6">
              <div className="grid place-items-center rounded-2xl bg-[#f7f9f6] p-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={620}
                  height={620}
                  priority
                  className="max-h-[560px] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {["100% peanuts", "No palm oil", "No added sugar"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[rgba(15,23,32,.10)] bg-white p-3 text-center text-xs font-black uppercase tracking-[0.12em]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-6 md:p-8">
              <p className="mb-3 text-sm text-[#0f1720]/70">{family.name}</p>

              <h1 className="text-[56px] font-black leading-[.88] tracking-[-0.05em] md:text-[76px]">
                {product.name}
              </h1>

              <p className="mt-5 text-[#5c6773]">{family.description}</p>

              <div className="mt-5 font-bold">
                ★★★★★ {product.rating} ({product.reviewCount} reviews)
              </div>

              <div className="mt-6 text-4xl font-black text-[#6f855f]">
                £{product.price.toFixed(2)}
              </div>

              <div className="mt-8 grid gap-3">
                <FlexButton onClick={() => addItem(product.id)} className="w-full">
                  Add to Cart
                </FlexButton>

                <FlexButton variant="outline" onClick={buyNow} className="w-full">
                  Buy Now
                </FlexButton>
              </div>

              <p className="mt-4 text-sm text-[#5c6773]">
                Secure checkout. Standard UK delivery available.
              </p>
            </div>

            <div className="mt-5 rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-6">
              <h2 className="text-2xl font-black">Product details</h2>

              <ul className="mt-4 space-y-2 text-[#0f1720]/85">
                <li><strong>Ingredients:</strong> Roasted peanuts 100%</li>
                <li><strong>Allergen info:</strong> Contains peanuts. May contain traces of other nuts.</li>
                <li><strong>Texture:</strong> Smooth</li>
                <li><strong>Size:</strong> 510g</li>
                <li><strong>Protein:</strong> 132g per jar approx.</li>
                <li>No palm oil • No added sugar • No fillers</li>
              </ul>
            </div>

            <div className="mt-5 rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-6">
              <h2 className="text-2xl font-black">Frequently bought together</h2>

              <div className="mt-5 grid gap-4 rounded-2xl bg-[#f7f9f6] p-4 md:grid-cols-[120px_1fr_auto] md:items-center">
                <Image
                  src={bundle.image}
                  alt={bundle.fullName}
                  width={120}
                  height={120}
                  className="h-28 w-28 object-contain"
                />

                <div>
                  <h3 className="font-black">{bundle.fullName}</h3>
                  <p className="mt-1 text-sm text-[#5c6773]">
                    Stock up and save. Ideal for families, gyms and repeat buyers.
                  </p>
                  <p className="mt-2 font-black text-[#6f855f]">
                    £{bundle.price.toFixed(2)}
                  </p>
                </div>

                <FlexButton onClick={() => addItem(bundle.id)}>
                  Add Bundle
                </FlexButton>
              </div>
            </div>

            <div className="mt-5 rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-6">
              <h2 className="text-2xl font-black">How to use</h2>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {["Toast & bagels", "Oats & smoothies", "Baking & sauces"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[rgba(15,23,32,.10)] p-4 font-bold"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-6">
              <h2 className="text-2xl font-black">FAQ</h2>

              <div className="mt-4 space-y-3">
                {faqs.map(([q, a]) => (
                  <details
                    key={q}
                    className="rounded-xl border border-[rgba(15,23,32,.10)] p-4"
                  >
                    <summary className="cursor-pointer font-black">{q}</summary>
                    <p className="mt-3 text-[#5c6773]">{a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link href="/shop" className="font-black text-[#6f855f]">
                ← Back to shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
