"use client"

import { useCartStore } from "@/store/cartStore"
import { applyCoupon, calculateCartSubtotal } from "@/lib/pricing"
import CouponInput from "./CouponInput"

export default function CartFooter() {
    const items = useCartStore((s) => s.items)
    const coupon = useCartStore((s) => s.coupon)
    const setCoupon = useCartStore((s) => s.setCoupon)
    const totalItems = useCartStore((s) => s.totalItems())
    const totalPrice = useCartStore((s) => s.totalPrice())
    const clearCart = useCartStore((s) => s.clearCart)

    const subtotal = calculateCartSubtotal(items)
    const discount = applyCoupon(subtotal, coupon)

    return (
        <div className="border-t pt-6 mt-6 flex flex-col gap-3">

            {/* Coupon */}
            <CouponInput />

            {/* Applied coupon */}
            {coupon && (
                <div className="flex justify-between text-sm text-green-600">

                    {/* Coupon name */}
                    <span>
                        Coupon applied: <strong>{coupon.code}</strong>
                    </span>

                    {/* Remove coupon button */}
                    <button
                        onClick={() => setCoupon(null)}
                        className="text-red-500 hover:underline"
                    >
                        Remove
                    </button>
                </div>
            )}

            {/* Subtotal */}
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
            </div>

            {/* Discount */}
            {coupon && (
                <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>- €{(subtotal - discount).toFixed(2)}</span>
                </div>
            )}

            {/* Total Items */}
            <div className="flex justify-between text-lg">
                <span>Total Items</span>
                <span>{totalItems}</span>
            </div>

            {/* Total Price */}
            <div className="flex justify-between text-xl font-bold">
                <span>Total Price</span>
                <span>€{totalPrice.toFixed(2)}</span>
            </div>

            {/* Clear entire cart button */}
            <button
                onClick={clearCart}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
            >
                Clear Cart
            </button>

        </div>
    );
}