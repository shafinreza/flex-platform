const reviews = [
  {
    name: "Amazon Customer",
    text: "Smooth texture, clean taste and great on toast.",
  },
  {
    name: "Verified Buyer",
    text: "Love that it has no palm oil and no added sugar.",
  },
  {
    name: "FLEX Customer",
    text: "Perfect for oats, smoothies and post-gym snacks.",
  },
];

export default function ProductReviews() {
  return (
    <section className="bg-[#f4f6f3] px-6 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#6f855f]">
              Reviews
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Loved by FLEX customers
            </h2>
          </div>

          <p className="font-bold text-[#6f855f]">★★★★★ 4.3 Amazon Rating</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-black/10 bg-white p-6"
            >
              <div className="mb-4 text-[#6f855f]">★★★★★</div>
              <p className="leading-7 text-slate-600">“{review.text}”</p>
              <p className="mt-5 font-black">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
