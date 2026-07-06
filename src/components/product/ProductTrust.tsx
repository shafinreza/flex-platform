import { Leaf, Lock, PackageCheck, Truck } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "100% Peanuts",
    text: "Made with roasted peanuts only.",
  },
  {
    icon: Truck,
    title: "UK Delivery",
    text: "Packed safely and shipped from the UK.",
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    text: "Payments protected by Stripe.",
  },
  {
    icon: PackageCheck,
    title: "No Fillers",
    text: "No palm oil. No added sugar.",
  },
];

export default function ProductTrust() {
  return (
    <section className="bg-[#f4f6f3] px-6 pb-16">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <Icon className="mb-4 text-[#6f855f]" size={28} />
              <h3 className="font-black">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
