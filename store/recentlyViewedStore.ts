import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Product } from "@/types/product"

type RecentlyViewedStore = {
    products: Product[]
    addRecentlyViewed: (product: Product) => void
    clearRecentlyViewed: () => void
}

// Limit of viewed items
const MAX_ITEMS = 5

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
    // Persist the cart data in the localStorage
    persist(
        (set, get) => ({
            products: [],

            //   Prevents adding the same product to the list more than once and moves the latest viewed product to first position
            addRecentlyViewed: (product) => {
                const existing = get().products.filter(
                    (p) => p.id !== product.id
                )

                const updated = [product, ...existing].slice(0, MAX_ITEMS)

                set({ products: updated })
            },

            //   Clear the entire list
            clearRecentlyViewed: () => set({ products: [] }),
        }),
        {
            name: "recently-viewed-storage", // key in localStorage
        }
    )
)