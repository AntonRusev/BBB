import { getFeaturedProducts } from "@/services/product.service";

import FeaturedProducts from "@/components/products/FeaturedProducts";
import HeroBanner from "@/components/HeroBanner";

export default async function Home() {
  const featured = await getFeaturedProducts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* Hero */}
      <HeroBanner />

      {/* Featured */}
      <FeaturedProducts products={featured} />

    </div>
  );
}
