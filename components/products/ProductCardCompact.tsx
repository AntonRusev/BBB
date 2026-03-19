import Link from "next/link"

import { Product } from "@/types/product"
import { calculateDiscountedPrice } from "@/lib/pricing";

export default function ProductCardCompact({
    product,
}: {
    product: Product
}) {
    const discountedPrice = calculateDiscountedPrice(product);

    return (
        <Link
            href={`/products/${product.id}`}
            className="group blockbg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition"
        >
            {/* Image */}
            <div className="relative aspect-square bg-gray-50 overflow-hidden">
                {product.imageUrl ? (
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                        No image
                    </div>
                )}

                {/* Optional small badge */}
                {product.isOrganic && (
                    <span className="absolute top-2 right-2 bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                        Organic
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="p-3 space-y-1">

                {/* Name */}
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {product.name}
                </h3>

                {/* Price */}
                <div className="text-sm font-semibold">
                    {discountedPrice !== product.price ? (
                        <div className="flex items-center gap-1">
                            {/* Old Price */}
                            <span className="text-gray-400 line-through text-xs">
                                €{product.price.toFixed(2)}
                            </span>
                            {/* Discounted price */}
                            <span className="text-green-600">
                                €{discountedPrice.toFixed(2)}
                            </span>
                        </div>
                    ) : (
                        // Regular price
                        <span className="text-orange-300">
                            €{product.price.toFixed(2)}
                        </span>
                    )}
                </div>

            </div>
        </Link>
    );
}