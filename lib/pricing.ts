import { CartItem } from "@/types/cart"
import { Product } from "@/types/product"
import { Coupon } from "@/types/coupon"

export function calculateDiscountedPrice(product: Product): number {
    const discount = product.discountPercentage ?? 0
    return (
        product.price - (product.price * discount) / 100
    );
}

export function calculateCartSubtotal(items: CartItem[]): number {
    return (
        items.reduce((total, item) => {
            const discountedPrice = calculateDiscountedPrice(item)
            return (total + discountedPrice * item.quantity);
        }, 0)
    );
}

export function applyCoupon(
    subtotal: number,
    coupon: Coupon | null
): number {
    if (!coupon) {
        return subtotal;
    }

    // Check expiration
    if (coupon.expiresAt && new Date() > coupon.expiresAt) {
        return subtotal;
    }

    // Check minimum order value
    if (
        coupon.minOrderValue &&
        subtotal < coupon.minOrderValue
    ) {
        return subtotal;
    }

    if (coupon.type === "percentage") {
        return (
            subtotal - (subtotal * coupon.value) / 100
        );
    }

    if (coupon.type === "fixed") {
        return (
            Math.max(0, subtotal - coupon.value) // Ensuring the result never goes below zero if the discount is bigger than the subtotal
        );
    }

    return subtotal;
}

export function calculateCartTotal(
    items: CartItem[],
    coupon: Coupon | null
): number {
    const subtotal = calculateCartSubtotal(items)
    return (
        applyCoupon(subtotal, coupon)
    );
}