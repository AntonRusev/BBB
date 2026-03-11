"use client";

import { toast } from "sonner"

import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);


  const handleAdd = () => {
    addToCart(product)
    toast.success(`${product.name} added to cart`)
  }

  return (
    <button
      onClick={handleAdd}
      disabled={product.stock === 0}
      className={`mt-4 w-full py-3 rounded-xl text-white
        ${product.stock === 0
          ? "bg-red-400"
          : "bg-green-600 hover:bg-green-700"
        }`}
    >
      {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
    </button>
  );
}