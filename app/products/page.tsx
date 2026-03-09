import { getAllProducts } from "@/services/product.service";
import PorductsList from "@/components/products/ProductsList";

export default async function UserProductsPage() {
    // Get all products as an array
    const products = await getAllProducts();

    return (
        <PorductsList products={products} />
    );
};