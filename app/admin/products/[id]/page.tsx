import Link from "next/link";

export default function AdminProductItemPage() {
    return (
        <div>
            <h5 className="my-2 text-2xl">
                Admin Product Item
            </h5>

            <div className="flex flex-col p-2">
                <Link href='/admin/products'>Back to Products</Link>
            </div>
        </div>
    );
}