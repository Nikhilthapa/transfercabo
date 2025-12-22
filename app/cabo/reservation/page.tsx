'use client';

import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Handle scroll to form section when page loads with hash
    if (window.location.hash === '#reservation-form') {
      setTimeout(() => {
        const element = document.getElementById('reservation-form');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] md:h-[100vh] overflow-hidden">
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
          {/* White gradient shadow at the top */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent pointer-events-none" />
          {/* White gradient shadow at the bottom - smooth transition overlapping video edge */}
          <div 
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '150px',
              background: `linear-gradient(to top, 
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0.99) 5%,
                rgba(255, 255, 255, 0.97) 10%,
                rgba(255, 255, 255, 0.94) 15%,
                rgba(255, 255, 255, 0.90) 20%,
                rgba(255, 255, 255, 0.85) 25%,
                rgba(255, 255, 255, 0.78) 30%,
                rgba(255, 255, 255, 0.70) 35%,
                rgba(255, 255, 255, 0.60) 42%,
                rgba(255, 255, 255, 0.50) 50%,
                rgba(255, 255, 255, 0.40) 58%,
                rgba(255, 255, 255, 0.30) 65%,
                rgba(255, 255, 255, 0.22) 72%,
                rgba(255, 255, 255, 0.15) 78%,
                rgba(255, 255, 255, 0.10) 84%,
                rgba(255, 255, 255, 0.06) 90%,
                rgba(255, 255, 255, 0.03) 95%,
                rgba(255, 255, 255, 0.01) 98%,
                rgba(255, 255, 255, 0) 100%
              )`
            }}
          />
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 flex items-center h-[calc(80vh-80px)] md:h-[calc(100vh-100px)] min-h-[400px] md:min-h-[500px]">
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
      {/* White strip between video and next section - overlapping video edge to hide line */}
      <div 
        className="absolute -bottom-2 left-0 right-0 pointer-events-none z-[50]"
        style={{
          height: '120px',
          background: `linear-gradient(to bottom, 
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.02) 5%,
            rgba(255, 255, 255, 0.05) 10%,
            rgba(255, 255, 255, 0.10) 18%,
            rgba(255, 255, 255, 0.18) 28%,
            rgba(255, 255, 255, 0.28) 38%,
            rgba(255, 255, 255, 0.40) 48%,
            rgba(255, 255, 255, 0.52) 58%,
            rgba(255, 255, 255, 0.64) 68%,
            rgba(255, 255, 255, 0.75) 78%,
            rgba(255, 255, 255, 0.84) 86%,
            rgba(255, 255, 255, 0.91) 92%,
            rgba(255, 255, 255, 0.96) 96%,
            rgba(255, 255, 255, 0.99) 98%,
            rgba(255, 255, 255, 1) 100%
          )`
        }}
      />
      </section>

      {/* Lower Content Section */}
      <section className="bg-white pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-6 sm:pb-8 md:pb-12 lg:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-Montserrat font-semibold text-black uppercase mb-[15px] sm:mb-[20px] md:mb-[25px] px-4">
              BOOK YOUR TRANSFER
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed px-4">
              We offer a wide range of airport transfer services to meet the needs of our clients. Whether you are traveling for business or pleasure, we have the perfect solution for you. Our services include round trip airport transfers, private transfers, and group transfers. Contact us today to learn more about our services and book your transfer.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="reservation-form" className="py-6 sm:py-8 md:py-12 lg:py-20 mb-[50px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px]" style={{ backgroundColor: '#fafaf9' }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Notice */}
            <div className="text-center mb-[15px] sm:mb-[18px] md:mb-[20px]">
              <p className="text-[#0446A1]  text-sm md:text-base font-semibold mb-2">
                Temporary cash Only!! <br /> To be paid to the Driver upon arrival.
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Montserrat font-semibold text-black text-center mb-[35px] sm:mb-[45px] md:mb-[55px] lg:mb-[59px] px-4">
              RESERVATION REQUEST 
            </h1>

            {/* Reservation Form */}
            <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 lg:p-8 xl:p-10">
              <form className="space-y-4 md:space-y-5 lg:space-y-[30px]">
                {/* Service and Passengers Row */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {/* Select Service */}
                  <div>
                    <label className="block font-montserrat font-semibold mb-2">
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
                    <label className="block font-montserrat font-semibold mb-2">
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
                <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block font-montserrat font-semibold mb-2">
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
                    <label className="block font-montserrat font-semibold mb-2">
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
                  <label className="block font-montserrat font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Eg: Name@Gmail.Com"
                    className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                {/* Phone with Country Code */}
                <div className="grid md:grid-cols-12 gap-3 sm:gap-3.5 md:gap-4">
                  <div className="md:col-span-3">
                    <label className="block font-montserrat font-semibold mb-2">
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
                    <label className="block font-montserrat font-semibold mb-2">
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
                  <label className="block font-montserrat font-semibold mb-2">
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Here"
                    className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {/* Arrival Date */}
                  <div>
                    <label className="block font-montserrat font-semibold mb-2">
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
                    <label className="block font-montserrat font-semibold mb-2">
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
                  <label className="block font-montserrat font-semibold mb-2">
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
                  <div className="space-y-4 md:space-y-5 lg:space-y-[30px] pt-4 md:pt-6 border-t border-gray-200">
                    <div className="bg-gray-100 p-3 md:p-4 rounded-md">
                      <p className="text-xs md:text-sm text-gray-700">
                        If You Chose Round Trip Transfer, Please Fill Out The Departure Blanks And Click Send Request When You Are Done.
                      </p>
                    </div>

                    {/* Departure Hotel Name */}
                    <div>
                        <label className="block font-montserrat font-semibold mb-2">
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
                      <label className="block font-montserrat font-semibold mb-2">
                        Departure Airline And Flight Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Here"
                        className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      {/* Departure Date */}
                      <div>
                          <label className="block font-montserrat font-semibold mb-2">
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
                        <label className="block font-montserrat font-semibold mb-2">
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

                {/* Instruction Section */}
                <div className="bg-gray-100 border border-gray-300 rounded-md p-4 md:p-5 text-center">
                  <p className="text-xs md:text-sm text-gray-700">
                    If You Chose Round Trip Transfer, Please Fill Out The Departure Blanks And<br />
                    Click Send Request When You Are Done.
                  </p>
                </div>

                {/* Round Trip Fields Section */}
                <div className="space-y-4 md:space-y-5 lg:space-y-[30px]">
                    {/* Hotel Name */}
                    <div>
                      <label className="block font-montserrat font-semibold mb-2">
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
                      <label className="block font-montserrat font-semibold mb-2">
                        Departure Airline And Flight Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Here"
                        className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      {/* Departure Date */}
                      <div>
                        <label className="block font-montserrat font-semibold mb-2">
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
                        <label className="block font-montserrat font-semibold mb-2">
                          Departure Time
                        </label>
                        <input
                          type="time"
                          className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                        />
                      </div>
                    </div>

                    {/* Add Grocery Stop */}
                    <div>
                      <label className="block font-montserrat font-semibold mb-2">
                        Add Grocery Stop 1/2 Hr = 25.00 Usd
                      </label>
                      <select className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
                        <option value="">Choose An Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                </div>

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

