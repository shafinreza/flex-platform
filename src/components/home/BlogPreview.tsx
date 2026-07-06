const posts = [
  ["How to use peanut butter for performance", "Pre-workout, post-workout, and daily fuel — without the junk."],
  ["Why we keep it 100% peanuts", "No fillers, no palm oil — just the ingredient that matters."],
  ["Launch updates", "Where to buy, release timing, and what’s coming next."],
];

export default function BlogPreview() {
  return (
    <section id="blog" className="bg-[#eef1ec] px-5 py-[72px]">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="mb-3 text-[62px] font-black leading-[.9] tracking-[-0.04em]">
          BLOG
        </h2>

        <p className="mb-7 max-w-[62ch] text-[#5c6773]">
          Training insights, nutrition, and product updates.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {posts.map(([title, text]) => (
            <article
              key={title}
              className="rounded-2xl border border-[rgba(15,23,32,.10)] bg-white p-6"
            >
              <h3 className="mb-3 text-xl font-black">{title}</h3>
              <p className="text-[#5c6773]">{text}</p>
              <p className="mt-5 font-black">Read more →</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
