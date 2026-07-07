import Image from "next/image";
import Link from "next/link";

export default function QuickBuy() {
  return (
    <section id="shop" className="bg-[#FFFDF8]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <ProductCard
            badge="Best Seller"
            title="FLEX Natural Peanut Butter — Smooth"
            subtitle="510g"
            price="£4.99"
            href="/products/natural-smooth-510g"
          />

          <ProductCard
            badge="Stock Up"
            title="FLEX Natural Smooth 6-Pack"
            subtitle="6 × 510g"
            price="£26.99"
            href="/shop"
            bundle
          />
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <Benefit title="Pure & natural" text="Just 100% roasted peanuts." />
          <Benefit title="No palm oil" text="Simple ingredients, proper flavour." />
          <Benefit title="Made for everyday" text="Toast, oats, shakes and snacks." />
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
    <div className="rounded-[28px] border border-[#4C260F]/15 bg-white p-6 shadow-sm">
      <div className="mb-5 inline-flex rounded-full bg-[#0B864E] px-4 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-white">
        {badge}
      </div>

      <div className="grid items-center gap-6 md:grid-cols-[.9fr_1fr]">
        <div className="relative flex min-h-[240px] items-center justify-center rounded-3xl bg-[#EFDFC7]/45">
          {bundle ? (
            <div className="relative h-[210px] w-[250px]">
              {[0, 1, 2].map((i) => (
                <Image
                  key={i}
                  src="/assets/products/flex-jar.png"
                  alt="FLEX jar"
                  width={150}
                  height={150}
                  className="absolute object-contain drop-shadow-xl"
                  style={{
                    left: `${i * 45}px`,
                    top: `${i === 1 ? 18 : 42}px`,
                    zIndex: i === 1 ? 3 : 2,
                  }}
                />
              ))}
            </div>
          ) : (
            <Image
              src="/assets/products/flex-jar.png"
              alt={title}
              width={205}
              height={205}
              className="max-h-[205px] w-auto object-contain drop-shadow-xl"
            />
          )}
        </div>

        <div>
          <h3 className="text-2xl font-black leading-tight text-[#0f1720]">
            {title}
          </h3>
          <p className="mt-2 text-[#4C260F]/70">{subtitle}</p>
          <p className="mt-5 text-4xl font-black text-[#0f1720]">{price}</p>

          <Link
            href={href}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0B864E] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#096b3f]"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

function Benefit({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[22px] border border-[#4C260F]/10 bg-[#FFF4DF] px-6 py-5">
      <h3 className="font-black text-[#4C260F]">{title}</h3>
      <p className="mt-1 text-sm text-[#4C260F]/70">{text}</p>
    </div>
  );
}
