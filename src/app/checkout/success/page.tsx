"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CheckCircle2, Home, Package, Truck } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { trackPurchaseCompleted } from "@/lib/analytics";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();
  const hasCleared = useRef(false);

  useEffect(() => {
    if (hasCleared.current) return;
    hasCleared.current = true;
    trackPurchaseCompleted();
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-screen bg-[#f6ead8] px-6 py-16 text-[#173b2f]">
      <section className="mx-auto max-w-3xl rounded-[2rem] bg-[#fff8ed] p-8 text-center shadow-sm ring-1 ring-[#173b2f]/10 md:p-12">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#173b2f] text-[#f8ead4]">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-[#31574a]">
          Order confirmed
        </p>

        <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
          Thank you!
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#31574a]">
          We’ve received your FLEX order and we’re getting everything ready.
          You’ll receive an email confirmation shortly.
        </p>

        <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
          <Status
            icon={<CheckCircle2 className="h-6 w-6" />}
            title="Order confirmed"
            text="Your payment has been received."
            active
          />
          <Status
            icon={<Package className="h-6 w-6" />}
            title="Preparing"
            text="We’ll carefully pack your FLEX products."
          />
          <Status
            icon={<Truck className="h-6 w-6" />}
            title="Shipping"
            text="Tracking details will be sent by email."
          />
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/shop"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4]"
          >
            Continue shopping
          </Link>

          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#173b2f] px-6 text-sm font-black"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>

        <p className="mt-8 text-sm font-bold text-[#31574a]">
          Need help? Contact us at team@eatflex.uk
        </p>
      </section>
    </main>
  );
}

function Status({
  icon,
  title,
  text,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-5 ${
        active ? "bg-[#173b2f] text-[#f8ead4]" : "bg-[#f6ead8] text-[#173b2f]"
      }`}
    >
      {icon}
      <h3 className="mt-4 text-lg font-black">{title}</h3>
      <p className={`mt-2 text-sm font-bold ${active ? "opacity-85" : "text-[#31574a]"}`}>
        {text}
      </p>
    </div>
  );
}
