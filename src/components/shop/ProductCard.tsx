"use client";

import Image from "next/image";
import Link from "next/link";
import FlexButton from "@/components/ui/FlexButton";
import { useCart } from "@/components/cart/CartProvider";

type ProductCardProps = {
  badge?: string;
  title: string;
  subtitle: string;
  price: string;
  savings?: string;
  variant?: "single" | "bundle";
  image?: string;
};

export default function ProductCard({
  badge,
  title,
  subtitle,
  price,
  savings,
  variant = "single",
  image = "/assets/products/natural-smooth-510g.png",
}: ProductCardProps) {
  const { addItem } = useCart();
  const isBundle = variant === "bundle";
  const productId = isBundle
    ? "natural-smooth-510g-pack-6"
    : "natural-smooth-510g";

  return (
    <article className="grid items-center gap-5 rounded-[18px] border border-[rgba(15,23,32,.10)] bg-white p-6 md:grid-cols-[.95fr_1.05fr]">
      <div className="grid place-items-center rounded-2xl border border-[rgba(15,23,32,.08)] bg-[#f7f9f6] p-5">
        <Image
          src={image}
          alt={title}
          width={320}
          height={320}
          className="max-h-[280px] w-auto object-contain drop-shadow-xl"
        />
      </div>

      <div>
        {badge && (
          <div className="mb-3 inline-block rounded-full bg-[rgba(111,133,95,.14)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.12em]">
            {badge}
          </div>
        )}

        <h3 className="mb-3 text-xl font-bold">{title}</h3>

        <p className="mb-4 max-w-xl text-[#5c6773]">{subtitle}</p>

        <ul className="mb-5 list-disc pl-5 text-[15px] text-[#0f1720]/80">
          <li><strong>Ingredients:</strong> Roasted peanuts 100%</li>
          <li><strong>Allergen info:</strong> Contains peanuts</li>
          <li>No palm oil • No added sugar</li>
          <li><strong>Protein:</strong> 132g per jar approx.</li>
        </ul>

        <div className="mb-5 text-3xl font-black text-[#6f855f]">{price}</div>

        {savings && (
          <p className="mb-4 text-sm font-bold text-[#6f855f]">{savings}</p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <FlexButton onClick={() => addItem(productId)}>Add to Cart</FlexButton>

          <Link href="/products/natural-smooth-510g">
            <FlexButton variant="outline">View Product</FlexButton>
          </Link>

          {isBundle && (
            <span className="text-sm text-[#5c6773]">
              Best for families, gyms and repeat buyers.
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
