"use client"

import { useState } from "react"
import { toast } from "sonner"

import couponsData from "@/data/coupons.json"
import { Coupon } from "@/types/coupon"
import { useCartStore } from "@/store/cartStore"

export default function CouponInput() {
    const [code, setCode] = useState("")
    const setCoupon = useCartStore((s) => s.setCoupon)
    const coupons = couponsData as Coupon[]

    //   TODO Add some sort of ERROR or regular message if the coupon is invalid

    const handleApply = () => {
        const found = coupons.find((coupon) => coupon.code.toLowerCase() === code.toLowerCase()) // Check if the entered coupon exists

        if (found) {
            setCoupon(found)
            toast.success(`Coupon ${found.code} applied`)
        } else {
            setCoupon(null)
            toast.error("Invalid coupon code")
        }

        setCode(""); // Clear the input field
    }

    return (
        <div className="mt-4">
            <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter coupon code"
                className="border p-2 rounded"
            />
            <button
                onClick={handleApply}
                className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
            >
                Apply
            </button>
        </div>
    )
}