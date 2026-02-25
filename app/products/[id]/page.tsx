import { getProductById } from "@/services/product.service";
import Link from "next/link";

// All possible params that are going to be used have to be added in the type here
type PageParams = {
    params: Promise<{
        id: string
    }>,
    searchParams: Promise<{
        name: string
    }>,
}

// TODO - Add "Back to products" button

export default async function ProductItemPage({ params, searchParams }: PageParams) {
    // Getting the Id of the Product from the params (It is named after the folder - [id])
    const { id } = await params;

    // Getting the search params
    const { name } = await searchParams;

    const product = await getProductById(Number(id)); // Convert the id as a Number

    // If there is no such product Id in the database
    // TODO redirect to a custom Product not found page
    if (!product) {
        return <div>Product not found</div>;
    }

    // Discounted price
    const discountedPrice =
        product.discountPercentage
            ? product.price - (product.price * product.discountPercentage) / 100
            : null;

    const categoryStyles =
        product.category === "fruit"
            ? "bg-orange-100 text-orange-700"
            : product.category === "vegetable"
                ? "bg-lime-100 text-lime-700"
                : "bg-sky-100 text-sky-700";


    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
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

                    {/* Country */}
                    <p className="text-sm text-gray-500">
                        Origin: <span className="font-medium">{product.countryOfOrigin}</span>
                    </p>

                    {/* Add to cart */}
                    <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-colors duration-200">
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    );
}