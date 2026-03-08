"use client"

import { useCartStore } from "@/store/cartStore";

import CouponInput from "./CouponInput";

export default function CartSummary() {
  const items = useCartStore((state) => state.items)
  const totalItems = useCartStore((state) => state.totalItems())
  const totalPrice = useCartStore((state) => state.totalPrice())

  // If no items in the cart
  if (!items.length) {
    return (
      <p>Your cart is empty.</p>
    )
  }

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {items.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>
            {item.name} x {item.quantity}
          </span>
          <span>${item.price.toFixed(2)}</span>
        </div>
      ))}

      <hr className="my-3" />

      <p>Total Items: {totalItems}</p>

      <CouponInput />
      
      <p className="font-bold text-lg">
        Total: ${totalPrice.toFixed(2)}
      </p>
    </div>
  )
}