import { notFound } from "next/navigation";

import { initialData } from "@/seed/seed";
import { titleFont } from "@/app/config/fonts";
import { SizeSelector } from "@/components";

interface Props {
    params: {
        slug: string;
    };
}

export default async function ProductPage({ params }: Props) {

    const { slug } = await params;
    const product = initialData.products.find(product => product.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Slideshow */}
            <div className="col-span-1 md:col-span-2">
                <h1 className="text-2xl font-bold">SLIDESHOW</h1>
            </div>

            {/* Details */}
            <div className="col-span-1 px-5">
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
                <p className="text-lg mb-5 font-bold">${product.price.toFixed(2)}</p>

                {/* Size selector */}
                <SizeSelector sizes={product.sizes} selectedSize={product.sizes[0]} />

                {/* Quantity selector */}

                {/* Button */}
                <button className="btn-primary my-5">Add to Cart</button>

                <h3 className="font-bold text-sm mb-3">Description</h3>
                <p className="font-light text-sm">{product.description}</p>
            </div>
        </div>
    );
}