"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
    const router = useRouter();
    const params = useSearchParams();

    const goToPage = (page: number) => {
        const newParams = new URLSearchParams(params);
        newParams.set("page", page.toString());

        router.push(`/products?${newParams.toString()}`);
    };

    return (
        <div className="flex items-center justify-center gap-4 my-8">
            {/* Go to First Page Button */}
            <button
                disabled={currentPage === 1}
                onClick={() => goToPage(1)}
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
            >
                « First
            </button>


            {/* Previous Page Button */}
            <button
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
                Previous
            </button>

            {/* Currently Viewed Page  */}
            <div className="flex items-center gap-1 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{currentPage}</span>
                <span>of</span>
                <span className="font-semibold text-gray-900">{totalPages}</span>
            </div>

            {/* Next Page Button*/}
            <button
                disabled={currentPage === totalPages} // Don't go further than the last page
                onClick={() => goToPage(currentPage + 1)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
                Next
            </button>

            {/* Go to Last Page Button */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => goToPage(totalPages)}
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
            >
                Last »
            </button>
        </div>
    );
}