import { Product } from "@/types/product";

type Props = {
    product: Product
}

export default function ProductCard({ product }: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-100 group">

            {/* Image */}
            <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden">
                {product.imageUrl ? (
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <span className="text-green-400 text-sm">No image</span>
                )}
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-green-900">
                    {product.name}
                </h3>

                <p className="text-orange-600 font-bold text-md">
                    €{product.price.toFixed(2)}
                </p>

                <p className="text-sm text-gray-500">
                    Origin: {product.countryOfOrigin}
                </p>

                <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition-colors duration-200">
                    Add to cart
                </button>
            </div>
        </div>
    );
}