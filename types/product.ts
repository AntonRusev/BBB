export type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description?: string;
  quality: "premium" | "regular";
  countryOfOrigin: string;
};