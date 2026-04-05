import { getAllProducts } from "@/services/product.service";

import PorductsList from "@/components/products/ProductsList";
import RecentlyViewed from "@/components/products/RecentlyViewed";
import ProductsSidebar from "@/components/products/ProductsSidebar";
import Pagination from "@/components/Pagination";


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
    const page = parseInt(params.page || "1");


    const { products, totalPages } = await getAllProducts({
        search,
        category,
        page,
        limit: 8,
    });

    return (
        <>
            <div className="flex">
                {/* Sidebar with Filters */}
                <ProductsSidebar />

                <div className="flex flex-col gap-12 px-4 py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* List of Products */}
                    <PorductsList products={products} />

                    {/* Pagination */}
                    <Pagination currentPage={page} totalPages={totalPages} />

                    {/* Last viewed Products */}
                    <RecentlyViewed />
                </div>
            </div>
        </>
    );
}