import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyFlex() {
  return (
    <section id="story" className="bg-[#f4f6f3] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.8fr]">
        <div className="rounded-[3rem] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#6f855f]">
            Why FLEX
          </p>

          <h2 className="mt-4 max-w-3xl text-6xl font-black leading-[0.9] tracking-[-0.07em] text-[#0f1720] md:text-8xl">
            CLEAN FUEL.
            <br />
            REAL FUN.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            FLEX is built for people who move, train, work, snack, cook and
            want food that feels good without overcomplicating nutrition.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Feature title="Simple" text="Roasted peanuts only." />
            <Feature title="Useful" text="Breakfast, shakes, oats and snacks." />
            <Feature title="Enjoyable" text="Smooth texture. Big peanut flavour." />
          </div>
        </div>

        <div className="rounded-[3rem] bg-[#efdfc7] p-8 shadow-sm md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#4c260f]">
            Your FLEX mission
          </p>

          <div className="mt-8 space-y-4">
            <Mission text="Spread it on toast" />
            <Mission text="Blend it into a protein shake" />
            <Mission text="Swirl it into oats" />
            <Mission text="Eat one spoon straight from the jar" />
          </div>

          <Link
            href="/shop"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#0f1720] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
          >
            Start flexing
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-[#f4f6f3] p-5">
      <p className="text-xl font-black tracking-[-0.04em] text-[#0f1720]">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function Mission({ text }: { text: string }) {
  return (
    <div className="rounded-3xl bg-white/70 px-5 py-4 text-lg font-black tracking-[-0.03em] text-[#0f1720]">
      ✓ {text}
    </div>
  );
}
