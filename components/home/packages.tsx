"use client";
import { useState } from "react";
import Card from "../card";
import CustomizeCard from "../customize-card";
import { Package } from "@/utils/types";



const Packages = () => {
    const [selected, setSelected] = useState<"choose" | "custom">("choose");
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

    return (
        <section className='bg-[#E9E9E9] text-center px-4 py-14'>
            <div className="max-w-7xl mx-auto">
                <div>
                    <h1 className='text-5xl mb-2'>Our Packages</h1>
                    <p className='text-lg font-bold'>Choose the package that best fits your needs</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => setSelected("choose")}
                        className={`rounded-xl cursor-pointer px-4 py-2 font-semibold transition-all duration-200 ${selected === "choose"
                            ? "bg-primary text-white text-xl shadow-md"
                            : "bg-white text-primary text-lg hover:bg-primary/10"
                            }`}
                    >
                        Choose Package
                    </button>
                    <button
                        type="button"
                        onClick={() => setSelected("custom")}
                        className={`rounded-xl cursor-pointer px-4 py-2 font-semibold transition-all duration-200 ${selected === "custom"
                            ? "bg-primary text-white text-xl shadow-md"
                            : "bg-white text-primary text-lg hover:bg-primary/10"
                            }`}
                    >
                        Customize Package
                    </button>
                </div>
                <div className="mt-10 flex items-center justify-center gap-4">
                    {selected === "choose" ? (
                        packages.map((p) => (
                            <Card key={p.name} item={p} />
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