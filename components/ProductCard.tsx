import Link from "next/link";

import { Product } from "@/types/product";

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  // Calculating the final discounted price if there is a discount percentage
  const discountedPrice =
    product.discountPercentage
      ? product.price * (1 - product.discountPercentage / 100)
      : null

  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-100 group">

      {/* Discount Badge */}
      {product.discountPercentage && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          -{product.discountPercentage}%
        </span>
      )}

      {/* Organic Badge */}
      {product.isOrganic && (
        <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          Organic
        </span>
      )}

      {/* Product Image */}
      <div className="relative h-48 bg-green-50 flex items-center justify-center overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-green-400 text-sm">No image</span> // TODO Provide a Placeholder image(maybe the app logo?)
        )}

        {/* Details Link and Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {/* Link to the Product */}
          <Link
            href={`/products/${product.id}`}
            className="bg-white text-green-700 px-4 py-2 rounded-xl font-semibold hover:bg-green-100 transition"
          >
            Details
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Category Tag */}
        <span
          className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${product.category === "fruit"
            ? "bg-orange-100 text-orange-700"
            : product.category === "vegetable"
              ? "bg-lime-100 text-lime-700"
              : "bg-sky-100 text-sky-700"
            }`}
        >
          {product.category}
        </span>

        {/* Name */}
        <h3 className="text-lg font-semibold text-green-900">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          {/* Discounts */}
          {discountedPrice ? (
            <>
              {/* Old Price */}
              <span className="text-gray-400 line-through text-sm">
                €{product.price.toFixed(2)}
              </span>
              {/* Discounted price */}
              <span className="text-green-600 font-bold">
                €{discountedPrice.toFixed(2)}
              </span>
            </>
          ) : (
            // Regular price
            <span className="text-orange-600 font-bold">
              €{product.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Country of origin */}
        <p className="text-sm text-gray-500">
          Origin: {product.countryOfOrigin}
        </p>

        {/* Add to cart button */}
        <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition-colors duration-200">
          Add to cart
        </button>
      </div>
    </div>
  )
}