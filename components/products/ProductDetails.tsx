import Link from "next/link";

import { calculateDiscountedPrice } from "@/lib/pricing";
import { getCategoryStyles } from "@/utils/categoryStyles";
import { Product } from "@/types/product";
import AddToCartButton from "./AddToCartButton";

type ProductDetailsProps = {
    product: Product
}

export default async function ProductDetails({ product }: ProductDetailsProps) {
    // Calculating the discounted price
    const discountedPrice = calculateDiscountedPrice(product);

    // Getting the styling colours for the product's category
    const categoryStyles = getCategoryStyles(product.category);

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            {/* Breadcrumbs */}
            <div className="mb-6 text-sm text-gray-500 flex items-center gap-2">
                <Link href="/" className="hover:text-green-700">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-green-700">Products</Link>
                <span>/</span>
                <span className="text-gray-700 font-medium">{product.name}</span>
            </div>

            {/* Back button */}
            <Link
                href="/products"
                className="inline-flex items-center gap-2 mb-8 text-green-700 hover:text-green-900 font-medium"
            >
                ← Back to products
            </Link>

            <div className="grid md:grid-cols-2 gap-10">

                {/* IMAGE SECTION */}
                <div className="relative bg-green-50 rounded-2xl overflow-hidden shadow-md">
                    {product.imageUrl ? (
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-112.5 object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-112.5 text-gray-400">
                            No image available
                        </div>
                    )}

                    {/* Discount badge */}
                    {product.discountPercentage && (
                        <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                            -{product.discountPercentage}%
                        </span>
                    )}

                </div>

                {/* INFO SECTION */}
                <div className="flex flex-col justify-center space-y-5">

                    {/* Category */}
                    <span
                        className={`inline-block w-fit text-xs font-medium px-3 py-1 rounded-full ${categoryStyles}`}
                    >
                        {product.category}
                    </span>

                    {/* Name */}
                    <h1 className="text-3xl font-bold text-green-900">
                        {product.name}
                    </h1>

                    {/* Organic label */}
                    {product.isOrganic && (
                        <span className="text-green-600 font-medium">
                            🌱 Organic Product
                        </span>
                    )}

                    {/* Price */}
                    <div className="flex items-center gap-4 text-xl">
                        {discountedPrice ? (
                            <>
                                <span className="text-gray-400 line-through">
                                    €{product.price.toFixed(2)}
                                </span>
                                <span className="text-green-600 font-bold text-2xl">
                                    €{discountedPrice.toFixed(2)}
                                </span>
                            </>
                        ) : (
                            <span className="text-orange-600 font-bold text-2xl">
                                €{product.price.toFixed(2)}
                            </span>
                        )}
                    </div>

                    {/* Description */}
                    {product.description && (
                        <p className="text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                    )}

                    {/* Country Origin */}
                    <p className="text-sm text-gray-500">
                        Origin: <span className="font-medium">{product.countryOfOrigin}</span>
                    </p>

                    {/* Add to cart button*/}
                    <AddToCartButton product={product} />

                </div>
            </div>
        </div>
    );
}