const benefits = [
  {
    title: "100% Roasted Peanuts",
    text: "Simple ingredients. No unnecessary extras.",
  },
  {
    title: "High Protein",
    text: "A clean pantry staple for active everyday people.",
  },
  {
    title: "No Added Sugar",
    text: "Naturally satisfying without added sugar.",
  },
  {
    title: "No Palm Oil",
    text: "Smooth texture without palm oil or fillers.",
  },
];

export default function WhyFlex() {
  return (
    <section className="bg-[#EFDFC7] px-6 py-20 text-[#4C260F]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0B864E]">
            Why FLEX
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Better ingredients. Better everyday fuel.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border-2 border-[#4C260F] bg-white p-6 shadow-[6px_6px_0_#4C260F]"
            >
              <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
              <p className="font-semibold text-[#4C260F]/75">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}