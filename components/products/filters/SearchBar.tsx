"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function SearchBar() {
    const router = useRouter()
    const params = useSearchParams()

    const [search, setSearch] = useState(params.get("search") || "")

    const applySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        // apply changes in real time as the search query is written
        const value = e.target.value
        setSearch(value)

        const newParams = new URLSearchParams(params);

        // Keeps the URL clean if there is no search query entered
        if (value) {
            newParams.set("search", value)
        }
        else {
            newParams.delete("search")
        }

        newParams.set("search", e.target.value);
        router.push(`/products?${newParams.toString()}`);
    }

    return (
        <div className="w-full bg-white border-b border-green-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <div className="flex flex-1 gap-2">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => applySearch(e)}
                        className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>
            </div>
        </div>
    );
}