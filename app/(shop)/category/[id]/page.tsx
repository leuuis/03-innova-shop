import { ProductGrid, Title } from "@/components";
import { Product, Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        id: Category;
    };
}

const products: Product[] = initialData.products;

export default async function ({ params }: Props) {

    const { id } = await params;

    const labels: Record<Category, string> = {
        men: "Men",
        women: "Women",
        kid: "Kids",
        unisex: "Unisex"
    };

    if (labels[id] === undefined) {
        notFound()
    }

    const filteredProducts = products.filter(product => product.gender === id);

    return (
        <>
            <Title
                title={labels[id]}
                subtitle={`Products for ${labels[id]}`}
                className="mb-3" />
            <ProductGrid products={filteredProducts} />
        </>
    )
}