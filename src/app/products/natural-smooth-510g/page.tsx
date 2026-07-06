"use client";

import Image from "next/image";
import FlexButton from "@/components/ui/FlexButton";
import { featuredVariant, productFamilies } from "@/data/products";
import { useCart } from "@/components/cart/CartProvider";

const faqs = [
  {
    q: "Is FLEX peanut butter suitable for vegetarians?",
    a: "Yes, FLEX Natural Smooth is made with roasted peanuts and is suitable for vegetarians.",
  },
  {
    q: "Does it contain added sugar?",
    a: "No. FLEX Natural Smooth has no added sugar.",
  },
  {
    q: "Does it contain palm oil?",
    a: "No. FLEX is made without palm oil.",
  },
  {
    q: "Why does oil separate?",
    a: "Natural peanut butter can separate because we do not use palm oil or unnecessary stabilisers. Just stir before use.",
  },
];

export default function NaturalSmoothPage() {
  const product = featuredVariant;
  const family = productFamilies[0];
  const { addItem } = useCart();

  return (
    <main className="bg-[#F7F0E6] text-[#4C260F]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-[32px] bg-white p-10 shadow-sm">
          <Image
            src={product.image}
            alt={product.name}
            width={520}
            height={520}
            priority
            className="max-h-[520px] w-auto object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0B864E]">
            {family.name}
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            {product.name}
          </h1>

          <p className="mt-5 text-xl font-medium text-[#4C260F]/75">
            {family.description}
          </p>

          <div className="mt-6 text-lg font-bold">
            ★★★★★ {product.rating} ({product.reviewCount} reviews)
          </div>

          <div className="mt-8 text-5xl font-black text-[#0B864E]">
            £{product.price.toFixed(2)}
          </div>

          <div className="mt-8 grid gap-3">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="rounded-full bg-white px-5 py-3 font-bold"
              >
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <FlexButton
              className="w-full md:w-auto"
              onClick={() => addItem(product.id)}
            >
              Add to Cart
            </FlexButton>
          </div>

          <p className="mt-4 text-sm font-semibold text-[#4C260F]/60">
            Secure checkout. UK delivery available.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {["100% Roasted Peanuts", "High Protein", "No Added Sugar", "No Palm Oil"].map(
            (item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[#4C260F]/15 bg-[#F7F0E6] p-6 text-center font-black"
              >
                {item}
              </div>
            )
          )}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8">
            <h2 className="text-4xl font-black">Ingredients</h2>
            <p className="mt-4 text-lg font-semibold text-[#4C260F]/75">
              Roasted peanuts.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#4C260F]/60">
              Allergy advice: contains peanuts. May contain traces of other nuts.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8">
            <h2 className="text-4xl font-black">How to use</h2>
            <ul className="mt-4 space-y-3 text-lg font-semibold text-[#4C260F]/75">
              <li>Spread on toast, bagels or pancakes.</li>
              <li>Add to oats, smoothies or protein bowls.</li>
              <li>Use in sauces, baking or post-workout snacks.</li>
            </ul>
          </div>

          <div className="rounded-[32px] bg-white p-8">
            <h2 className="text-4xl font-black">Nutrition</h2>
            <p className="mt-4 text-lg font-semibold text-[#4C260F]/75">
              Naturally high in protein and made from roasted peanuts only.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#4C260F]/60">
              Full nutrition table coming soon.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8">
            <h2 className="text-4xl font-black">Delivery</h2>
            <p className="mt-4 text-lg font-semibold text-[#4C260F]/75">
              Standard UK delivery is calculated at checkout. Orders are packed
              carefully to protect your jar.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#EFDFC7] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-black">FAQs</h2>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[24px] bg-white p-6">
                <h3 className="text-xl font-black">{faq.q}</h3>
                <p className="mt-2 font-semibold text-[#4C260F]/70">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
