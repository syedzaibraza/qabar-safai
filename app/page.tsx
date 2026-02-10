import Services from "@/components/home/services";

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
        <div className="relative text-center space-y-3 text-white">
          <h1 className="text-5xl font-semibold max-w-xl">
            Don&apos;t Forget To Take Care Of Your Deceased
          </h1>
          <p className="mx-auto text-2xl font-semibold">
            Honor their memory with our professional grave care services
          </p>
        </div>
      </section>

      <Services />
    </div>
  );
}
