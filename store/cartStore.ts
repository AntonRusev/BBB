import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Product } from "@/types/product"
import { CartItem } from "@/types/cart"
import { Coupon } from "@/types/coupon"
import { calculateCartTotal } from "@/lib/pricing"

type CartStore = {
    items: CartItem[]
    coupon: Coupon | null

    addToCart: (product: Product) => void
    removeFromCart: (id: number) => void
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    clearCart: () => void

    setCoupon: (coupon: Coupon | null) => void

    totalItems: () => number
    totalPrice: () => number
}

export const useCartStore = create<CartStore>()(
    // Persist the cart data in the localStorage
    persist(
        (set, get) => ({
            items: [],
            coupon: null,

            addToCart: (product) => {
                const existing = get().items.find((item) => item.id === product.id)

                if (existing) {
                    // Check if there is enough of the product in stock
                    if (existing.quantity >= product.stock) return;

                    // If the product already exists in the cart, increase the quantity by one
                    set({
                        items: get().items.map((item) => {
                            return (
                                item.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            );
                        })
                    })
                } else {
                    // Check if there is at least the minimum amount of product (1) in stock required in order to add it to the cart
                    if (product.stock < 1) return;

                    // If the product does not exist in the cart, add it with a starting quantity of 1
                    set({
                        items: [...get().items, { ...product, quantity: 1 }]
                    })
                }
            },

            removeFromCart: (id) =>
                // Remove a particular product from the cart based on its Id
                set({
                    items: get().items.filter((item) => item.id !== id),
                }),

            increaseQuantity: (id) => {
                // To be used only in the Cart component

                // Check if the product already exists in the cart
                const item = get().items.find((i) => i.id === id)
                if (!item) return;

                // Check if there is enough of the product in stock
                if (item.quantity >= item.stock) return

                // Increase the quantity of the product by 1
                set({
                    items: get().items.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })
            },

            decreaseQuantity: (id) => {
                // To be used only in the Cart component

                // Check if the product already exists in the cart
                const item = get().items.find((i) => i.id === id)
                if (!item) return;

                // Decrease the quantity of the product by 1
                set({
                    items: get()
                        .items.map((item) =>
                            item.id === id
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        )
                        .filter((item) => item.quantity > 0), // Remove the product from the cart if the quantity reaches 0
                })
            },

            clearCart: () => set({ items: [] }), // Remove all the items in the cart

            setCoupon: (coupon) => set({ coupon }), // Set coupon

            totalItems: () =>
                // Show the total items in the cart
                get().items.reduce((total, item) => total + item.quantity, 0),

            totalPrice: () =>
                // Calculate the discounts and apply coupons(if any) then show the total price of the products in the cart
                calculateCartTotal(get().items, get().coupon),
        }),
        {
            name: "cart-storage", // key in localStorage
        }
    )
);