"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";

export default function AddToCartButton({
  productId,
  children = "Add to Cart",
  className = "",
}: {
  productId: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(productId);
    setAdded(true);
    window.dispatchEvent(new Event("flex:open-cart"));

    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className ||
        "rounded-xl bg-[#6f855f] px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#0B864E]"
      }
    >
      {added ? "Added ✓" : children}
    </button>
  );
}
