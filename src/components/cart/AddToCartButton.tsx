"use client";

import { ReactNode, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";

type Product = {
  id: string;
  quantity?: number;
};

type AddToCartButtonProps = {
  product?: Product;
  productId?: string;
  quantity?: number;
  className?: string;
  children?: ReactNode;
};

export default function AddToCartButton({
  product,
  productId,
  quantity = 1,
  className = "",
  children,
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAdd() {
    const id = product?.id ?? productId;
    const amount = product?.quantity ?? quantity;

    if (!id) return;

    for (let i = 0; i < amount; i++) {
      addItem(id);
    }

    setAdded(true);
    window.dispatchEvent(new Event("flex:open-cart"));
    window.dispatchEvent(new Event("flex-cart-open"));
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={
        className ||
        "inline-flex h-14 items-center justify-center rounded-full bg-[#173b2f] px-8 text-base font-black text-[#f6ead8] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#102a22]"
      }
    >
      {added ? "Added to cart" : children ?? "Add to cart"}
    </button>
  );
}
