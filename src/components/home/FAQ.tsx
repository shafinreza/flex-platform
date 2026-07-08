const faqs = [
  ["Is FLEX peanut butter vegan?", "Yes — it’s made from roasted peanuts only."],
  ["Where can I purchase FLEX?", "You can now buy directly through this website. Amazon UK is also available."],
  ["What makes FLEX different?", "Clean formulation: no palm oil, no added sugar, no fillers. Built for performance."],
  ["Does FLEX contain artificial sweeteners?", "No. No artificial sweeteners, no syrups, no fillers."],
];

import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#fff8ed] px-6 py-12 md:py-14">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Questions"
          title={"Frequently asked questions"}
          subtitle={"If you have more questions feel free to reach out to our team."}
        />
        <div className="mt-10 space-y-4">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="rounded-2xl border border-[#173b2f]/10 bg-white p-5"
            >
              <summary className="cursor-pointer font-black text-[#173b2f]">
                {q}
              </summary>
              <p className="mt-3 text-[#31574a]">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
