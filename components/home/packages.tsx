"use client";
import { useState } from "react";
import Card from "../card";
import CustomizeCard from "../customize-card";
import { Package } from "@/utils/types";



const Packages = () => {
    const [selected, setSelected] = useState<"choose" | "custom">("choose");
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");
    const packages: Package[] = [
        {
            name: "Basic",
            price: 25,
            isPopular: false,
            services: [
                "Stone Cleaning",
                "Debris Removal",
                "Clay Layering",
                "Flowering",
                "Weed / Grass Removal",
                "Before & After Photo"
            ]
        },
        {
            name: "Premium",
            price: 99,
            isPopular: true,
            services: [
                "Stone Cleaning",
                "Debris Removal",
                "Clay Layering",
                "Flowering",
                "Weed / Grass Removal",
                "Before & After Photo",
                "Live 20 Min Video Call"
            ]
        },
    ];

    // Calculate price based on billing period (annual = monthly * 10 for 2 months discount)
    const getPrice = (monthlyPrice: number) => {
        return billingPeriod === "annually" ? monthlyPrice * 10 : monthlyPrice;
    };

    return (
        <section className='bg-[#E9E9E9] text-center px-4 py-14'>
            <div className=" lg:max-w-4xl xl:max-w-7xl 2xl:max-w-360 mx-auto">
                <div>
                    <h1 className='text-4xl md:text-7xl font-bold text-primary mb-3'>Our Packages</h1>
                    <p className='text-xl font-bold'>Choose the package that best fits your needs</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => setSelected("choose")}
                        className={`rounded-lg cursor-pointer px-6 py-2.5 shadow-xl font-bold transition-all duration-200 ${selected === "choose"
                            ? "bg-primary text-white text-2xl "
                            : "bg-white text-primary text-xl  hover:bg-primary/10 "
                            }`}
                    >
                        Choose Package
                    </button>
                    <button
                        type="button"
                        onClick={() => setSelected("custom")}
                        className={`rounded-lg cursor-pointer px-6 py-2.5 shadow-xl font-bold transition-all duration-200 ${selected === "custom"
                            ? "bg-primary text-white text-2xl"
                            : "bg-white text-primary text-xl  hover:bg-primary/10"
                            }`}
                    >
                        Customize Package
                    </button>
                </div>

                <div className="mt-10 flex items-center justify-center gap-4">
                    {selected === "choose" ? (
                        packages.map((p) => (
                            <Card
                                key={p.name}
                                item={p}
                                billingPeriod={billingPeriod}
                                onBillingPeriodChange={setBillingPeriod}
                                displayPrice={p.isPopular ? getPrice(p.price) : p.price}
                            />
                        ))
                    ) : (
                        <CustomizeCard />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Packages