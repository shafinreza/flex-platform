const rows = [
  ["Energy", "2551 kJ / 615 kcal", "816 kJ / 197 kcal", "10.0%"],
  ["Protein", "25.7g", "8.2g", "14.8%"],
  ["Carbohydrate", "16.1g", "5.2g", "—"],
  ["Total Sugars", "5.3g", "1.7g", "—"],
  ["Added Sugars", "—", "—", "0.0%"],
  ["Dietary Fibre", "7.5g", "2.4g", "9.6%"],
  ["Total Fat", "49.6g", "15.9g", "23.7%"],
  ["Saturated Fat", "7.6g", "2.4g", "10.9%"],
  ["Trans Fat", "0.0g", "0.0g", "0.0%"],
  ["Cholesterol", "0.0g", "0.0g", "—"],
  ["Sodium", "70mg", "22.4mg", "1.1%"],
];

export default function NutritionTable() {
  return (
    <section className="bg-[#fffaf0] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
            Nutrition & Benefits
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[#173b2f] md:text-6xl">
            Clean nutrition. Real results.
          </h2>
          <p className="mt-3 text-lg text-[#31574a]">
            Made with 100% roasted peanuts. Nothing else.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-6 shadow-sm">
            <h3 className="mb-4 text-2xl font-black text-[#173b2f]">
              Nutrition information
            </h3>

            <div className="mb-4 flex flex-wrap gap-3 text-sm font-black">
              <span className="rounded-lg bg-[#173b2f] px-4 py-2 text-[#f8ead4]">
                Serving size: 32g
              </span>
              <span className="rounded-lg bg-[#f6ead8] px-4 py-2 text-[#173b2f]">
                Servings per jar: 16
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#173b2f]/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#173b2f] text-[#f8ead4]">
                  <tr>
                    <th className="p-3">Typical values</th>
                    <th className="p-3">Per 100g</th>
                    <th className="p-3">Per 32g</th>
                    <th className="p-3">% RDA</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([label, per100g, serving, rda]) => (
                    <tr key={label} className="border-t border-[#173b2f]/10">
                      <td className="p-3 font-black">{label}</td>
                      <td className="p-3">{per100g}</td>
                      <td className="p-3">{serving}</td>
                      <td className="p-3">{rda}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs font-bold text-[#31574a]">
              % RDA values per serving calculated on the basis of 2000 kcal energy.
            </p>
          </div>

          <div className="rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-6 shadow-sm">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#6f855f]">
              Why you’ll love it
            </p>
            <h3 className="text-4xl font-black tracking-[-0.05em] text-[#173b2f] md:text-5xl">
              Better fuel. Better you.
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-[#31574a]">
              Clean ingredients, smooth texture and natural energy without
              added sugar or palm oil.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Protein packed", "25.7g protein per 100g."],
                ["Clean ingredients", "100% roasted peanuts."],
                ["Smooth texture", "No palm oil or added sugar."],
                ["Sustained energy", "Healthy fats and plant protein."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#173b2f]/10 bg-[#fffaf0] p-5"
                >
                  <h4 className="text-xl font-black text-[#173b2f]">{title}</h4>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-[#31574a]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-[#173b2f]/10 bg-[#fff7e8] p-5 text-center text-sm font-black text-[#173b2f]">
          Ingredients: Roasted Peanuts (100%).
        </div>
      </div>
    </section>
  );
}
