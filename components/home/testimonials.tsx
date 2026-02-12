"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    return (
        <section className="bg-[#E6E9EC] px-4 py-14">
            <div className="lg:max-w-4xl xl:max-w-7xl 2xl:max-w-360 mx-auto">
                {/* Title and Subtitle */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#6B808F] mb-3">
                        Clients Testimonials
                    </h2>
                    <p className="text-lg md:text-xl text-[#6B808F] font-semibold">
                        Hear what our clients say about our services
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".swiper-button-prev-custom",
                            nextEl: ".swiper-button-next-custom",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".swiper-pagination-custom",
                            bulletClass: "swiper-pagination-bullet-custom",
                            bulletActiveClass: "swiper-pagination-bullet-active-custom",
                        }}
                        className="pb-0"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="max-w-5xl mx-auto bg-[#F8F8F5] rounded-2xl text-center border border-[#A9BCC7] p-6 md:p-10">
                                    <h3 className="text-2xl xl:text-4xl font-semibold text-primary text-center mb-1">
                                        {testimonial.name}
                                    </h3>

                                    <p className="text-base md:text-xl font-semibold text-primary text-center mb-6">
                                        {testimonial.location}
                                    </p>
                                    <div className="mb-6">
                                        <p className="text-center md:text-4xl text-primary leading-relaxed font-normal">
                                            {testimonial.text}
                                        </p>
                                    </div>

                                    <div className="flex justify-center gap-1 mb-6">
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
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Arrows */}
                    <button
                        className="swiper-button-prev-custom absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-10 text-[#6B808F] hover:text-[#5a6f7e] transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg
                            className="w-6 h-6 md:w-8 md:h-8"
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

                    <button
                        className="swiper-button-next-custom absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-10 text-[#6B808F] hover:text-[#5a6f7e] transition-colors"
                        aria-label="Next testimonial"
                    >
                        <svg
                            className="w-6 h-6 md:w-8 md:h-8"
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

                {/* Custom Pagination Dots - Separate below the slide */}
                <div className="swiper-pagination-custom mt-8"></div>
            </div>

            <style jsx global>{`
                .swiper-pagination-custom {
                    position: relative !important;
                    bottom: -20px !important;
                    left: auto !important;
                    transform: none !important;
                    width: 100% !important;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                    gap: 8px !important;
                    margin-top: 0 !important;
                    padding-top: 0 !important;
                    z-index: 10 !important;
                }

                .swiper-pagination-bullet-custom {
                    width: 8px !important;
                    height: 8px !important;
                    background: #A9BCC7 !important;
                    opacity: 1 !important;
                    border-radius: 50% !important;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 0 !important;
                    display: inline-block !important;
                }

                .swiper-pagination-bullet-active-custom {
                    background: #6B808F !important;
                    width: 8px !important;
                    height: 8px !important;
                }

                .swiper-button-prev-custom.swiper-button-disabled,
                .swiper-button-next-custom.swiper-button-disabled {
                    opacity: 0.35;
                    cursor: auto;
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .swiper-button-prev-custom,
                    .swiper-button-next-custom {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
