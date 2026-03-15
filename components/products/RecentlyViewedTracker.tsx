"use client"

import { useEffect } from "react"

import { Product } from "@/types/product"
import { useRecentlyViewedStore } from "@/store/recentlyViewedStore"

{/* This component only runs logic, it does not render UI */ }
export default function RecentlyViewedTracker({
    product,
}: {
    product: Product
}) {
    const addRecentlyViewed = useRecentlyViewedStore(
        (s) => s.addRecentlyViewed
    )

    // Adding the currently viewed product to the RecentlyViewed Store
    useEffect(() => {
        addRecentlyViewed(product)
    }, [product, addRecentlyViewed])

    return null;
}