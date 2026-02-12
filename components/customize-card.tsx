"use client";
import { useState, useMemo } from "react";

type SubscriptionType = "monthly" | "annually" | "once";

type Service = {
    name: string;
    price: number;
};

const services: Service[] = [
    { name: "Stone Cleaning", price: 5 },
    { name: "Debris Removal", price: 5 },
    { name: "Clay Layering", price: 5 },
    { name: "Flowering", price: 5 },
    { name: "Weed / Grass Removal", price: 5 },
    { name: "Before & After Photo", price: 5 },
    { name: "Live 20 Min Video Call", price: 10 },
];

const subscriptionTypes: SubscriptionType[] = ["monthly", "annually", "once"];
const subscriptionLabels = { monthly: "Monthly", annually: "Annually", once: "Once" };

const CustomizeCard = () => {
    const [selectedServices, setSelectedServices] = useState<Set<string>>(
        new Set(services.slice(0, 4).map((s) => s.name))
    );
    const [subscriptionType, setSubscriptionType] = useState<SubscriptionType>("monthly");

    const toggleService = (serviceName: string) => {
        setSelectedServices((prev) => {
            const next = new Set(prev);
            if (next.has(serviceName)) {
                next.delete(serviceName);
            } else {
                next.add(serviceName);
            }
            return next;
        });
    };

    const price = useMemo(() => {
        const basePrice = Array.from(selectedServices).reduce((total, name) => {
            const service = services.find((s) => s.name === name);
            return total + (service?.price || 0);
        }, 0);
        return subscriptionType === "annually" ? basePrice * 10 : basePrice;
    }, [selectedServices, subscriptionType]);

    const handleChoosePackage = () => {
        console.log({
            selectedServices: Array.from(selectedServices),
            price,
            subscriptionType,
        });
    };

    return (
        <div className="bg-background flex items-center gap-6 h-full flex-col justify-center rounded-3xl border-4 px-4 py-6 w-[320px] min-w-[320px] text-left border-primary">
            <div className="text-center w-full">
                <h1 className="text-4xl text-center font-bold">Customize</h1>
                <h1 className="text-4xl font-semibold">${price}</h1>

                <div className="flex items-center justify-center gap-3 mt-4">
                    {subscriptionTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="subscription"
                                checked={subscriptionType === type}
                                onChange={() => setSubscriptionType(type)}
                                className="sr-only"
                            />
                            <div
                                className={`w-4 h-4 rounded-full flex items-center justify-center bg-zinc-300`}
                            >
                                {subscriptionType === type && (
                                    <div className="size-2.5 rounded-full bg-primary" />
                                )}
                            </div>
                            <span
                                className={`text-base font-bold transition-colors ${subscriptionType === type ? "text-primary" : "text-gray-400"
                                    }`}
                            >
                                {subscriptionLabels[type]}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-start w-full mb-6 space-y-2 mt-4">
                {services.map((service) => {
                    const isChecked = selectedServices.has(service.name);
                    return (
                        <label
                            key={service.name}
                            className="flex items-center gap-2 font-semibold text-lg cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleService(service.name)}
                                className="sr-only"
                            />
                            <div
                                className={`size-5 rounded flex items-center justify-center transition-colors bg-zinc-300`}
                            >
                                {isChecked && (
                                    <svg
                                        className="size-4 text-primary"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                )}
                            </div>
                            <span className={`font-semibold text-xl transition-colors ${isChecked ? "text-primary" : "text-gray-600"
                                }`}>
                                {service.name}
                            </span>
                        </label>
                    );
                })}
            </div>

            <button
                onClick={handleChoosePackage}
                className="w-fit px-4 py-2 flex items-center justify-center rounded-xl cursor-pointer bg-primary text-white hover:bg-primary/90  text-lg font-semibold transition-colors hover:shadow-lg"
            >
                Choose Package
            </button>
        </div>
    );
};

export default CustomizeCard;
