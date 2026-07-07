import Image from "next/image";
import Link from "next/link";

export default function QuickBuy() {
  return (
    <section id="shop" className="bg-[#FFFDF8]">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <ProductCard
            badge="Best Seller"
            title="FLEX Natural Peanut Butter"
            subtitle="Smooth · 510g"
            price="£4.99"
            href="/products/natural-smooth-510g"
          />

          <ProductCard
            badge="Stock Up"
            title="FLEX Smooth 6-Pack"
            subtitle="6 × 510g jars"
            price="£26.99"
            href="/shop"
            bundle
          />
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <Benefit title="Pure & natural" text="Made with 100% roasted peanuts." />
          <Benefit title="No palm oil" text="Simple ingredients. Proper flavour." />
          <Benefit title="Everyday fuel" text="Toast, oats, shakes and snacks." />
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  badge,
  title,
  subtitle,
  price,
  href,
  bundle = false,
}: {
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  href: string;
  bundle?: boolean;
}) {
  return (
    <article className="rounded-[30px] border border-[#4C260F]/15 bg-white p-6 shadow-sm">
      <div className="mb-5 inline-flex rounded-full bg-[#EFB236] px-4 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#4C260F]">
        {badge}
      </div>

      <div className="grid items-center gap-6 md:grid-cols-[.9fr_1fr]">
        <div className="relative flex min-h-[235px] items-center justify-center rounded-[26px] bg-[#EFDFC7]/55">
          {bundle ? (
            <div className="relative h-[210px] w-[250px]">
              {[0, 1, 2].map((i) => (
                <Image
                  key={i}
                  src="/assets/products/flex-jar.png"
                  alt="FLEX jar"
                  width={145}
                  height={145}
                  className="absolute object-contain drop-shadow-xl"
                  style={{
                    left: `${i * 45}px`,
                    top: `${i === 1 ? 16 : 42}px`,
                    zIndex: i === 1 ? 3 : 2,
                  }}
                />
              ))}
            </div>
          ) : (
            <Image
              src="/assets/products/flex-jar.png"
              alt={title}
              width={200}
              height={200}
              className="max-h-[200px] w-auto object-contain drop-shadow-xl"
            />
          )}
        </div>

        <div>
          <h3 className="text-2xl font-black leading-tight tracking-[-0.04em] text-[#0f1720]">
            {title}
          </h3>

          <p className="mt-2 font-bold text-[#4C260F]/65">{subtitle}</p>

          <p className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#4C260F]">
            {price}
          </p>

          <Link
            href={href}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0B864E] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#096b3f]"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </article>
  );
}

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#4C260F]/10 bg-[#FFF4DF] px-6 py-5">
      <h3 className="font-black text-[#4C260F]">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-[#4C260F]/70">{text}</p>
    </div>
  );
}
