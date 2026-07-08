const reviews = [
  {
    name: "Amazon Customer",
    text: "Smooth, clean and tastes great. Perfect on toast and oats.",
  },
  {
    name: "FLEX Customer",
    text: "Love that it has no added sugar and no palm oil.",
  },
  {
    name: "Verified Buyer",
    text: "Great texture and quality. Will definitely buy again.",
  },
];

import SectionHeading from "@/components/ui/SectionHeading";

export default function Reviews() {
  return (
    <section className="bg-[#f6ead8] px-6 py-12 md:py-14 text-[#173b2f]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Reviews"
          title={"Loved by those who move"}
          subtitle={"Hear what our community says about FLEX"}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-3xl border border-[#173b2f]/10 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-xl text-[#e5b15a]">★★★★★</div>
              <p className="mb-5 text-base font-semibold text-[#31574a]">
                “{review.text}”
              </p>
              <p className="font-black text-[#173b2f]">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}