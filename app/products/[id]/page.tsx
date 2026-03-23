import { getProductById } from "@/services/product.service"
import { getRelatedProducts } from "@/services/product.service"

import ProductDetails from "@/components/products/ProductDetails"
import RecentlyViewedTracker from "@/components/products/RecentlyViewedTracker"
import RelatedProducts from "@/components/products/RelatedProducts"

type PageParams = {
    params: Promise<{
        id: string
    }>,
}
export default async function ProductItemPage({ params }: PageParams) {
    // Getting the Id of the Product from the params (It is named after the folder - [id])
    const { id } = await params

    const product = await getProductById(id)

    // If such product doesn't exist
    // TODO redirect to a custom Product not found page
    if (!product) return <div>Product not found</div>;

    // Finding related products
    const listOfRelatedProducts = await getRelatedProducts(product);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Client component tracker which updates the RecentlyViewed store */}
            {/* THIS COMPONENT RUNS ONLY LOGIC IT DOES NOT RENDER UI*/}
            <RecentlyViewedTracker product={product} />

            {/* Product Details Page */}
            <section className="mb-12">
                <ProductDetails product={product} />
            </section>

            {/* Divider */}
            <div className="border-t my-8" />

            {/* Related Products */}
            <section className="mb-12">
                <RelatedProducts products={listOfRelatedProducts} />
            </section>
        </div>
    );
}