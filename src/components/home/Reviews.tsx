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

export default function Reviews() {
  return (
    <section className="bg-[#EFDFC7] px-6 py-20 text-[#4C260F]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0B864E]">
            Reviews
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            Loved by people who move.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[28px] border-2 border-[#4C260F] bg-white p-6 shadow-[6px_6px_0_#4C260F]"
            >
              <div className="mb-4 text-xl text-[#EFB236]">★★★★★</div>
              <p className="mb-5 text-lg font-semibold">“{review.text}”</p>
              <p className="font-black text-[#0B864E]">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}