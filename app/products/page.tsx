import { getAllProducts } from "@/services/product.service";
import PorductsList from "@/components/products/ProductsList";
import RecentlyViewed from "@/components/products/RecentlyViewed";
import ProductsFilters from "@/components/SearchBar";

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



    const products = await getAllProducts({
        search,
        limit: 30,
    })

    return (
        <>
            <ProductsFilters />

            <div className="flex flex-col gap-12 px-4 py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <PorductsList products={products} />
                <RecentlyViewed />
            </div>
        </>
    );
};