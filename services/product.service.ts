import { connectDB } from "@/config/database"

import ProductModel from "@/models/Product"
import { Product } from "@/types/product"

type GetProductsParams = {
  search?: string;
  category?: string;
  limit?: number;
};

// Connect to the DataBase
await connectDB();

export async function getAllProducts(
  {
    search = "",
    category = "",
    limit = 10,
  }: GetProductsParams
): Promise<Product[]> {
  const query: any = {};

  // Search (case-insensitive)
  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  // Filter
  if (category) {
    query.category = category;
  }

  const [products, total] = await Promise.all([
    ProductModel.find(query).limit(limit),
    ProductModel.countDocuments(query),
  ]);

  return (
    products.map((p) => ({
      ...p.toObject(),
      _id: p._id.toString(),
    }))
  );
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const product = await ProductModel.findById(id).lean();

  return {
    ...product,
    _id: product._id.toString()
  };
}

export async function getRelatedProducts(
  currentProduct: Product,
  limit = 4 // The limit for related products shown
): Promise<Product[]> {
  const relatedProducts = await ProductModel.aggregate([
    {
      $match: {
        _id: { $ne: currentProduct._id },
        category: currentProduct.category,
        ...(currentProduct.isOrganic && { isOrganic: true }), // If the current product is organic, only show other organic products
      },
    },
    { $sample: { size: limit } }, // randomizing the result to make it feel less static
  ]);

  return relatedProducts.map(p => ({
    // Converting the data into serializable values 
    _id: p._id.toString(),
    name: p.name,
    price: p.price,
    imageUrl: p.imageUrl,
    description: p.description,
    category: p.category,
    countryOfOrigin: p.countryOfOrigin,
    isOrganic: p.isOrganic,
    stock: p.stock,
    isFeatured: p.isFeatured,
  }));
}

export async function getFeaturedProducts(
  limit = 3
): Promise<Product[]> {
  const featuredProducts = await ProductModel.aggregate([
    {
      $match: {
        $or: [
          // Only products tagged as featured, organic ones or products with discout higher than a certain treshold are considered as Featured
          { isFeatured: true },
          { discountPercentage: { $gte: 20 } },
          { isOrganic: true },
        ],
      },
    },
    { $sample: { size: limit } }, // randomizing the result to make it feel less static
  ]);

  return featuredProducts.map(p => ({
    // Converting the data into serializable values 
    _id: p._id.toString(),
    name: p.name,
    price: p.price,
    imageUrl: p.imageUrl,
    description: p.description,
    category: p.category,
    countryOfOrigin: p.countryOfOrigin,
    isOrganic: p.isOrganic,
    stock: p.stock,
    isFeatured: p.isFeatured,
  }));
}