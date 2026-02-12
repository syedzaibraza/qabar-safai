"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" p-4 bg-white">
      <div className="flex justify-between items-center lg:max-w-4xl xl:max-w-7xl 2xl:max-w-360 mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Qabar-Safai" width={190} height={100} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center items-center gap-6">
          <Link href="/" className="text-2xl font-semibold hover:text-primary">
            Home
          </Link>
          {/* <Link
            href="/about"
            className="text-2xl font-semibold hover:text-primary"
          >
            About Us
          </Link> */}
          <Link
            href="/services"
            className="text-2xl font-semibold hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-semibold hover:text-primary"
          >
            Contact Us
          </Link>
        </nav>

        {/* WhatsApp Button (Hidden on mobile menu open) */}
        <Link
          href="https://wa.me/+923323002235"
          className="hidden md:flex bg-primary items-center gap-2 text-white px-10 py-2 rounded-2xl"
        >
          {/* <Image
            src="/icons/whatsapp.png"
            alt="WhatsApp"
            width={20}
            height={20}
          /> */}
          <p className="text-xl font-bold">Book Now</p>
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-[6px]"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`h-[3px] w-6 bg-black transition-all ${open ? "rotate-45 translate-y-[8px]" : ""
            }`}
        ></span>
        <span
          className={`h-[3px] w-6 bg-black transition-all ${open ? "opacity-0" : ""
            }`}
        ></span>
        <span
          className={`h-[3px] w-6 bg-black transition-all ${open ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
        ></span>
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-xl font-medium"
          >
            Home
          </Link>
          {/* <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-xl font-medium"
          >
            About Us
          </Link> */}
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="text-xl font-medium"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-xl font-medium"
          >
            Contact Us
          </Link>

          <Link
            href="https://wa.me/+923323002235"
            className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            {/* <Image
              src="/icons/whatsapp.png"
              alt="WhatsApp"
              width={20}
              height={20}
            /> */}
            <p>Book Now</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
