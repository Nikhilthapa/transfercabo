'use client';

import { useState } from "react";
import Navigation from "@/components/homepage/Navigation";
import Footer from "@/components/homepage/Footer";
import Link from "next/link";

export default function ReservationPage() {
  const [selectedService, setSelectedService] = useState("");
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedService(value);
    setIsRoundTrip(value.toLowerCase().includes("round trip"));
  };

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
            <source src="/background.mp4" type="video/mp4" />
          </video>
          {/* Dark gradient overlay on the left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 flex items-center h-[calc(100vh-100px)] min-h-[400px] md:min-h-[500px]">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-3 lg:mb-4">
              Make Your Reservation
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 md:mb-6 lg:mb-10">
              Experience Stress-Free Travel With Reliable Pickup And Drop-Off Service.
            </p>
            <Link
              href="/cabo/reservation"
              className="inline-block bg-[#0446A1] hover:bg-[#033a8a]  text-white px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 rounded-md font-semibold text-sm md:text-base lg:text-lg transition shadow-lg"
            >
              Book Your Ride Today
            </Link>
          </div>
        </div>
      {/* White strip between video and next section */}
      <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-b from-transparent via-white/85 to-white pointer-events-none z-[50]" />
      </section>

      {/* Lower Content Section */}
      <section className="bg-white py-10 md:py-12 lg:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Montserrat font-semibold text-black uppercase mb-4 md:mb-6 lg:mb-8 px-4">
              BOOK YOUR TRANSFER
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed px-4">
              We offer a wide range of airport transfer services to meet the needs of our clients. Whether you are traveling for business or pleasure, we have the perfect solution for you. Our services include round trip airport transfers, private transfers, and group transfers. Contact us today to learn more about our services and book your transfer.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#fafaf9' }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Notice */}
            <div className="text-center mb-4">
              <p className="text-blue-500 text-sm md:text-base font-semibold mb-2">
                Temporary cash Only!!
              </p>
              <p className="text-gray-700 text-xs md:text-sm">
                To be paid to the Driver upon arrival.
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Montserrat font-semibold text-black text-center mb-6 md:mb-8 lg:mb-12 px-4">
              RESERVATION REQUEST 
            </h1>

            {/* Reservation Form */}
            <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 lg:p-8 xl:p-10">
              <form className="space-y-4 md:space-y-6 lg:space-y-8">
                {/* Service and Passengers Row */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {/* Select Service */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                      Select Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={handleServiceChange}
                      className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    >
                      <option value="">Choose An Option</option>
                      <option value="one-way">One Way Transfer</option>
                      <option value="round-trip">Round Trip Transfer</option>
                      <option value="private">Private Transfer</option>
                      <option value="group">Group Transfer</option>
                    </select>
                  </div>

                  {/* Passengers */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                      Passengers
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
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
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Eg: Jos"
                      className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Eg: Taloir"
                      className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Eg: Name@Gmail.Com"
                    className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                {/* Phone with Country Code */}
                <div className="grid md:grid-cols-12 gap-3 md:gap-4">
                  <div className="md:col-span-3">
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                      Code
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
                      <option value="+52">+52</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+33">+33</option>
                    </select>
                  </div>
                  <div className="md:col-span-9">
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Eg: 9875125"
                      className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Arrival Details */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Here"
                    className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {/* Arrival Date */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                      Arrival Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      />
                    </div>
                  </div>

                  {/* Arrival Time */}
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                      Arrival Time
                    </label>
                    <input
                      type="time"
                      className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Arrival Airline and Flight Number */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                    Arrival Airline And Flight Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Here"
                    className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                {/* Conditional Departure Section */}
                {isRoundTrip && (
                  <div className="space-y-4 md:space-y-6 pt-4 md:pt-6 border-t border-gray-200">
                    <div className="bg-gray-100 p-3 md:p-4 rounded-md">
                      <p className="text-xs md:text-sm text-gray-700">
                        If You Chose Round Trip Transfer, Please Fill Out The Departure Blanks And Click Send Request When You Are Done.
                      </p>
                    </div>

                    {/* Departure Hotel Name */}
                    <div>
                      <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                        Hotel Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Here"
                        className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      />
                    </div>

                    {/* Departure Airline and Flight Number */}
                    <div>
                      <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                        Departure Airline And Flight Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Here"
                        className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      {/* Departure Date */}
                      <div>
                        <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                          Departure Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                          />
                        </div>
                      </div>

                      {/* Departure Time */}
                      <div>
                        <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2">
                          Departure Time
                        </label>
                        <input
                          type="time"
                          className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-3 md:pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#0446A1] hover:bg-[#033a8a] text-white font-semibold py-3 md:py-4 px-4 md:px-6 rounded-md transition duration-200 text-sm md:text-base lg:text-lg shadow-lg"
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

