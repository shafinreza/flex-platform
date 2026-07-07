const features = [
  ["100% PEANUTS", "Roasted peanuts only. Nothing else."],
  ["SUSTAINED ENERGY", "Clean fats + protein for active days."],
  ["SHOP FLEX", "Order directly from our website."],
  ["NO ARTIFICIALS", "No palm oil. No added sugar. No fillers."],
];

export default function TrustBar() {
  return (
    <section className="border-y border-black/10 bg-white px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 py-4 md:grid-cols-4">
        {features.map(([title, text]) => (
          <div
            key={title}
            className="rounded-xl border border-black/10 bg-white p-4"
          >
            <p className="mb-1 text-xs font-black uppercase tracking-[0.14em]">
              {title}
            </p>
            <p className="text-sm text-[#5c6773]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
