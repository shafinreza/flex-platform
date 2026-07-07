const features = [
  ["100% ROASTED PEANUTS", "No fillers. No fake stuff."],
  ["NO PALM OIL", "Just proper peanut butter."],
  ["NO ADDED SUGAR", "Naturally rich and smooth."],
  ["MADE FOR ACTIVE DAYS", "Breakfast, snacks, shakes and spoons."],
];

export default function TrustBar() {
  return (
    <section className="border-y border-black/10 bg-[#0f1720] px-5 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 py-5 md:grid-cols-4">
        {features.map(([title, text]) => (
          <div key={title} className="rounded-3xl bg-white/5 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#efb236]">
              {title}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
