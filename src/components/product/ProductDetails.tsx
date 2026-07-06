export default function ProductDetails() {
  return (
    <section className="bg-[#f4f6f3] px-6 pb-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#6f855f]">
            Ingredients
          </p>

          <h2 className="text-4xl font-black">Simple. Clean. Powerful.</h2>

          <p className="mt-5 leading-8 text-slate-600">
            FLEX Natural Smooth is made with roasted peanuts only. No palm oil,
            no added sugar, no artificial sweeteners, no fillers.
          </p>

          <ul className="mt-6 space-y-3 font-semibold">
            <li>✓ Roasted peanuts 100%</li>
            <li>✓ Contains peanuts</li>
            <li>✓ May contain traces of other nuts</li>
            <li>✓ Stir before use if natural oil separation occurs</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#6f855f]">
            Nutrition
          </p>

          <h2 className="text-4xl font-black">Built for everyday fuel.</h2>

          <div className="mt-6 divide-y divide-black/10">
            <Row label="Protein per jar" value="132g approx." />
            <Row label="Texture" value="Smooth" />
            <Row label="Size" value="510g" />
            <Row label="Added sugar" value="0g" />
            <Row label="Palm oil" value="None" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-6 py-4">
      <span className="text-slate-500">{label}</span>
      <span className="text-right font-black">{value}</span>
    </div>
  );
}
