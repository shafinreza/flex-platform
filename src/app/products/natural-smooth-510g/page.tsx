import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTrust from "@/components/product/ProductTrust";
import ProductDetails from "@/components/product/ProductDetails";
import ProductFAQ from "@/components/product/ProductFAQ";
import WaysToEnjoy from "@/components/product/WaysToEnjoy";
import ProductReviews from "@/components/product/ProductReviews";
import StickyAddToCart from "@/components/product/StickyAddToCart";
import { featuredVariant } from "@/data/products";

export default function ProductPage() {
  const images = [featuredVariant.image];

  return (
    <>
      <main className="bg-[#f4f6f3] py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <ProductGallery images={images} alt={featuredVariant.name} />
          <ProductInfo />
        </div>
      </main>

      <ProductTrust />
      <ProductDetails />
      <WaysToEnjoy />
      <ProductReviews />
      <ProductFAQ />
      <StickyAddToCart />
    </>
  );
}
