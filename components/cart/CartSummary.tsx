"use client"

import { useCartStore } from "@/store/cartStore";
import { useHydrated } from "@/hooks/useHydrated"

import CartItemCard from "./CartItemCard";
import CartFooter from "./CartFooter";

export default function CartSummary() {
  const hydrated = useHydrated()

  const items = useCartStore((state) => state.items)

  // Delay rendering Zustand values until hydration completes to prevent mismatch with the server component
  // TODO add a custom loader or spinner
  if (!hydrated) {
    return <p className="text-center py-10">Loading cart...</p>;
  }

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

      <CartFooter />
    </div>
  )
}