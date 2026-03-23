import { getAllProducts } from "@/services/product.service";
import PorductsList from "@/components/products/ProductsList";
import RecentlyViewed from "@/components/products/RecentlyViewed";

export default async function UserProductsPage() {
    const products = await getAllProducts()

    return (
        <div className="flex flex-col gap-12 px-4 py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
            <PorductsList products={products} />
            <RecentlyViewed />
        </div>
    );
};