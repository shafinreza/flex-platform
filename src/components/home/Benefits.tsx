import { Dumbbell, Leaf, Droplets, Flame } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    title: "Protein packed",
    description: "132g of plant protein per jar to power your training.",
    icon: Dumbbell,
  },
  {
    title: "Clean ingredients",
    description: "100% roasted peanuts. No fillers or artificial sweeteners.",
    icon: Leaf,
  },
  {
    title: "Smooth texture",
    description: "No palm oil or added sugar — just smooth peanut butter.",
    icon: Droplets,
  },
  {
    title: "Sustained energy",
    description: "Healthy fats and protein keep you satisfied for longer.",
    icon: Flame,
  },
] as const;

/**
 * Benefits section explaining what makes FLEX peanut butter unique.
 * Uses Lucide icons to illustrate each benefit. This section is meant to
 * be scannable and responsive with a grid layout that adapts to
 * different screen sizes.
 */
export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#fff8ed] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why FLEX"
          title={"Better fuel. Better you."}
          subtitle={
            "Our natural smooth peanut butter delivers clean nutrition and performance without compromise."
          }
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col items-start rounded-3xl bg-white/60 p-6 shadow-sm ring-1 ring-[#173b2f]/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#173b2f] text-[#f8ead4]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-black text-[#173b2f]">
                {title}
              </h3>
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