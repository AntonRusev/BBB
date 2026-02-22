import rawProducts  from "../data/products.json";
import { Product } from "@/types/product";

// TODO - change this when connecting a real DB instead of a JSON
const products = rawProducts as Product[];

export async function getAllProducts(): Promise<Product[]> {
    return Promise.resolve(products);
}

export async function getProductById(id: number): Promise<Product | undefined> {
  return Promise.resolve(
    products.find((product) => product.id === id)
  );
}