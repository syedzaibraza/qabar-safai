import Packages from "@/components/home/packages";
import ResentWork from "@/components/home/resentWork";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import WhyChosen from "@/components/home/whychosen";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section className="relative min-h-[65vh] grid place-items-center px-4 overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Qabar-Safai-Cover.mp4" type="video/mp4" />
        </video>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative text-center space-y-6 text-white">
          <h1 className="text-7xl font-semibold max-w-3xl">
            Don&apos;t Forget To Take Care Of Your Deceased
          </h1>
          <p className="mx-auto text-3xl font-semibold">
            Honor their memory with our professional grave care services
          </p>
          <div />
          <Link href="#" className="px-8 py-3 bg-stone-100 rounded-2xl text-primary text-2xl font-bold cursor-pointer">Book our services</Link>
        </div>
      </section>

      <Services />
      <Packages />
      <ResentWork />
      <WhyChosen />
      <Testimonials />
    </div>
  );
}
