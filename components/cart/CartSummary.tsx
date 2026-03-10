"use client"

import { useCartStore } from "@/store/cartStore";

import CartItemCard from "./CartItemCard";
import CouponInput from "../CouponInput";

export default function CartSummary() {
  const items = useCartStore((state) => state.items)
  const totalItems = useCartStore((state) => state.totalItems())
  const totalPrice = useCartStore((state) => state.totalPrice())

  // If no items in the cart
  if (!items.length) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">
          Your cart is empty 🛒
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-4">

      <h1 className="text-3xl font-bold mb-4">
        Your Cart
      </h1>

      {items.map((item) => (
        <CartItemCard key={item.id} item={item} />
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