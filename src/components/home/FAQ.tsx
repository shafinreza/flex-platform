const faqs = [
  ["Is FLEX peanut butter vegan?", "Yes — it’s made from roasted peanuts only."],
  ["Where can I purchase FLEX?", "You can now buy directly through this website. Amazon UK is also available."],
  ["What makes FLEX different?", "Clean formulation: no palm oil, no added sugar, no fillers. Built for performance."],
  ["Does FLEX contain artificial sweeteners?", "No. No artificial sweeteners, no syrups, no fillers."],
];

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-[72px]">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-8 font-display text-[58px] leading-[0.9] tracking-[-0.02em]">
          FAQ
        </h2>

        <div className="max-w-[900px] space-y-3">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="rounded-[14px] border border-[rgba(15,23,32,.10)] bg-white p-5"
            >
              <summary className="cursor-pointer font-black">{q}</summary>
              <p className="mt-3 text-[#5c6773]">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
