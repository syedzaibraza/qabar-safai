import { Package } from "@/utils/types";
import Image from "next/image";
import React from "react";

type CardProps = {
    item: Package;
};

const Card = ({ item }: CardProps) => {
    const { name, price, isPopular, services } = item;

    return (
        <div
            className={`relative z-0 bg-background flex items-center gap-6 h-full flex-col justify-center  rounded-3xl border-2 px-4 py-6 w-3xs text-left ${isPopular ? "border-primary" : "border-gray-300"
                }`}
        >
            {isPopular && (
                <span className="absolute z-50 -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs text-white">
                    POPULAR
                </span>
            )}
            <div className="text-center">
                <h1 className="text-4xl text-center font-bold">
                    {name}
                </h1>
                <h1 className="text-4xl font-semibold">
                    ${price}
                </h1>
            </div>

            <div className="flex flex-col justify-start w-full mb-6 space-y-2">
                {services.map((service) => (
                    <p key={service} className="flex items-baseline gap-1 font-semibold text-lg">
                        <Image src="/icons/tick.png" alt="tick" width={10} height={10} />
                        <p>{service}</p>
                    </p>
                ))}
            </div>

            <button className={`w-fit flex items-center justify-center rounded-xl cursor-pointer ${isPopular ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary"}  px-6 py-1 text-md font-semibold transition-colors hover:shadow`}>
                Choose Package
            </button>

        </div>
    );
};

export default Card;