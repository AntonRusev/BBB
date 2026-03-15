"use client"

import { useRecentlyViewedStore } from "@/store/recentlyViewedStore"
import ProductCard from "./ProductCard"

export default function RecentlyViewed() {
    const products = useRecentlyViewedStore((s) => s.products)

    // If there are no recently viewed products show nothing
    if (products.length === 0) return null;

    return (
        <section className="mt-12">

            <h2 className="text-xl font-semibold mb-4">
                Recently Viewed
            </h2>

            {/* THe number of columns in the grid should be equal to the number of products tracked/shown (the value of the MAX_ITEMS variable in the RecentlyViewed store ) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </section>
    );
}