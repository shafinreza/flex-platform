export default function WhyFlex() {
  return (
    <section id="story" className="bg-[#f4f6f3] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
            Why FLEX
          </p>

          <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#0f1720] md:text-7xl">
            Simple ingredients.
            <br />
            Proper peanut butter.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            FLEX is made for everyday food moments — toast, oats, shakes,
            snacks, recipes and straight-from-the-jar spoonfuls.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card title="No palm oil" text="Just proper roasted peanut flavour." />
            <Card title="No added sugar" text="Naturally rich, smooth and satisfying." />
            <Card title="Everyday fuel" text="Breakfast, snacks, smoothies and more." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-[#f4f6f3] p-6">
      <h3 className="text-xl font-black text-[#0f1720]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
