import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";

type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  href: string;
  badge: string;
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
    id:
      props.variant === "bundle"
        ? "flex-natural-smooth-6-pack"
        : "flex-natural-smooth-510g",
    name: props.title ?? "FLEX Natural Smooth",
    subtitle: props.subtitle ?? "Single 510g jar",
    price: priceToNumber(props.price),
    image: "/flex-jar.png",
    href: "/products/natural-smooth-510g",
    badge: props.badge ?? "Shop FLEX",
  };

  return (
    <article className="group rounded-[2rem] bg-[#fff8ed] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="rounded-full bg-[#173b2f] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#f6ead8]">
          {product.badge}
        </span>

        <span className="text-xl font-black">£{product.price.toFixed(2)}</span>
      </div>

      <Link href={product.href} className="block">
        <div className="rounded-[1.5rem] bg-[#f6ead8] p-6">
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto h-72 w-auto object-contain transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mt-5">
          <h2 className="text-2xl font-black tracking-tight">{product.name}</h2>
          <p className="mt-2 text-sm font-bold text-[#31574a]">
            {product.subtitle}
          </p>

          {props.savings ? (
            <p className="mt-3 inline-flex rounded-full bg-[#e5b15a] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#173b2f]">
              {props.savings}
            </p>
          ) : null}
        </div>
      </Link>

      <div className="mt-5">
        <AddToCartButton
          product={{
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          }}
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f6ead8] transition hover:bg-[#102a22]"
        />
      </div>
    </article>
  );
}
