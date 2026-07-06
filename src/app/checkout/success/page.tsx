"use client";

import Link from "next/link";
import { useEffect } from "react";
import FlexButton from "@/components/ui/FlexButton";
import { useCart } from "@/components/cart/CartProvider";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="px-5 py-20">
      <div className="mx-auto max-w-[760px] rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-8 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6f855f]">
          Order confirmed
        </p>

        <h1 className="text-[56px] font-black leading-[.9] tracking-[-0.05em]">
          THANK YOU
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[#5c6773]">
          Your FLEX order has been placed. You’ll receive your payment
          confirmation and delivery details by email.
        </p>

        <Link href="/shop">
          <FlexButton className="mt-8">Continue Shopping</FlexButton>
        </Link>
      </div>
    </main>
  );
}
