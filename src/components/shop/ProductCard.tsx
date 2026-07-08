import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/components/cart/AddToCartButton";

type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  href: string;
  badge: string;
  jarCount: number;
};

type ProductCardProps = {
  product?: Product;
  badge?: string;
  title?: string;
  subtitle?: string;
  price?: string;
  variant?: string;
  savings?: string;
};

function priceToNumber(price?: string) {
  if (!price) return 4.99;
  return Number(price.replace("£", "")) || 4.99;
}

export default function ProductCard(props: ProductCardProps) {
  const product: Product = props.product ?? {
    id: props.variant === "bundle" ? "natural-smooth-6-pack" : "natural-smooth-510g",
    name: props.title ?? "FLEX Natural Smooth",
    subtitle: props.subtitle ?? "Single 510g jar",
    price: priceToNumber(props.price),
    image: "/assets/products/flex-jar.png",
    href: "/products/natural-smooth-510g",
    badge: props.badge ?? "Shop FLEX",
    jarCount: props.variant === "bundle" ? 6 : 1,
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-[#fff8ed] ring-1 ring-[#173b2f]/10 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product link wraps everything except the add to cart button */}
      <Link href={product.href} className="block p-6 pb-0">
        {/* Badge and price */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="rounded-full bg-[#173b2f] px-4 py-1.5 text-xs font-black uppercase tracking-wide text-[#f8ead4]">
            {product.badge}
          </span>
          <span className="text-xl font-black text-[#173b2f]">
            £{product.price.toFixed(2)}
          </span>
        </div>
        {/* Image wrapper with subtle background */}
        <div className="overflow-hidden rounded-2xl bg-[#f6ead8] p-8">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            priority
            className="mx-auto h-64 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {/* Name and subtitle */}
        <div className="mt-6">
          <h3 className="text-2xl font-black leading-tight tracking-tight text-[#173b2f]">
            {product.name}
          </h3>
          <p className="mt-2 text-sm font-bold leading-6 text-[#31574a]">
            {product.subtitle}
          </p>
          {/* Jar count, compare at price and optional savings */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#f6ead8] px-3 py-1 text-xs font-black text-[#173b2f]">
              {product.jarCount} {product.jarCount === 1 ? "jar" : "jars"}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs font-black text-[#6b6b5f] line-through">
                £{product.compareAtPrice.toFixed(2)}
              </span>
            )}
            {props.savings && (
              <span className="rounded-full bg-[#e5b15a] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#173b2f]">
                {props.savings}
              </span>
            )}
          </div>
        </div>
      </Link>
      {/* Add to cart button */}
      <div className="mt-auto p-6">
        <AddToCartButton
          product={{ id: product.id }}
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4] transition-colors hover:bg-[#102a22]"
        >
          Add to cart
        </AddToCartButton>
      </div>
    </article>
  );
}
