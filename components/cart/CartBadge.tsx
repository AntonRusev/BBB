"use client"

import { useCartStore } from "@/store/cartStore"
import { useHydrated } from "@/hooks/useHydrated"

export default function CartBadge() {
    const hydrated = useHydrated()

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

            {/* Delay rendering Zustand values until hydration completes to prevent mismatch with the server component */}
            {/* If there are items in the cart and hydration is complete, show the quantity of items in the cart */}
            {hydrated && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                >
                    {totalItems}
                </span>
            )}
        </div>
    )
}