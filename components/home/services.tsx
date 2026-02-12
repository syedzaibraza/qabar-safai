import Image from "next/image";
import React from "react";

const Services = () => {
    const services = [
        {
            image: "/services/1.png",
            title: "Stone Cleaning",
        },
        {
            image: "/services/2.png",
            title: "Debris Removal",
        },
        {
            image: "/services/3.png",
            title: "Clay Layering",
        },
        {
            image: "/services/4.png",
            title: "Flowering",
        },
        {
            image: "/services/5.png",
            title: "Weed / Grass Removal",
        },
        {
            image: "/services/6.png",
            title: "Before & After Photo",
        },
        {
            image: "/services/7.png",
            title: "Live 20 Min Video Call",
        },
    ];

    const topRow = services.slice(0, 4);
    const bottomRow = services.slice(4);

    return (
        <section className="py-16 mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-360">
            <h2 className="md:text-7xl text-primary mb-6 text-center">
                Our Services
            </h2>

            <div className="space-y-3.5">
                {/* Top row: 4 items spread out */}
                <div className="grid grid-cols-2 gap-10 place-items-center md:grid-cols-4 md:gap-12">
                    {topRow.map((s, i) => (
                        <div
                            key={s.title}
                            className="flex flex-col items-center gap-4"
                        >
                            <Image
                                src={s.image}
                                alt={s.title}
                                width={140}
                                height={140}
                            />
                            <div className="text-3xl font-bold">
                                {s.title}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom row: 3 items centered */}
                <div className="flex flex-wrap justify-evenly items-baseline gap-10 md:gap-12">
                    {bottomRow.map((s) => (
                        <div
                            key={s.title}
                            className="flex flex-col items-center gap-4"
                        >
                            <Image
                                src={s.image}
                                alt={s.title}
                                width={140}
                                height={140}
                            />
                            <h3 className="text-3xl font-bold">
                                {s.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;