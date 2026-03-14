"use client"

import { useCartStore } from "@/store/cartStore"

export default function CartBadge() {
    const totalItems = useCartStore((s) => s.totalItems())

    return (
        <div className="relative flex items-center">
            {/* Cart Icon */}
            <span
                role="img"
                aria-label="cart"
                className="text-lg"
            >
                🛒
            </span>

            {/* If there are items in the cart, show how many */}
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                >
                    {totalItems}
                </span>
            )}
        </div>
    )
}