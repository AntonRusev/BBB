"use client"

import { useState } from "react"
import { toast } from "sonner"

import { useCartStore } from "@/store/cartStore"
import { applyCouponRequest } from "@/services/coupon.api"
// import { applyCouponAction } from "@/app/actions/coupon.actions"

export default function CouponInput() {
    const [code, setCode] = useState("")
    const setCoupon = useCartStore((s) => s.setCoupon)

    async function handleApply() {
        try {
            const coupon = await applyCouponRequest(code);

            if (coupon) {
                // Success
                setCoupon(coupon)
                toast.success(`Coupon ${coupon.code} applied`)
            } else {
                toast.error("Invalid coupon code");
            }
        } catch (error: any) {
            toast.error(error.message || "Invalid coupon code");
        }



        setCode(""); // Clear the input field
    }

    // const handleApply = async () => {
    //     const found = await applyCouponAction(code);

    //     if (found) {
    //         setCoupon(found)
    //         toast.success(`Coupon ${found.code} applied`)
    //     } else {
    //         setCoupon(null)
    //         toast.error("Invalid coupon code")
    //     }

    //     setCode(""); // Clear the input field
    // }

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