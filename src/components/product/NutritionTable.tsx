const rows = [
  ["Energy", "2551 kJ / 615 kcal", "816 kJ / 197 kcal"],
  ["Protein", "25.7g", "8.2g"],
  ["Carbohydrate", "16.1g", "5.2g"],
  ["Total Sugars", "5.3g", "1.7g"],
  ["Added Sugars", "—", "—"],
  ["Dietary Fibre", "7.5g", "2.4g"],
  ["Total Fat", "49.6g", "15.9g"],
  ["Saturated Fat", "7.6g", "2.4g"],
  ["Trans Fat", "0.0g", "0.0g"],
  ["Cholesterol", "0.0g", "0.0g"],
  ["Sodium", "70mg", "22.4mg"],
];

export default function NutritionTable() {
  return (
    <section className="bg-[#f6ead8] px-6 py-10 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
            Nutrition & Ingredients
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#173b2f] md:text-5xl">
            Clean nutrition. Nothing artificial.
          </h2>
          <p className="mt-3 text-lg text-[#31574a]">
            Verified from the FLEX nutrition label.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-5 shadow-sm">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-black text-[#173b2f]">
                Typical values
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-black">
                <span className="rounded-full bg-[#173b2f] px-3 py-2 text-[#f8ead4]">
                  Serving: 32g
                </span>
                <span className="rounded-full bg-[#fffaf0] px-3 py-2 text-[#173b2f]">
                  16 servings / jar
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#173b2f]/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#173b2f] text-[#f8ead4]">
                  <tr>
                    <th className="p-3">Typical values</th>
                    <th className="p-3">Per 100g</th>
                    <th className="p-3">Per 32g</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([label, per100g, serving]) => (
                    <tr key={label} className="border-t border-[#173b2f]/10">
                      <td className="p-3 font-black">{label}</td>
                      <td className="p-3">{per100g}</td>
                      <td className="p-3">{serving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
              Ingredients
            </p>
            <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] text-[#173b2f]">
              Roasted Peanuts. That is it.
            </h3>
            <p className="mt-4 text-lg font-medium leading-relaxed text-[#31574a]">
              FLEX is made with roasted peanuts only — no palm oil, no added
              sugar, no fillers and no artificial sweeteners.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "100% roasted peanuts",
                "No added sugar",
                "No palm oil",
                "No artificial sweeteners",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#fffaf0] px-5 py-4 text-sm font-black"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
