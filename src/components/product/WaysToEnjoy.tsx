const ways = [
  ["Overnight Oats", "Stir into oats for an easy high-protein breakfast."],
  ["Banana Smoothie", "Blend with banana, milk and protein for a quick shake."],
  ["Toast & Bagels", "Spread thick for simple everyday fuel."],
  ["Protein Pancakes", "Add on top of pancakes for extra flavour and protein."],
];

export default function WaysToEnjoy() {
  return (
    <section className="bg-[#eef1ec] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#6f855f]">
          Recipes
        </p>

        <h2 className="mb-10 text-4xl font-black md:text-5xl">
          Ways to enjoy FLEX
        </h2>

        <div className="grid gap-4 md:grid-cols-4">
          {ways.map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
