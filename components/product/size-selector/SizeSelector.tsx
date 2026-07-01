'use client'

import type { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
    sizes?: Size[];
    selectedSize?: Size;
    onSizeSelected?: (size: Size) => void;
}

export const SizeSelector = ({ sizes, selectedSize, onSizeSelected }: Props) => {
    return (
        <div className="my-5">
            <h3 className="font-bold text-sm mb-4">Select Size</h3>
            <div className="flex gap-2">
                {
                    sizes?.map(size => (
                        <button
                            key={size}
                            className={
                                clsx(
                                    "border rounded-md p-2 transition-all hover:underline",
                                    {
                                        "bg-blue-700 text-white underline": selectedSize === size,
                                        "bg-white text-gray-700": selectedSize !== size
                                    }
                                )
                            }
                            onClick={() => onSizeSelected?.(size)}
                        >
                            {size}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
