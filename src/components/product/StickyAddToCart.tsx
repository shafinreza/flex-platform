"use client";

import { useEffect, useState } from "react";
import FlexButton from "@/components/ui/FlexButton";
import { useCart } from "@/components/cart/CartProvider";
import { featuredVariant } from "@/data/products";

export default function StickyAddToCart() {
  const { addItem } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white/95 backdrop-blur shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        <div>
          <div className="font-black">
            {featuredVariant.name}
          </div>

          <div className="text-[#6f855f] font-bold">
            £{featuredVariant.price.toFixed(2)}
          </div>
        </div>

        <FlexButton
          onClick={() => addItem(featuredVariant.id)}
        >
          Add to Cart
        </FlexButton>

      </div>
    </div>
  );
}
