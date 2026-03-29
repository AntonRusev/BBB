"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();

  const [search, setSearch] = useState(params.get("search") || "");

  const applyFilters = () => {
    const newParams = new URLSearchParams(params);

    if (search) newParams.set("search", search);
    else newParams.delete("search");

    router.push(`/products?${newParams.toString()}`);
  };

  return (
    <div className="w-full bg-white border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

        {/* Search */}
        <div className="flex flex-1 gap-2">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            onClick={applyFilters}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}