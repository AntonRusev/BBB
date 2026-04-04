import { getAllProducts } from "@/services/product.service";

import PorductsList from "@/components/products/ProductsList";
import RecentlyViewed from "@/components/products/RecentlyViewed";
import ProductsSidebar from "@/components/products/ProductsSidebar";


type ProductsPageProps = {
    searchParams: {
        search?: string;
        category?: string;
        page?: string;
    };
};

export default async function UserProductsPage({ searchParams }: ProductsPageProps) {
    const params = await searchParams;

    // Parsed data from the URL
    const search = params.search || "";
    const category = params.category || "";


    const products = await getAllProducts({
        search,
        category,
        limit: 30,
    })

    return (
        <>
            <div className="flex">
                {/* Sidebar with Filters */}
                <ProductsSidebar />

                <div className="flex flex-col gap-12 px-4 py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* List of Products */}
                    <PorductsList products={products} />

                    {/* Last viewed Products */}
                    <RecentlyViewed />
                </div>
            </div>
        </>
    );
};