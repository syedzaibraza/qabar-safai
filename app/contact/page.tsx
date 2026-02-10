import ContactForm from "@/components/contact/form";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section className="relative min-h-[65vh] grid place-items-center px-4 bg-[url('/banners/contact.png')] bg-cover bg-center bg-no-repeat">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center space-y-3 text-white">
          <h1 className="text-5xl font-semibold">Get In Touch</h1>
          <p className="max-w-xl mx-auto text-2xl font-semibold">
            We&apos;re here to help you honor and remember your loved ones
          </p>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full bg-white shadow rounded-3xl p-8 flex flex-col gap-4">
            <div className="font-semibold text-4xl">Send Us a Message</div>
            <p className="text-lg font-semibold">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible
            </p>
            <ContactForm />
          </div>

          <div className="flex flex-col text-center justify-center items-center gap-10">
            <h1 className="text-4xl font-semibold">Contact Information</h1>


            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-sm rounded-xl p-3">
                <div className="p-1.5 shadow rounded-lg">
                  <Image
                    src="/icons/phone.png"
                    alt="Phone"
                    height={18}
                    width={18}
                  />
                </div>
                <h1 className="text-xl font-semibold">+92 332 300 2235</h1>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-sm rounded-xl p-3">

                <div className="p-1.5 shadow rounded-lg">
                  <Image
                    src="/icons/mail.png"
                    alt="E-Mail"
                    height={18}
                    width={18}
                  />
                </div>
                <h1 className="text-xl font-semibold">info@qabarsafai.com</h1>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-sm rounded-xl p-3">

                <div className="p-1.5 shadow rounded-lg">
                  <Image
                    src="/icons/mappin.png"
                    alt="Location"
                    height={18}
                    width={18}
                  />
                </div>
                <h1 className="text-xl  font-semibold flex flex-col">
                  <span>West Hempstead 11552</span>
                  <span>NewYork USA</span>
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 bg-white shadow-sm rounded-xl p-3">
                <div className="p-1.5 shadow rounded-lg">
                  <Image
                    src="/icons/clock.png"
                    alt="Clock"
                    height={18}
                    width={18}
                  />
                </div>
                <h1 className="text-xl  font-semibold flex flex-col">
                  <span>Monday - Sunday</span>
                  <span>(24/7)</span>
                </h1>
              </div>
            </div>
            <p className="text-lg  font-semibold">
              Reach out to us through any of the following methods. We&apos;re
              available to assist you with compassion and care.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 text-white py-14 bg-primary flex flex-col justify-center items-center gap-5">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Need Immediate Assistance?</h1>
          <p className="font-semibold text-xl">Our compassionate team is available 24/7 to support you during difficult times</p>
        </div>
        <button
          type="submit"
          className="cursor-pointer bg-white text-primary font-semibold px-6 py-1 rounded-md"
        >
          Call Us Now
        </button>
      </section>
    </>
  );
};

export default Contact;
