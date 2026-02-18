import Link from "next/link";

export default function AdminHomePage() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6">Admin Homepage</h2>
            
            <div className="flex flex-col p-2">
                <Link href='/admin/products'>Go to Products</Link>
            </div>
        </div>
    );
}