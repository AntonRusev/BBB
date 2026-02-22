import { Product } from "@/types/product";

type Props = {
    products: Product[];
};

export default function PorductsList({ products }: Props) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>€{product.price}</p>
                    <p>{product.countryOfOrigin}</p>
                </div>
            ))}
        </div>
    );
}