"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function SearchFilter() {
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

    return () => clearTimeout(timeout);
  }, [search])

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-600">
        Search
      </label>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>
  );
}