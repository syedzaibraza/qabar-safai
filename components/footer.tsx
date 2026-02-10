import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-primary font-semibold pt-8">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Section 1: Logo + description */}
          <div>
            <Image src="/logo.png" alt="Qabar Safai" width={150} height={80} />
            <p className="mt-3 text-xl leading-relaxed max-w-xs">
              Professional grave maintenance services with compassion and
              respect. Honoring the memory of your loved ones.
            </p>
          </div>

          {/* Section 2: Quick links */}
          <div>
            <h3 className="mb-3 text-xl font-bold">Quick Links</h3>
            <div className="grid gap-2 font-semibold text-lg">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/packages">Packages</Link>
              <Link href="/locator">Locator</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/reviews">Reviews</Link>
            </div>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h3 className="mb-3 text-xl font-bold">Contact</h3>
            <div className="grid gap-2 font-semibold text-lg">
              <Link href="#">West Hempstead 11552 New York USA</Link>

              <Link href="tel:+923323002235">+92 332 3002235</Link>
              <Link href="mailto:info@qabarsafai.com">info@qabarsafai.com</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 py-2 border-t">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Qabar Safai. All rights reserved.
          </p>
          <div className="flex justify-center items-center gap-2">
            <Link href="/terms-and-conditions">Terms and Condition</Link>|
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
