import Link from "next/link"

export default function AdminProductsPage() {
    return (
        <div>
            <h5 className="my-2 text-2xl">
                Products Page for ADMIN
            </h5>

            <div className="flex flex-col p-2">
                <Link href='/admin/products/add'>Add new product</Link>
                <Link href='/admin'>Back to admin homepage</Link>
            </div>
        </div>
    )
}