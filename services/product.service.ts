import rawProducts from "../data/products.json"
import { Product } from "@/types/product"

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

export async function getRelatedProducts(
  currentProduct: Product,
  limit = 4 // The limit for related products shown
): Promise<Product[]> {

  return Promise.resolve(
    products
      .filter((p) => {
        const isNotCurrent = p.id !== currentProduct.id;
        const isSameCategory = p.category === currentProduct.category;

        // If the current product is organic, only show other organic products
        const matchesOrganic = currentProduct.isOrganic ? p.isOrganic : true;

        return isNotCurrent && isSameCategory && matchesOrganic;
      }
      )
      .sort(() => 0.5 - Math.random()) // randomizing the result to make it feel less static TODO - find another way to do this
      .slice(0, limit)
  );
}

export async function getFeaturedProducts(
  limit = 3
): Promise<Product[]> {

  return Promise.resolve(
    products
      .filter(
        (p) =>
          // Only products tagged as featured, organic ones or products with discout higher than a certain treshold are considered as Featured
          p.isFeatured ||
          (p.discountPercentage ?? 0) >= 20 ||
          p.isOrganic
      )
      .sort(() => 0.5 - Math.random()) // randomizing the result to make it feel less static TODO - find another way to do this
      .slice(0, limit)
  );
}