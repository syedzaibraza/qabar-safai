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
                {isPopular && (

                    <div className="flex items-center justify-center gap-2 mt-2">
                        <p className="text-sm font-bold">Monthly</p>
                        <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 outline-offset-2 outline-primary ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out has-[:checked]:bg-primary has-[:focus-visible]:outline has-[:focus-visible]:outline-2">
                            <span className="size-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5" />
                            <input
                                name="setting"
                                type="checkbox"
                                aria-label="Use setting"
                                className="absolute inset-0 size-full appearance-none focus:outline-none"
                            />
                        </div>
                        <p className="text-sm font-bold">Annually</p>
                    </div>
                )}
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