import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";

const products = [
  {
    id: "natural-smooth-510g",
    title: "Natural Smooth Peanut Butter",
    text: "Single 510g jar. 100% roasted peanuts, smooth texture.",
    price: "£4.99",
    image: "/assets/products/natural-smooth-510g.png",
    href: "/products/natural-smooth-510g",
    badge: "Most Popular",
  },
  {
    id: "natural-smooth-6-pack",
    title: "Natural Smooth Peanut Butter — 6 Pack",
    text: "Six 510g jars. Best value and free UK delivery.",
    price: "£26.99",
    image: "/assets/products/natural-smooth-510g.png",
    href: "/shop",
    badge: "Best Value",
  },
];

export default function HomeProductRange() {
  return (
    <section id="products" className="bg-[#fffaf0] px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-7 max-w-2xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
            Our Range
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#173b2f] md:text-5xl">
            Simple. Natural. Delicious.
          </h2>
          <p className="mt-3 text-lg text-[#31574a]">
            Two ways to stock your kitchen with FLEX.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="relative grid items-center gap-5 rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-5 shadow-sm sm:grid-cols-[0.85fr_1.15fr]"
            >
              <span className="absolute left-5 top-5 rounded-2xl bg-[#6f855f] px-3 py-2 text-xs font-black uppercase leading-tight tracking-wide text-white">
                {product.badge}
              </span>

              <div className="rounded-3xl bg-[#f6ead8] p-5">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={360}
                  height={360}
                  className="mx-auto h-52 w-auto object-contain mix-blend-multiply"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em] text-[#173b2f]">
                  {product.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#31574a]">
                  {product.text}
                </p>
                <p className="mt-4 text-2xl font-black text-[#173b2f]">
                  {product.price}
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <AddToCartButton
                    productId={product.id}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
                  />
                  <Link
                    href={product.href}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#173b2f]/15 px-6 text-sm font-black text-[#173b2f] transition hover:bg-white"
                  >
                    View product
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
