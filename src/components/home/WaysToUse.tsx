import SectionHeading from "@/components/ui/SectionHeading";

const ways = [
  {
    title: "Spread it",
    description: "Slather onto toast, pancakes or rice cakes for a satisfying snack.",
  },
  {
    title: "Blend it",
    description: "Add a spoonful to smoothies or shakes for creamy texture and protein.",
  },
  {
    title: "Stir it",
    description: "Swirl into oats, porridge or yogurt to boost flavour and nutrition.",
  },
  {
    title: "Scoop it",
    description: "Enjoy straight from the jar when you need quick, clean energy.",
  },
] as const;

/**
 * Section illustrating different ways to enjoy FLEX peanut butter. Instead of
 * relying on external icon libraries, we keep the design simple and
 * focus on clear copy. The items are rendered in a responsive grid.
 */
export default function WaysToUse() {
  return (
    <section id="uses" className="bg-[#fff7df] px-6 py-12 md:py-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get creative"
          title={"Ways to enjoy FLEX"}
          subtitle={"Whether you're fuelling a workout or making breakfast, FLEX fits seamlessly into your routine."}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map(({ title, description }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#173b2f]/10"
            >
              <h3 className="text-xl font-black text-[#173b2f]">{title}</h3>
              <p className="mt-2 text-sm font-medium text-[#31574a]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}