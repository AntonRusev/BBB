import { Product } from "@/types/product"
import ProductCard from "./ProductCard"

export default function RelatedProducts({
    products,
    gridColumns
}: {
    products: Product[],
    gridColumns: number
}) {
    if (products.length === 0) return null

    return (
        <section className="mt-12">

            <h2 className="text-xl font-semibold mb-4">
                Customers also bought
            </h2>

            {/* The number of columns in the grid should match the limit of the related products in getRelatedProducts */}
            <div className={`grid grid-cols-2 md:grid-cols-${gridColumns} gap-6`}>
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