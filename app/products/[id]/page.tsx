import { getProductById } from "@/services/product.service";
import ProductDetails from "@/components/products/ProductDetails";
import RecentlyViewedTracker from "@/components/products/RecentlyViewedTracker";

type PageParams = {
    params: Promise<{
        id: string
    }>,
}
export default async function ProductItemPage({ params }: PageParams) {
    // Getting the Id of the Product from the params (It is named after the folder - [id])
    const { id } = await params;

    const product = await getProductById(Number(id)); // Convert the id to a Number

    // If such product doesn't exist
    // TODO redirect to a custom Product not found page
    if (!product) return <div>Product not found</div>

    return (
        <>
            {/* Client component tracker which updates the RecentlyViewed store */}
            {/* THIS COMPONENT RUNS ONLY LOGIC IT DOES NOT CONTAIN JSX/HTML AND DOES NOT RENDER UI*/}
            <RecentlyViewedTracker product={product} />

            {/* Product Details Page */}
            <ProductDetails product={product} />
        </>
    );
}