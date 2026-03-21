import { getFeaturedProducts } from "@/services/product.service";

import FeaturedProducts from "@/components/products/FeaturedProducts";

export default async function Home() {
  const featured = await getFeaturedProducts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* Hero */}
      <h1 className="text-3xl font-bold mb-8">
        Fresh Fruits and Vegetables (& Nuts)
      </h1>

      {/* Featured */}
      <FeaturedProducts products={featured} />
      
    </div>
  );
}
