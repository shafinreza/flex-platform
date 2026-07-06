"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CheckCircle2, Home, Package, Truck } from "lucide-react";
import FlexButton from "@/components/ui/FlexButton";
import { useCart } from "@/components/cart/CartProvider";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();
  const hasCleared = useRef(false);

  useEffect(() => {
    if (hasCleared.current) return;
    hasCleared.current = true;
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-screen bg-[#f4f6f3] px-5 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl border border-black/10 bg-white p-10 shadow-sm">
        <div className="flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#6f855f]/10">
            <CheckCircle2 size={56} className="text-[#6f855f]" />
          </div>
        </div>

        <p className="mt-8 text-center text-sm font-black uppercase tracking-[0.2em] text-[#6f855f]">
          Order Confirmed
        </p>

        <h1 className="mt-3 text-center text-6xl font-black tracking-tight">
          Thank You!
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-center leading-8 text-slate-600">
          We've received your FLEX order and we're getting everything ready.
          You'll receive an email confirmation shortly.
        </p>

        <div className="mt-12 space-y-5">
          <Status icon={<CheckCircle2 size={22} />} title="Order Confirmed" text="Your payment has been received." active />
          <Status icon={<Package size={22} />} title="Preparing your order" text="We'll carefully pack your FLEX products." />
          <Status icon={<Truck size={22} />} title="Shipping" text="You'll receive tracking information by email." />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Link href="/shop">
            <FlexButton className="w-full">Continue Shopping</FlexButton>
          </Link>

          <Link href="/">
            <FlexButton variant="secondary" className="w-full">
              <Home size={18} />
              Home
            </FlexButton>
          </Link>
        </div>

        <div className="mt-10 rounded-2xl bg-[#eef1ec] p-6 text-center">
          <h3 className="font-black">Need help?</h3>
          <p className="mt-2 text-slate-600">Contact us anytime at</p>
          <p className="mt-1 font-black text-[#6f855f]">team@eatflex.uk</p>
        </div>
      </div>
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
    <div className={`flex items-start gap-4 rounded-2xl border p-5 ${active ? "border-[#6f855f] bg-[#eef7ec]" : "border-black/10 bg-white"}`}>
      <div className={`mt-1 ${active ? "text-[#6f855f]" : "text-slate-400"}`}>{icon}</div>
      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{text}</p>
      </div>
    </div>
  );
}
