"use client";

import { useState } from "react";
import FlexButton from "@/components/ui/FlexButton";
import QuantitySelector from "@/components/shop/QuantitySelector";
import { useCart } from "@/components/cart/CartProvider";
import { featuredVariant } from "@/data/products";

export default function ProductInfo() {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  async function buyNow() {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: featuredVariant.id, quantity: qty }] }),
    });

    const data = await response.json();
    if (data.url) window.location.href = data.url;
  }

  function addToCart() {
    for (let i = 0; i < qty; i++) addItem(featuredVariant.id);
    window.dispatchEvent(new Event("flex:open-cart"));
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#6f855f]">
          FLEX
        </p>

        <h1 className="text-4xl font-black leading-tight lg:text-5xl">
          {featuredVariant.name}
        </h1>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-sm text-slate-500">4.4 Amazon rating</span>
        </div>

        <div className="mt-6 text-4xl font-black text-[#6f855f]">
          £{featuredVariant.price.toFixed(2)}
        </div>
      </div>

      <p className="text-lg leading-8 text-slate-600">
        Premium Natural Peanut Butter made from 100% roasted peanuts.
        No palm oil. No added sugar. No fillers.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {["100% Peanuts", "High Protein", "No Added Sugar", "No Palm Oil"].map((item) => (
          <div key={item} className="rounded-xl border bg-white p-4 text-center font-semibold">
            ✓ {item}
          </div>
        ))}
      </div>

      <QuantitySelector value={qty} onChange={setQty} />

      <div className="space-y-3">
        <FlexButton className="w-full" onClick={addToCart}>
          Add {qty} to Cart
        </FlexButton>

        <FlexButton variant="secondary" className="w-full" onClick={buyNow}>
          Buy Now
        </FlexButton>
      </div>
    </div>
  );
}
