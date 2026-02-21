import Link from "next/link";

// All possible params that are going to be used have to be added in the type here
type PageParams = {
    params: Promise<{
        id: string
    }>,
    searchParams: Promise<{
        name: string
    }>,
}

export default async function ProductItemPage({ params, searchParams }: PageParams) {
    // Getting the Id of the Product from the params (It is named after the folder - [id])
    const { id } = await params;

    // Getting the search params
    const { name } = await searchParams;

    return (
        <div>
            <h5 className="my-2 text-2xl">
                User Product Item Page {id}
                {name}
            </h5>

            <div className="flex flex-col p-2">
                <Link href='/products'>Back to Products</Link>
            </div>
        </div>
    );
}