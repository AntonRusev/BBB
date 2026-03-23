import { Schema, model, models } from "mongoose"
import type { Product } from "@/types/product"

const ProductSchema = new Schema<Product>({
    name: {
        type: String,
        unique: [true, "Product with this name already exists"],
        required: [true, "Product name is required"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"]
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ["fruit", "vegetable", "nut"],
        required: [true, "Category is required"]
    },
    countryOfOrigin: {
        type: String,
        required: [true, "Country of origin is required"]
    },
    isOrganic: {
        type: Boolean,
        default: false
    },
    discountPercentage: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        required: [true, "Stock is required"]
    },
    isFeatured: {
        type: Boolean,
    }
}, {
    timestamps: true // CreatedAt and UpdatedAt fields
})

const ProductModel = models.Product || model<Product>('Product', ProductSchema)

export default ProductModel