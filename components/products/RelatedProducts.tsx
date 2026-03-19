import { Product } from "@/types/product"
import ProductCardCompact from "./ProductCardCompact"

export default function RelatedProducts({
    products,
}: {
    products: Product[],
}) {
    if (products.length === 0) return null

    return (
        <section className="mt-12">

            <h2 className="text-xl font-semibold mb-4">
                Related products
            </h2>

            {/* The number of columns in the grid should match the limit of the related products in getRelatedProducts */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6`}>
                {products.map((product) => (
                    <ProductCardCompact
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </section>
    );
}