"use client";

import Image from "next/image";
import Link from "next/link";
import FlexButton from "@/components/ui/FlexButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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

  const cartItem = isBundle
    ? {
        id: "natural-smooth-510g-pack-6",
        name: "Pack of 6 - FLEX Natural Smooth 510g",
        price: 24.99,
        image,
      }
    : {
        id: "natural-smooth-510g",
        name: "FLEX Natural Smooth 510g",
        price: 5.49,
        image,
      };

  return (
    <Card className="overflow-hidden rounded-[24px] border border-[#4C260F]/15 bg-white shadow-sm">
      <CardContent className="grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
        <div className="flex min-h-[260px] items-center justify-center rounded-[20px] bg-[#F7F3EA] p-6">
          <Image
            src={image}
            alt={title}
            width={260}
            height={260}
            className="max-h-[260px] w-auto object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          {badge && (
            <Badge
              className={`mb-4 w-fit rounded-full px-4 py-1 text-xs font-bold uppercase ${
                isBundle ? "bg-[#EF6838]" : "bg-[#0B864E]"
              } text-white`}
            >
              {badge}
            </Badge>
          )}

          <h3 className="text-3xl font-black leading-tight text-[#4C260F]">
            {title}
          </h3>

          <p className="mt-3 font-medium text-[#4C260F]/70">{subtitle}</p>

          {savings && (
            <p className="mt-4 w-fit rounded-full bg-[#EFDFC7] px-4 py-2 text-sm font-bold text-[#EF6838]">
              {savings}
            </p>
          )}

          <div className="mt-5 text-4xl font-black text-[#0B864E]">
            {price}
          </div>

          <FlexButton className="mt-6 w-full" onClick={() => addItem(cartItem)}>
            Add to Cart
          </FlexButton>

          <Link
            href="/products/natural-smooth-510g"
            className="mt-4 text-center text-sm font-bold text-[#0B864E] underline-offset-4 hover:underline"
          >
            View product details
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}