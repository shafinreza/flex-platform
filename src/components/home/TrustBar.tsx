export default function TrustBar() {
  const features = [
    ["100% PEANUTS", "Roasted peanuts only. Nothing else."],
    ["SUSTAINED ENERGY", "Clean fats + protein for long sessions."],
    ["WHERE TO BUY", "Available direct from FLEX."],
    ["NO ARTIFICIALS", "No palm oil. No added sugar. No fillers."],
  ];

  return (
    <section id="where-to-buy" className="border-y border-[rgba(15,23,32,.12)] bg-white px-5">
      <div className="mx-auto grid max-w-[1120px] gap-4 py-4 md:grid-cols-4">
        {features.map(([title, text]) => (
          <div
            key={title}
            className="rounded-xl border border-[rgba(15,23,32,.10)] bg-white p-4"
          >
            <div className="mb-1 text-xs font-extrabold uppercase tracking-[0.14em]">
              {title}
            </div>
            <div className="text-[13px] text-[#5c6773]">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
