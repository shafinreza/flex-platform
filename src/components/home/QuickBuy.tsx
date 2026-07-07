import Image from "next/image";
import Link from "next/link";

export default function QuickBuy() {
  return (
    <section id="products" className="bg-[#f4f6f3] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display font-display text-[58px] leading-none tracking-[-0.02em]">
          OUR PRODUCTS
        </h2>

        <p className="mt-2 max-w-2xl text-[#5c6773]">
          One jar today. More products coming soon.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ProductCard
            title="Natural Smooth"
            subtitle="510g"
            price="£4.99"
            href="/products/natural-smooth-510g"
          />

          <ProductCard
            title="Natural Smooth 6 Pack"
            subtitle="6 × 510g"
            price="£26.99"
            href="/shop"
            bundle
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  title,
  subtitle,
  price,
  href,
  bundle = false,
}: {
  title: string;
  subtitle: string;
  price: string;
  href: string;
  bundle?: boolean;
}) {
  return (
    <article className="rounded-[18px] border border-black/10 bg-white p-6">
      <div className="grid items-center gap-5 md:grid-cols-[.9fr_1fr]">
        <div className="flex justify-center rounded-2xl bg-[#f7f9f6] p-6">
          {bundle ? (
            <div className="relative h-[220px] w-[230px]">
              {[0, 1, 2].map((i) => (
                <Image
                  key={i}
                  src="/assets/products/flex-jar.png"
                  alt="FLEX jar"
                  width={150}
                  height={150}
                  className="absolute object-contain drop-shadow-xl"
                  style={{
                    left: `${i * 40}px`,
                    top: `${i === 1 ? 15 : 40}px`,
                    zIndex: i === 1 ? 2 : 1,
                  }}
                />
              ))}
            </div>
          ) : (
            <Image
              src="/assets/products/flex-jar.png"
              alt={title}
              width={240}
              height={240}
              className="max-h-[230px] w-auto object-contain drop-shadow-xl"
            />
          )}
        </div>

        <div>
          <h3 className="text-2xl font-black">{title}</h3>

          <p className="mt-2 text-[#5c6773]">{subtitle}</p>

          <p className="mt-5 text-4xl font-black">{price}</p>

          <Link
            href={href}
            className="mt-6 inline-flex rounded-xl bg-[#6f855f] px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#0B864E]"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </article>
  );
}
