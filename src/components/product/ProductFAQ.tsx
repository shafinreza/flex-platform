export default function ProductFAQ() {
  const faqs = [
    {
      q: "Does FLEX contain palm oil?",
      a: "No. FLEX is made from 100% roasted peanuts with no palm oil and no added sugar.",
    },
    {
      q: "Is FLEX suitable for vegetarians and vegans?",
      a: "Yes. FLEX contains only roasted peanuts and is suitable for both vegetarians and vegans.",
    },
    {
      q: "Why is there oil on top?",
      a: "Natural peanut butter separates over time because it contains no stabilisers. Simply stir before use.",
    },
    {
      q: "Where is FLEX made?",
      a: "FLEX is produced to high quality standards using carefully selected roasted peanuts.",
    },
  ];

  return (
    <section className="bg-[#f4f6f3] px-6 pb-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-4xl font-black">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <summary className="cursor-pointer text-lg font-bold">
                {faq.q}
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
