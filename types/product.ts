export type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl?: string;
    description?: string;
    category: "fruit" | "vegetable" | "nut";
    countryOfOrigin: string;
    isOrganic?: boolean;
    discountPercentage?: number;
};