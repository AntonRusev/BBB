import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Product } from "@/types/product"
import { CartItem } from "@/types/cart"

type CartStore = {
    items: CartItem[]
    addToCart: (product: Product) => void
    removeFromCart: (id: number) => void
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    clearCart: () => void
    totalItems: () => number
    totalPrice: () => number
}



export const useCartStore = create<CartStore>()(
    // Persist the cart data in the localStorage
    persist(
        (set, get) => ({
            items: [],
            addToCart: (product) => {
                const existing = get().items.find((item) => item.id === product.id)

                if (existing) {
                    // If the product already exists in the store, increase the quantity by one
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
                    // If the product does not exist in the store, add it with a starting quantity of 1
                    set({
                        items: [...get().items, { ...product, quantity: 1 }]
                    })
                }
            },

            removeFromCart: (id) =>
                // Remove a particular product from the store based on its Id
                set({
                    items: get().items.filter((item) => item.id !== id),
                }),

            increaseQuantity: (id) =>
                // To be used only inside the Cart component
                // Increase the quantity of the product by 1
                set({
                    items: get().items.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }),

            decreaseQuantity: (id) =>
                // To be used only inside the Cart component
                // Decrease the quantity of the product by 1
                set({
                    items: get()
                        .items.map((item) =>
                            item.id === id
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        )
                        .filter((item) => item.quantity > 0), // removes the product from the store if the quantity reaches 0
                }),

            clearCart: () => set({ items: [] }), //clear the entire store

            totalItems: () =>
                // Show the total items in the store
                get().items.reduce((acc, item) => acc + item.quantity, 0),

            totalPrice: () =>
                // Calculate the discounts and show the total price of the products in the store
                get().items.reduce((acc, item) => {
                    const discount = item.discountPercentage ?? 0
                    const discountedPrice =
                        item.price - (item.price * discount) / 100

                    return acc + discountedPrice * item.quantity
                }, 0),
        }),
        {
            name: "cart-storage", // key in localStorage
        }
    )
);