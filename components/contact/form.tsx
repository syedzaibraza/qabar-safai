
const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {/* .div3 - Full name (full width) */}
        <div className="md:col-span-2">
          <label className="block text-lg font-semibold mb-1" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60"
            placeholder="Enter your full name"
          />
        </div>

        {/* .div1 - Email (left) */}
        <div>
          <label className="block text-lg font-semibold mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60"
            placeholder="you@example.com"
          />
        </div>

        {/* .div2 - Phone (right) */}
        <div>
          <label className="block text-lg font-semibold mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60"
            placeholder="+92 300 0000000"
          />
        </div>

        {/* .div4 - Subject (full width) */}
        <div className="md:col-span-2">
          <label className="block text-lg font-semibold mb-1" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60"
            placeholder="How can we help you?"
          />
        </div>

        {/* .div6 - Message (full width) */}
        <div className="md:col-span-2">
          <label className="block text-lg font-semibold mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60"
            placeholder="Share any details or special requests..."
          />
        </div>
      </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Send Message
        </button>
    </form>
  );
};

export default ContactForm;