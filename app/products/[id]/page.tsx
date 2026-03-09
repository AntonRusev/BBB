import ProductDetails from "@/components/products/ProductDetails";

type PageParams = {
    params: Promise<{
        id: string
    }>,
}
export default async function ProductItemPage({ params }: PageParams) {
    // Getting the Id of the Product from the params (It is named after the folder - [id])
    const { id } = await params;
    return (
        <ProductDetails id={id} />
    )
}