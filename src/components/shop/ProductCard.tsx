import Link from "next/link";
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
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-[#fff8ed] shadow-sm ring-1 ring-[#173b2f]/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={product.href} className="block p-5 pb-0">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="rounded-full bg-[#173b2f] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#f8ead4]">
            {product.badge}
          </span>
          <span className="text-xl font-black text-[#173b2f]">
            £{product.price.toFixed(2)}
          </span>
        </div>

        <div className="rounded-[1.5rem] bg-[#f6ead8] p-6">
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto h-64 w-auto object-contain transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mt-5">
          <h2 className="text-2xl font-black leading-tight tracking-tight text-[#173b2f]">
            {product.name}
          </h2>
          <p className="mt-2 text-sm font-bold leading-6 text-[#31574a]">
            {product.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#f6ead8] px-3 py-1 text-xs font-black text-[#173b2f]">
              {product.jarCount} {product.jarCount === 1 ? "jar" : "jars"}
            </span>

            {product.compareAtPrice ? (
              <span className="text-xs font-black text-[#31574a]">
                Was £{product.compareAtPrice.toFixed(2)}
              </span>
            ) : null}

            {props.savings ? (
              <span className="rounded-full bg-[#e5b15a] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#173b2f]">
                {props.savings}
              </span>
            ) : null}
          </div>
        </div>
      </Link>

      <div className="mt-auto p-5">
        <AddToCartButton
          product={{ id: product.id }}
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
        >
          Add to cart
        </AddToCartButton>
      </div>
    </article>
  );
}
