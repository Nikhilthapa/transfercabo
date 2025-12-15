import Image from "next/image";

export default function Contact() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
      {/* Header Section */}
      <div className="text-center mb-8 pb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-Montserrat font-bold text-black mb-3 md:mb-4">Get In Touch</h2>
        <p className=" font-Montserrat font-medium text-[#6f6f6f] text-sm md:text-base px-4">
          Contact us anytime for bookings, questions, or custom travel plans across Los Cabos.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - Send Message Form */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
              />
              <textarea
                placeholder="Tell us about your trip..."
                rows={4}
                className="w-full border border-gray-300 rounded-3xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base resize-none"
              />
              <button 
                type="button"
                className="w-full bg-[#0446a1] hover:bg-[#033a8a] text-white px-8 py-3 rounded-full font-semibold transition text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Social Media */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="bg-blue-200 p-2.5 rounded-full flex-shrink-0">
                    <div className="w-5 h-5 relative">
                      <Image
                        src="/contact/phone.png"
                        alt="Phone"
                        fill
                        className="object-contain"
                        quality={85}
                        sizes="20px"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Phone</p>
                    <p className="text-gray-700 text-sm">+52 (624) 182 0525</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="bg-blue-200 p-2.5 rounded-full flex-shrink-0">
                    <div className="w-5 h-5 relative">
                      <Image
                        src="/contact/message.png"
                        alt="Email"
                        fill
                        className="object-contain"
                        quality={85}
                        sizes="20px"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Email</p>
                    <p className="text-gray-700 text-sm">rodriguez1269@outlook.es</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="bg-blue-200 p-2.5 rounded-full flex-shrink-0">
                    <div className="w-5 h-5 relative">
                      <Image
                        src="/contact/location.png"
                        alt="Location"
                        fill
                        className="object-contain"
                        quality={85}
                        sizes="20px"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Location</p>
                    <p className="text-gray-700 text-sm">Cabo San Lucas</p>
                    <p className="text-gray-700 text-sm">Baja California Sur, Mexico</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="bg-blue-200 p-2.5 rounded-full flex-shrink-0">
                    <div className="w-5 h-5 relative">
                      <Image
                        src="/contact/time.png"
                        alt="Hours"
                        fill
                        className="object-contain"
                        quality={85}
                        sizes="20px"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Hours</p>
                    <p className="text-gray-700 text-sm">24/7 Service Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="bg-white p-6 rounded-xl flex gap-4 justify-start items-center shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] mt-8">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 inline-block"
              >
                <Image
                  src="/socialmedia/insta.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="object-contain w-8 h-8 md:w-10 md:h-10"
                  quality={85}
                  sizes="(max-width: 768px) 32px, 40px"
                />
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 relative">
                  <Image
                    src="/socialmedia/facebook.png"
                    alt="Facebook"
                    fill
                    className="object-contain"
                    quality={85}
                    sizes="(max-width: 768px) 32px, 40px"
                  />
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 relative">
                  <Image
                    src="/socialmedia/linkedin.png"
                    alt="LinkedIn"
                    fill
                    className="object-contain"
                    quality={85}
                    sizes="(max-width: 768px) 32px, 40px"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}

