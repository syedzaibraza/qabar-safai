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
        <div className="relative z-0 bg-background flex items-center gap-6 h-full flex-col justify-center rounded-3xl border-2 px-4 py-6 w-2xs text-left border-primary">
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
                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${subscriptionType === type
                                    ? "border-primary bg-primary"
                                    : "border-gray-300 bg-transparent"
                                    }`}
                            >
                                {subscriptionType === type && (
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                )}
                            </div>
                            <span
                                className={`text-sm font-bold transition-colors ${subscriptionType === type ? "text-primary" : "text-gray-400"
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
                                className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${isChecked
                                    ? "border-primary bg-primary"
                                    : "border-gray-300 bg-transparent"
                                    }`}
                            >
                                {isChecked && (
                                    <svg
                                        className="size-3 text-white"
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
                            <span className={isChecked ? "text-primary" : "text-gray-600"}>
                                {service.name}
                            </span>
                        </label>
                    );
                })}
            </div>

            <button
                onClick={handleChoosePackage}
                className="w-fit flex items-center justify-center rounded-xl cursor-pointer bg-primary text-white hover:bg-primary/90 px-6 py-1 text-md font-semibold transition-colors hover:shadow"
            >
                Choose Package
            </button>
        </div>
    );
};

export default CustomizeCard;
