'use client';

import Navigation from "@/components/homepage/Navigation";
import Footer from "@/components/homepage/Footer";
import Link from "next/link";

export default function ActivityReservationPage() {

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[120vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/activitybackground.mp4" type="video/mp4" />
          </video>
          {/* Dark gradient overlay on the left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 flex items-center h-[calc(100vh-100px)] min-h-[500px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
              Make Your Reservation
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-10">
            Complete your booking quickly and enjoy reliable, private, and comfortable service with Cheap Transfers Cabo.
            </p>
            <Link
              href="/activity/reservation"
              className="inline-block bg-[#0446A1] hover:bg-[#033a8a]  text-white px-8 md:px-10 py-3 md:py-4 rounded-md font-semibold text-base md:text-lg transition shadow-lg"
            >
              Book Activities
            </Link>
          </div>
        </div>
        {/* White strip between video and next section */}
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-white/85 to-white pointer-events-none z-[50]" />
      </section>

      {/* Lower Content Section */}
      <section className="bg-white mb-[100px] mt-[70px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-Montserrat font-semibold text-black uppercase mb-[25px]">
              BOOK YOUR ACTIVITIES
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We offer a wide range of Tours and Activities to better assis our Dear Clients. Whether you are traveling for business or pleasure, we have the perfect solution for you. Our services include a very nice inventory, designed just for you. Contact us today to learn more so you can book your Activities.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-[60px] mb-[100px]" style={{ backgroundColor: '#fafaf9' }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Notice */}
            <div className="text-center mb-[20px]">
              <p className="text-sm md:text-base text-[#0446A1] font-semibold mb-2">
                Temporary cash Only!! <br />
                To be paid to the Driver upon arrival.
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl  font-Montserrat font-semibold text-black text-center mb-[59px]">
              RESERVATION REQUEST
            </h1>

            {/* Reservation Form */}
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10">
              <form className="space-y-4 md:space-y-5 lg:space-y-[30px]">
                {/* Tour and Passengers Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Select Tour */}
                  <div>
                    <label className="block text-sm font-[600] text-gray-700 mb-2">
                      Select Tour
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
                      <option value="">Choose An Option</option>
                      <option value="la-paz">La Paz</option>
                      <option value="atvs">ATV's</option>
                      <option value="art-walk">Art Walk</option>
                      <option value="horseback-riding">Horseback Riding</option>
                      <option value="todos-santos">Todos Santos</option>
                      <option value="cerritos">Cerritos Beach</option>
                      <option value="los-cabos">Los Cabos</option>
                      <option value="hidden-towns">Hidden Towns</option>
                    </select>
                  </div>

                  {/* Passengers */}
                  <div>
                    <label className="block text-sm font-[600] text-gray-700 mb-2">
                      Passengers
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
                      <option value="">Select Passengers</option>
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5">5 Passengers</option>
                      <option value="6">6+ Passengers</option>
                    </select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-[600] text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Eg: Jos"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-[600] text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Eg: Taloir"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-[600] text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Eg: Name@Gmail.Com"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                {/* Phone with Country Code */}
                <div className="grid md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <label className="block text-sm font-[600] text-gray-700 mb-2">
                      Code
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
                      <option value="+52">+52</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+33">+33</option>
                    </select>
                  </div>
                  <div className="md:col-span-9">
                    <label className="block text-sm font-[600] text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Eg: 9875125"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Hotel & Room Number */}
                <div>
                  <label className="block text-sm font-[600] text-gray-700 mb-2">
                    Hotel & Room Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Hotel & Room Number"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                {/* Activity Date */}
                <div>
                  <label className="block text-sm font-[600] text-gray-700 mb-2">
                    Activity Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-[600] text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter Your Message"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#0446A1] hover:bg-[#033a8a] text-white font-semibold py-4 px-6 rounded-md transition duration-200 text-base md:text-lg shadow-lg"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

