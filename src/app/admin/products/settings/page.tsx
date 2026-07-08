import Link from "next/link";
import { ArrowLeft, ImageIcon, PoundSterling, ShieldCheck } from "lucide-react";

export const dynamic = "force-dynamic";

export default function ProductSettingsPage() {
  return (
    <main className="px-5 py-6 lg:px-8 lg:py-8">
      <Link
        href="/admin/products"
        className="mb-6 inline-flex items-center gap-2 text-sm font-black text-[#173b2f]"
      >
        <ArrowLeft size={16} />
        Back to products
      </Link>

      <section className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-8 shadow-sm">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#6f855f]">
          Product settings
        </p>

        <h1 className="mt-3 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#173b2f] md:text-6xl">
          Price and image editing is coming next.
        </h1>

        <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-[#31574a]">
          Prices currently power Stripe checkout from code, so we need to move
          product data into one safe source of truth before allowing edits here.
        </p>
      </section>

      <section className="mt-6 grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Editable prices",
            text: "Change single jar, 2 pack, 3 pack and 6 pack prices safely.",
            icon: PoundSterling,
          },
          {
            title: "Editable images",
            text: "Replace product, homepage and gallery images from admin.",
            icon: ImageIcon,
          },
          {
            title: "Checkout safe",
            text: "Stripe checkout must always use the same prices customers see.",
            icon: ShieldCheck,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#173b2f]/10 bg-[#fffaf0] p-6 shadow-sm"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f6ead8]">
                <Icon size={22} />
              </div>
              <h2 className="mt-5 text-2xl font-black tracking-[-0.04em]">
                {item.title}
              </h2>
              <p className="mt-2 text-sm font-bold leading-6 text-[#31574a]">
                {item.text}
              </p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
