import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { getStoreProducts } from "@/lib/product-store";

const productPage = "/products/natural-smooth-510g";

const productMeta = {
  "natural-smooth-510g": {
    title: "Natural Smooth",
    subtitle: "Single 510g Jar",
    text: "100% roasted peanuts with smooth texture and rich roasted taste.",
    badge: "Most Popular",
    bullets: ["No palm oil", "No added sugar", "High protein"],
  },
  "natural-smooth-6-pack": {
    title: "Natural Smooth 6 Pack",
    subtitle: "6 × 510g Jars",
    text: "Best value bundle for families, oats, smoothies and everyday snacking.",
    badge: "Best Value",
    bullets: ["Free UK delivery", "Best value", "6 jars included"],
  },
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);
}

export default async function HomeProductRange() {
  const storeProducts = await getStoreProducts();

  const products = ["natural-smooth-510g", "natural-smooth-6-pack"]
    .map((id) => {
      const product = storeProducts.find((item) => item.id === id);
      const meta = productMeta[id as keyof typeof productMeta];

      if (!product || !meta) return null;

      return {
        ...product,
        ...meta,
      };
    })
    .filter(Boolean) as Array<{
      id: string;
      name: string;
      price: number;
      image: string;
      title: string;
      subtitle: string;
      text: string;
      badge: string;
      bullets: string[];
    }>;

  return (
    <section id="products" className="bg-[#fffaf0] px-6 py-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-7 max-w-2xl text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
            Our Range
          </p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-[#173b2f] md:text-5xl">
            Simple. Natural. Delicious.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="group grid min-h-[350px] gap-5 rounded-[2rem] border border-[#173b2f]/10 bg-[#fff7e8] p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[240px_1fr]"
            >
              <div className="relative flex items-center justify-center rounded-[1.6rem] bg-[#f6ead8] p-3">
                <span className="absolute left-4 top-4 rounded-full bg-[#6f855f] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white">
                  {product.badge}
                </span>

                <Image
                  src={product.image}
                  alt={product.title}
                  width={430}
                  height={430}
                  className="h-72 w-auto object-contain mix-blend-multiply transition duration-200 group-hover:scale-105"
                />
              </div>

              <div className="flex min-w-0 flex-col justify-center py-2">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6f855f]">
                  {product.subtitle}
                </p>

                <h3 className="mt-2 text-3xl font-black leading-none tracking-[-0.05em] text-[#173b2f]">
                  {product.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm font-black">
                  <span className="text-[#e5b15a]">★★★★★</span>
                  <span className="text-[#173b2f]">4.5 star reviews</span>
                </div>

                <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-[#31574a]">
                  {product.text}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {product.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="rounded-full bg-[#fffaf0] px-3 py-2 text-[11px] font-black uppercase tracking-wide text-[#173b2f]"
                    >
                      ✓ {bullet}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-3xl font-black tracking-[-0.05em] text-[#173b2f]">
                  {formatPrice(product.price)}
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <AddToCartButton
                    productId={product.id}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-[#173b2f] px-5 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
                  />

                  <Link
                    href={productPage}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[#173b2f]/15 px-5 text-sm font-black text-[#173b2f] transition hover:bg-white"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
