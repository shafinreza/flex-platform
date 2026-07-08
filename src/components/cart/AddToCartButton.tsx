"use client";

import { ReactNode, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";

type Product = {
  id: string;
  name?: string;
  price?: number;
  image?: string;
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

    if (!id) {
      return;
    }

    const amount = product?.quantity ?? quantity ?? 1;

    for (let i = 0; i < amount; i++) {
      addItem(id);
    }

    setAdded(true);
    window.dispatchEvent(new CustomEvent("flex-cart-open"));
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <button
      onClick={handleAdd}
      className={
        className ||
        "inline-flex h-14 items-center justify-center rounded-full bg-[#173b2f] px-8 text-base font-black text-[#f6ead8] shadow-lg transition hover:scale-[1.02] hover:bg-[#102a22]"
      }
    >
      {added ? "Added to cart" : children ?? "Add to cart"}
    </button>
  );
}
