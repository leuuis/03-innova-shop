import Image from "next/image"

import { Product } from "@/interfaces"
import Link from "next/link"

interface Props {
    product: Product,
    priority: boolean
}

export const ProductGridItem = ({ product, priority }: Props) => {
    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Image
                priority={priority}
                src={`/products/${product.images[0]}`}
                alt={product.title}
                className="w-full object-cover"
                width={500}
                height={500}
            />

            <div className="p-4 flex flex-col">
                <Link href={`/product/${product.slug}`}>
                    {product.title}
                </Link>
                <span className="font-bold">${product.price}</span>
            </div>
        </div>
    )
}
