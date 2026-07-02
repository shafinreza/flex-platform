type ProductCardProps = {
  title: string;
  price: string;
  description: string;
  badge?: string;
};

export default function ProductCard({
  title,
  price,
  description,
  badge,
}: ProductCardProps) {
  return (
    <div className="rounded-[28px] border-2 border-[#4C260F] bg-white p-8">
      {badge && (
        <div className="mb-4 inline-block rounded-full bg-[#EF6838] px-4 py-1 text-sm font-bold text-white">
          {badge}
        </div>
      )}

      <h2 className="text-3xl font-black text-[#4C260F]">
        {title}
      </h2>

      <p className="mt-3 text-[#4C260F]">
        {description}
      </p>

      <div className="mt-6 text-4xl font-black text-[#0B864E]">
        {price}
      </div>
    </div>
  );
}