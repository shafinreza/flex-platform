import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";

const productPage = "/products/natural-smooth-510g";

const products = [
  {
    id: "natural-smooth-510g",
    title: "Natural Smooth",
    subtitle: "Single 510g jar",
    text: "100% roasted peanuts with smooth texture and rich roasted taste.",
    price: "£4.99",
    badge: "Most Popular",
    image: "/assets/products/natural-smooth-510g.png",
    bullets: ["No palm oil", "No added sugar", "High protein"],
  },
  {
    id: "natural-smooth-6-pack",
    title: "Natural Smooth 6 Pack",
    subtitle: "6 × 510g jars",
    text: "Best value bundle for families, oats, smoothies and everyday snacking.",
    price: "£26.99",
    badge: "Best Value",
    image: "/assets/products/natural-smooth-510g.png",
    bullets: ["Free UK delivery", "Best value", "6 jars included"],
  },
];

export default function HomeProductRange() {
  return (
    <section id="products" className="bg-[#fffaf0] px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
            Our Range
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#173b2f] md:text-5xl">
            Simple. Natural. Delicious.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="grid min-h-[380px] gap-5 rounded-[2rem] border border-[#173b2f]/10 bg-[#fff7e8] p-5 shadow-sm sm:grid-cols-[170px_1fr] md:p-6"
            >
              <div className="relative flex items-center justify-center rounded-3xl bg-[#f6ead8] p-4">
                <span className="absolute left-4 top-4 rounded-full bg-[#6f855f] px-3 py-1.5 text-[10px] font-black uppercase tracking-wide text-white">
                  {product.badge}
                </span>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={260}
                  height={260}
                  className="h-52 w-auto object-contain mix-blend-multiply"
                />
              </div>

              <div className="flex min-w-0 flex-col">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6f855f]">
                  {product.subtitle}
                </p>

                <h3 className="mt-2 text-3xl font-black leading-none tracking-[-0.05em] text-[#173b2f]">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-relaxed text-[#31574a]">
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

                <div className="mt-auto pt-5">
                  <p className="text-3xl font-black tracking-[-0.05em] text-[#173b2f]">
                    {product.price}
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
