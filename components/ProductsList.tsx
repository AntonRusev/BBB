import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

type Props = {
    products: Product[];
};

export default function PorductsList({ products }: Props) {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 py-8">

                <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
                    Fresh Products
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}