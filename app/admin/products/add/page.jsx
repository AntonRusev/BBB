import Link from "next/link";

export default function AdminAddNewProductPage() {
    return (
        <div>
            <h5 className="my-2 text-2xl">
                Add New Product
            </h5>

            <div className="flex flex-col p-2">
                <Link href='/admin/products'>Back to products</Link>
            </div>
        </div>
    );
};