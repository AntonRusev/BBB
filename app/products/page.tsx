import { getAllProducts } from "@/services/product.service";
import PorductsList from "@/components/products/ProductsList";
import RecentlyViewed from "@/components/products/RecentlyViewed";

export default async function UserProductsPage() {
    const products = (await getAllProducts())
        .map(p => ({
            // Converting the data into serializable values 
            _id: p._id.toString(),
            name: p.name,
            price: p.price,
            imageUrl: p.imageUrl,
            description: p.description,
            category: p.category,
            countryOfOrigin: p.countryOfOrigin,
            isOrganic: p.isOrganic,
            stock: p.stock,
            isFeatured: p.isFeatured,
        }));

    return (
        <div className="flex flex-col gap-12 px-4 py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
            <PorductsList products={products} />
            <RecentlyViewed />
        </div>
    );
};