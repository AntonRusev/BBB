"use client"

import { useRouter } from "next/navigation"

export default function CategoryFilter() {
    const router = useRouter()

    const handleChange = (value: string) => {
        const newParams = new URLSearchParams(window.location.search)

        // Clean up URL when category query is cleared (avoid empty category params in URL)
        if (value) {
            newParams.set("category", value)
        } else {
            newParams.delete("category")
        }

        router.push(`/products?${newParams.toString()}`)
    }

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
                Category
            </label>

            <select
                onChange={(e) => handleChange(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            >
                {/* TODO fix value names and DB category names */}
                <option value="">All</option>
                <option value="vegetable">Vegetables</option>
                <option value="fruit">Fruits</option>
                <option value="nut">Nuts</option>
            </select>
        </div>
    );
}