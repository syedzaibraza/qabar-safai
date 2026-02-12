"use client";
import { useState } from "react";

type Testimonial = {
    name: string;
    location: string;
    text: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Mohsin Zaheer",
        location: "New York",
        text: "Qabar Safai has been a blessing for our family. They maintain my grandmother's grave with such care and dignity. The before and after photos give us peace of mind.",
    },
    {
        name: "Sarah Ahmed",
        location: "Lahore",
        text: "Professional service with attention to detail. They truly understand the importance of maintaining graves with respect and care.",
    },
    {
        name: "Ahmed Khan",
        location: "Karachi",
        text: "Excellent communication and regular updates. The team is compassionate and dedicated to their work.",
    },
    {
        name: "Fatima Ali",
        location: "Islamabad",
        text: "Highly recommend their services. They treat every grave as if it were their own family member's.",
    },
    {
        name: "Hassan Malik",
        location: "Dubai",
        text: "Outstanding service from start to finish. The quality of work and professionalism is unmatched.",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="bg-[#E3E3E3] px-4 py-14">
            <div className="lg:max-w-4xl xl:max-w-7xl 2xl:max-w-360 mx-auto">
                {/* Title and Subtitle */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                        Clients Testimonials
                    </h2>
                    <p className="text-lg md:text-xl text-primary font-semibold">
                        Hear what our clients say about our services
                    </p>
                </div>

                {/* Testimonial Card Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg
                            className="w-6 h-6 md:w-8 md:h-8 text-primary"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                    {/* Testimonial Card */}
                    <div className="bg-[#F8F5F0] rounded-3xl border border-[#D1D5DB] p-6 md:p-10 mx-12 md:mx-0">
                        {/* Client Name */}
                        <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2">
                            {currentTestimonial.name}
                        </h3>

                        {/* Location */}
                        <p className="text-base md:text-lg text-primary text-center mb-6 font-semibold">
                            {currentTestimonial.location}
                        </p>

                        {/* Testimonial Text */}
                        <div className="text-center mb-6">
                            <p className="text-base md:text-lg text-primary leading-relaxed">

                                {currentTestimonial.text}
                            </p>
                        </div>

                        {/* Star Rating */}
                        <div className="flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <svg
                            className="w-6 h-6 md:w-8 md:h-8 text-primary"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`transition-all ${index === currentIndex
                                ? "w-3 h-3 bg-primary rounded-full"
                                : "w-3 h-3 border-2 border-primary rounded-full bg-transparent"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
