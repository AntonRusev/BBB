export type Product = {
    _id: string;
    name: string;
    price: number;
    imageUrl?: string;
    description?: string;
    category: "fruit" | "vegetable" | "nut";
    countryOfOrigin: string;
    isOrganic?: boolean;
    discountPercentage?: number;
    stock: number;
    isFeatured: boolean;
}