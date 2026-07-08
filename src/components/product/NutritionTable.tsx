/**
 * Nutrition table for FLEX natural peanut butter. Values are per 100g
 * serving and derived from publicly available nutrition data for smooth
 * peanut butter【991989638501754†L45-L63】. Sodium is converted to salt
 * equivalent (sodium x 2.5). If values change in the future, update this
 * file accordingly.
 */
export default function NutritionTable() {
  const rows = [
    { name: "Energy", value: "597 kcal" },
    { name: "Fat", value: "51.1 g" },
    { name: "of which saturates", value: "10.1 g" },
    { name: "Carbohydrate", value: "22.3 g" },
    { name: "of which sugars", value: "10.5 g" },
    { name: "Fibre", value: "4.8 g" },
    { name: "Protein", value: "22.5 g" },
    { name: "Salt", value: "1.1 g" },
  ];
  return (
    <table className="w-full text-left text-sm text-[#31574a]">
      <thead>
        <tr>
          <th className="pb-2 pr-4 font-black text-[#173b2f]">Typical values</th>
          <th className="pb-2 font-black text-[#173b2f]">Per 100g</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name} className="border-t border-[#173b2f]/10">
            <td className="py-2 pr-4 font-medium">{row.name}</td>
            <td className="py-2 font-semibold">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}