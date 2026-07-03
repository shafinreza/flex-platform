const recipes = [
  {
    title: "Peanut Butter Overnight Oats",
    text: "A simple high-protein breakfast for busy mornings.",
  },
  {
    title: "Banana Peanut Butter Toast",
    text: "Quick fuel before training, work or school.",
  },
  {
    title: "Peanut Butter Smoothie",
    text: "Creamy, filling and made for active days.",
  },
];

export default function RecipesPreview() {
  return (
    <section className="bg-white px-6 py-20 text-[#4C260F]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[#0B864E]">
            Recipes
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            More ways to FLEX.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {recipes.map((recipe) => (
            <article
              key={recipe.title}
              className="rounded-[28px] border-2 border-[#4C260F] bg-[#EFDFC7] p-6 shadow-[6px_6px_0_#4C260F]"
            >
              <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-3xl bg-white text-5xl">
                🥜
              </div>

              <h3 className="mb-3 text-2xl font-black">{recipe.title}</h3>
              <p className="font-semibold text-[#4C260F]/75">{recipe.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}