export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex-1 bg-gray-50 p-8">
            <h2 className="text-3xl font-bold mb-6">ADMIN LAYOUT</h2>
            {children}
        </main>
    );
}