"use client";

import SearchFilter from "./filters/SearchFilter";
import CategoryFilter from "./filters/CategoryFilter";

export default function ProductsSidebar() {

  return (
    <aside className="w-64 hidden md:flex flex-col gap-6 bg-white p-4 border border-gray-100 rounded-xl shadow-sm h-fit sticky top-24">

      <h2 className="text-lg font-semibold text-gray-700">
        Filters
      </h2>

      {/* Search Bar */}
      <SearchFilter />

      {/* Category Dropdown */}
      <CategoryFilter />

    </aside>
  );
}