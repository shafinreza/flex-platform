import FlexButton from "@/components/ui/FlexButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ProductCardProps = {
  badge?: string;
  title: string;
  subtitle: string;
  price: string;
  savings?: string;
  variant?: "single" | "bundle";
};

export default function ProductCard({
  badge,
  title,
  subtitle,
  price,
  savings,
  variant = "single",
}: ProductCardProps) {
  const isBundle = variant === "bundle";

  return (
    <Card
      className={`group overflow-hidden rounded-[36px] border-2 border-[#4C260F] transition duration-300 hover:-translate-y-1 ${
        isBundle ? "bg-[#F5E7C8]" : "bg-white"
      } shadow-[10px_10px_0_#4C260F] hover:shadow-[6px_6px_0_#4C260F]`}
    >
      <CardContent className="grid gap-6 p-6 md:grid-cols-[1fr_1.2fr] md:p-8">
        <div className="flex min-h-[220px] items-center justify-center rounded-[28px] bg-[#EFDFC7] p-6">
          <div className="text-center">
            <div className="text-7xl">🥜</div>
            <p className="mt-3 text-sm font-black uppercase tracking-wide text-[#4C260F]/70">
              Product Image
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          {badge && (
            <Badge
              className={`mb-4 w-fit rounded-full px-4 py-1 text-xs font-black uppercase ${
                isBundle ? "bg-[#EF6838]" : "bg-[#0B864E]"
              } text-white`}
            >
              {badge}
            </Badge>
          )}

          <h3 className="text-3xl font-black leading-tight text-[#4C260F] md:text-4xl">
            {title}
          </h3>

          <p className="mt-3 font-semibold text-[#4C260F]/75">{subtitle}</p>

          {savings && (
            <p className="mt-4 w-fit rounded-full bg-white px-4 py-2 text-sm font-black text-[#EF6838]">
              {savings}
            </p>
          )}

          <div className="mt-5 text-5xl font-black text-[#0B864E]">
            {price}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-xs font-black uppercase tracking-wide text-[#4C260F]/70">
            <span>100% Peanuts</span>
            <span>•</span>
            <span>No Palm Oil</span>
            <span>•</span>
            <span>No Added Sugar</span>
          </div>

          <FlexButton className="mt-6 w-full">Add to Cart</FlexButton>
        </div>
      </CardContent>
    </Card>
  );
}