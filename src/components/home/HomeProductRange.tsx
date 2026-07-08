import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";

const productPage = "/products/natural-smooth-510g";

const products = [
  {
    id: "natural-smooth-510g",
    title: "Natural Smooth Peanut Butter",
    subtitle: "Single 510g jar",
    text: "100% roasted peanuts. Smooth texture, rich roasted taste, no palm oil and no added sugar.",
    price: "£4.99",
    badge: "Most Popular",
    image: "/assets/products/natural-smooth-510g.png",
  },
  {
    id: "natural-smooth-6-pack",
    title: "Natural Smooth Peanut Butter — 6 Pack",
    subtitle: "6 × 510g jars",
    text: "Best value bundle for families, gym bags, oats, smoothies and everyday snacking. Includes free UK delivery.",
    price: "£26.99",
    badge: "Best Value",
    image: "/assets/products/natural-smooth-510g.png",
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
          <p className="mt-3 text-lg text-[#31574a]">
            Choose a single jar or stock up with our best value 6 pack.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="relative flex min-h-[540px] flex-col rounded-[2rem] border border-[#173b2f]/10 bg-[#fff7e8] p-6 shadow-sm"
            >
              <span className="absolute left-6 top-6 rounded-2xl bg-[#6f855f] px-3 py-2 text-xs font-black uppercase tracking-wide text-white">
                {product.badge}
              </span>

              <div className="grid flex-1 place-items-center rounded-[1.6rem] bg-[#f6ead8] p-8">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={420}
                  height={420}
                  className="h-64 w-auto object-contain mix-blend-multiply"
                />
              </div>

              <div className="pt-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#6f855f]">
                  {product.subtitle}
                </p>
                <h3 className="mt-2 text-3xl font-black leading-tight tracking-[-0.05em] text-[#173b2f]">
                  {product.title}
                </h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-[#31574a]">
                  {product.text}
                </p>

                <ul className="mt-4 grid gap-2 text-sm font-black text-[#173b2f]">
                  <li>✓ 100% roasted peanuts</li>
                  <li>✓ No palm oil</li>
                  <li>✓ No added sugar</li>
                </ul>

                <p className="mt-5 text-3xl font-black text-[#173b2f]">
                  {product.price}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <AddToCartButton
                    productId={product.id}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#173b2f] px-6 text-sm font-black text-[#f8ead4] transition hover:bg-[#102a22]"
                  />
                  <Link
                    href={productPage}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#173b2f]/15 px-6 text-sm font-black text-[#173b2f] transition hover:bg-white"
                  >
                    Choose pack size
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
