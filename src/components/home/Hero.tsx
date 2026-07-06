import Image from "next/image";
import Link from "next/link";
import FlexButton from "@/components/ui/FlexButton";

export default function Hero() {
  return (
    <section className="bg-[radial-gradient(900px_520px_at_30%_40%,rgba(255,255,255,.55),rgba(255,255,255,0)),linear-gradient(0deg,rgba(111,133,95,.12),rgba(111,133,95,.12))] px-5 py-16">
      <div className="mx-auto grid max-w-[1120px] items-center gap-10 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-3 text-sm text-[#0f1720]/80">
            High performance nutrition
          </div>

          <h1 className="font-['Arial'] text-[74px] font-black leading-[.86] tracking-[-0.05em] text-white drop-shadow-md md:text-[92px]">
            FLEX YOUR
            <br />
            LIMITS
          </h1>

          <p className="mt-4 max-w-xl text-base text-[#0f1720]/90">
            Clean, performance-driven nutrition for people who grind.{" "}
            <strong>Premium ingredients.</strong> No fillers. Just fuel.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/shop">
              <FlexButton>Shop Now</FlexButton>
            </Link>

            <Link href="#story">
              <FlexButton variant="ghost">Our story →</FlexButton>
            </Link>
          </div>

          <p className="mt-4 text-xs text-[#0f1720]/65">
            More products coming. Same standards.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid aspect-square w-full max-w-[380px] place-items-center rounded-[18px] bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,.10)]">
            <Image
              src="/assets/products/natural-smooth-510g.png"
              alt="FLEX Natural Peanut Butter"
              width={520}
              height={520}
              priority
              className="h-full w-full object-contain drop-shadow-2xl mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
