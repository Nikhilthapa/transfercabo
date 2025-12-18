import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="container mx-auto px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Montserrat font-bold text-black mb-2 sm:mb-3">Get In Touch</h2>
        <p className="font-Montserrat font-medium text-[#6f6f6f] text-xs sm:text-sm md:text-base px-4 mb-6 sm:mb-8">
          Contact us anytime for bookings, questions, or custom travel plans across Los Cabos.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 md:items-stretch gap-4 sm:gap-6 md:gap-10">
          {/* Left Column - Send Message Form */}
          <div className="bg-white rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] p-4 sm:p-6 md:p-8 flex flex-col md:col-span-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">Send Us a Message</h3>
            <form className="space-y-4">
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
                className="w-full bg-[#0446a1] hover:bg-[#033a8a] text-white px-8 py-3 rounded-full font-semibold transition text-sm md:text-base mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Social Media */}
          <div className="flex flex-col md:h-full gap-4 sm:gap-5 md:gap-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-blue-200 p-2 sm:p-2.5 rounded-full flex-shrink-0 mt-0.5">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                      <Image
                        src="/contact/phone.png"
                        alt="Phone"
                        fill
                        className="object-contain"
                        quality={85}
                        sizes="(max-width: 640px) 16px, 20px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-black mb-1 text-xs sm:text-sm md:text-base">Phone</p>
                    <p className="text-gray-700 text-xs sm:text-sm break-words">+52 (624) 182 0525</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-blue-200 p-2 sm:p-2.5 rounded-full flex-shrink-0 mt-0.5">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                      <Image
                        src="/contact/message.png"
                        alt="Email"
                        fill
                        className="object-contain"
                        quality={85}
                        sizes="(max-width: 640px) 16px, 20px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-black mb-1 text-xs sm:text-sm md:text-base">Email</p>
                    <p className="text-gray-700 text-xs sm:text-sm break-words break-all">bookingcheaptransferscabo@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-blue-200 p-2 sm:p-2.5 rounded-full flex-shrink-0 mt-0.5">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                      <Image
                        src="/contact/location.png"
                        alt="Location"
                        fill
                        className="object-contain"
                        quality={85}
                        sizes="(max-width: 640px) 16px, 20px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-black mb-1 text-xs sm:text-sm md:text-base">Location</p>
                    <p className="text-gray-700 text-xs sm:text-sm">Cabo San Lucas</p>
                    <p className="text-gray-700 text-xs sm:text-sm">Baja California Sur, Mexico</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-blue-200 p-2 sm:p-2.5 rounded-full flex-shrink-0 mt-0.5">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 relative">
                      <Image
                        src="/contact/time.png"
                        alt="Hours"
                        fill
                        className="object-contain"
                        quality={85}
                        sizes="(max-width: 640px) 16px, 20px"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-black mb-1 text-xs sm:text-sm md:text-base">Hours</p>
                    <p className="text-gray-700 text-xs sm:text-sm">24/7 Service Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="bg-white rounded-xl flex justify-center sm:justify-start items-center shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] py-4 sm:py-5 md:py-6 lg:py-8 md:mt-auto px-4 sm:px-6 md:px-8 gap-3 sm:gap-4 md:gap-6 lg:gap-10">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#instagram-gradient)"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}

