import Image from "next/image";
import Link from "next/link";

export default function QuickBuy() {
  return (
    <section id="shop" className="bg-[#FFFDF8]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_1fr_.75fr]">
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

        <div className="space-y-4">
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
    <div className="rounded-[28px] border border-[#4C260F]/15 bg-white p-5 shadow-sm">
      <div className="mb-4 inline-flex rounded-full bg-[#0B864E] px-4 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-white">
        {badge}
      </div>

      <div className="grid items-center gap-5 md:grid-cols-[.9fr_1fr]">
        <div className="relative flex min-h-[230px] items-center justify-center rounded-3xl bg-[#EFDFC7]/45">
          {bundle ? (
            <div className="relative h-[210px] w-[230px]">
              {[0, 1, 2].map((i) => (
                <Image
                  key={i}
                  src="/assets/products/flex-jar.png"
                  alt="FLEX jar"
                  width={155}
                  height={155}
                  className="absolute object-contain drop-shadow-xl"
                  style={{
                    left: `${i * 42}px`,
                    top: `${i === 1 ? 18 : 38}px`,
                    zIndex: i === 1 ? 3 : 2,
                  }}
                />
              ))}
            </div>
          ) : (
            <Image
              src="/assets/products/flex-jar.png"
              alt={title}
              width={210}
              height={210}
              className="max-h-[210px] w-auto object-contain drop-shadow-xl"
            />
          )}
        </div>

        <div>
          <h3 className="text-xl font-black leading-tight text-[#0f1720]">
            {title}
          </h3>
          <p className="mt-2 text-[#4C260F]/70">{subtitle}</p>
          <p className="mt-5 text-3xl font-black text-[#0f1720]">{price}</p>

          <Link
            href={href}
            className="mt-6 inline-flex w-full justify-center rounded-full bg-[#0B864E] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#096b3f]"
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
    <div className="rounded-[24px] border border-[#4C260F]/10 bg-[#FFF4DF] p-6">
      <h3 className="font-black text-[#4C260F]">{title}</h3>
      <p className="mt-1 text-sm text-[#4C260F]/70">{text}</p>
    </div>
  );
}
