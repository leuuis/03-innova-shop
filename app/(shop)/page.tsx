import { Title, ProductGrid } from "@/components";
import { Product } from "@/interfaces";
import { initialData } from '../../seed/seed';

const products: Product[] = initialData.products;

export default function Home() {
  return (
    <>
      <Title title={"Store"}
        subtitle="All products"
        className="mb-3" />

      <ProductGrid products={products} />
    </>
  );
}
