import { Product } from "@/types/product"
import ProductCard from "./ProductCard"

export default function FeaturedProducts({
    products,
}: {
    products: Product[]
}) {
    if (!products.length) return null

    return (
        <section className="mb-12">

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                    Featured Products
                </h2>

                <span className="text-sm text-gray-500">
                    Handpicked for you
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>

        </section>
    );
}