"use client"

import { useCartStore } from "@/store/cartStore"
import { CartItem } from "@/types/cart"
import { calculateDiscountedPrice } from "@/lib/pricing"

type Props = {
    item: CartItem
}

export default function CartItemCard({ item }: Props) {
    const increaseQuantity = useCartStore((s) => s.increaseQuantity)
    const decreaseQuantity = useCartStore((s) => s.decreaseQuantity)
    const removeFromCart = useCartStore((s) => s.removeFromCart)

    const price = calculateDiscountedPrice(item)

    return (
        <div className="flex gap-4 p-4 border rounded-xl shadow-sm bg-white">

            {/* Image */}
            {item.imageUrl && (
                <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                />
            )}

            <div className="flex flex-col flex-1">

                {/* Name */}
                <h3 className="font-semibold text-lg">{item.name}</h3>

                {/* Country of origin */}
                <p className="text-sm text-gray-500">
                    Origin: {item.countryOfOrigin}
                </p>

                {/* Organic badge */}
                {item.isOrganic && (
                    <span className="text-green-600 text-xs">Organic 🌱</span>
                )}

                {/* Price */}
                <p className="font-bold mt-2">
                    ${price.toFixed(2)}
                </p>

                <div className="flex items-center gap-2 mt-3">

                    {/* Decrease item quantity button */}
                    <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                        -
                    </button>

                    <span className="font-medium">{item.quantity}</span>

                    {/* Increase item quantity button */}
                    <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-1 border rounded hover:bg-gray-100"
                    >
                        +
                    </button>

                    {/* Remove product from cart button */}
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700 text-sm"
                    >
                        Remove
                    </button>

                </div>
            </div>
        </div>
    );
}