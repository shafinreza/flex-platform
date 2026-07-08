type ProductJarShowcaseProps = {
  jarCount?: number;
  label?: string;
  className?: string;
};

export function ProductJarShowcase({
  jarCount = 1,
  label = "FLEX",
  className = "",
}: ProductJarShowcaseProps) {
  const visibleJars = Math.min(jarCount, 6);

  return (
    <div className={`sf-jar-showcase ${className}`} aria-label={`${jarCount} jar pack`}>
      {Array.from({ length: visibleJars }).map((_, index) => (
        <div className="sf-jar" key={index}>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
