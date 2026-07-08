type PriceProps = {
  price: number;
  compareAtPrice?: number;
  size?: "sm" | "md" | "lg";
};

export function Price({ price, compareAtPrice, size = "md" }: PriceProps) {
  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);

  const formattedCompareAt = compareAtPrice
    ? new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(compareAtPrice)
    : null;

  return (
    <div className={`sf-price sf-price-${size}`}>
      <strong>{formattedPrice}</strong>
      {formattedCompareAt ? <span>{formattedCompareAt}</span> : null}
    </div>
  );
}
