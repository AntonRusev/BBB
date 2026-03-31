"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function SearchBar() {
    const router = useRouter()
    const params = useSearchParams()

    const [search, setSearch] = useState(params.get("search") || "")

    // Debounced search - prevents sending requests and rerendering on every entered symbol
    useEffect(() => {
        const timeout = setTimeout(() => {
            const newParams = new URLSearchParams(params.toString())

            // Clean up URL when search query is cleared (avoid empty search params in URL)
            if (search) {
                newParams.set("search", search)
            } else {
                newParams.delete("search")
            }

            router.push(`/products?${newParams.toString()}`)
        }, 500) // delay

        return () => clearTimeout(timeout)
    }, [search, params, router])

    return (
        <div className="w-full bg-white border-b border-green-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div className="flex flex-1 gap-2">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>
            </div>
        </div>
    );
}