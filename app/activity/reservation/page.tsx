'use client';

import { useEffect } from "react";
import Navigation from "@/components/homepage/Navigation";
import Footer from "@/components/homepage/Footer";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function ActivityReservationPage() {
  const { t } = useI18n();
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
            <source src="/activitybackground.mp4" type="video/mp4" />
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
        <div className="relative z-10 container mx-auto px-4 md:px-8 flex items-center h-[calc(80vh-80px)] md:h-[calc(100vh-100px)] min-h-[500px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
              {t("reservation.hero.title")}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-10">
              {t("reservation.hero.description")}
            </p>
            <Link
              href="/activity/reservation"
              className="inline-block bg-[#0446A1] hover:bg-[#033a8a]  text-white px-8 md:px-10 py-3 md:py-4 rounded-md font-semibold text-base md:text-lg transition shadow-lg"
            >
              {t("reservation.hero.button")}
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
      <section className="bg-white pt-4 sm:pt-6 md:pt-8 lg:pt-10 mb-[50px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-Montserrat font-semibold text-black uppercase mb-[15px] sm:mb-[20px] md:mb-[25px]">
              {t("reservation.section.title")}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t("reservation.section.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section id="reservation-form" className="py-[30px] sm:py-[40px] md:py-[50px] lg:py-[60px] mb-[50px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px]" style={{ backgroundColor: '#fafaf9' }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header Notice */}
            <div className="text-center mb-[15px] sm:mb-[18px] md:mb-[20px]">
              <p className="text-sm md:text-base text-[#0446A1] font-semibold mb-2">
                {t("reservation.form.notice").split('\n').map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl  font-Montserrat font-semibold text-black text-center mb-[35px] sm:mb-[45px] md:mb-[55px] lg:mb-[59px]">
              {t("reservation.form.title")}
            </h1>

            {/* Reservation Form */}
            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10">
              <form className="space-y-4 md:space-y-5 lg:space-y-[30px]">
                {/* Tour and Passengers Row */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {/* Select Tour */}
                  <div>
                    <label className="block font-montserrat font-semibold mb-2">
                      {t("reservation.form.selectTour")}
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
                      <option value="">{t("reservation.form.chooseOption")}</option>
                      <option value="la-paz">{t("activity.data.laPaz.name")}</option>
                      <option value="atvs">{t("activity.data.atvs.name")}</option>
                      <option value="art-walk">{t("activity.data.artWalk.name")}</option>
                      <option value="horseback-riding">{t("activity.data.horsebackRiding.name")}</option>
                      <option value="todos-santos">{t("activity.data.todosSantos.name")}</option>
                      <option value="cerritos">{t("activity.data.cerritos.name")}</option>
                      <option value="los-cabos">{t("activity.data.losCabos.name")}</option>
                      <option value="hidden-towns">{t("activity.data.hiddenTowns.name")}</option>
                    </select>
                  </div>

                  {/* Passengers */}
                  <div>
                    <label className="block font-montserrat font-semibold mb-2">
                      {t("reservation.form.passengers")}
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
                      <option value="">{t("reservation.form.selectPassengers")}</option>
                      <option value="1">1 {t("reservation.form.passengerCount")}</option>
                      <option value="2">2 {t("reservation.form.passengerCountPlural")}</option>
                      <option value="3">3 {t("reservation.form.passengerCountPlural")}</option>
                      <option value="4">4 {t("reservation.form.passengerCountPlural")}</option>
                      <option value="5">5 {t("reservation.form.passengerCountPlural")}</option>
                      <option value="6">6+ {t("reservation.form.passengerCountPlural")}</option>
                    </select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block font-montserrat font-semibold mb-2">
                      {t("reservation.form.firstName")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("reservation.form.placeholder.firstName")}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block font-montserrat font-semibold mb-2">
                      {t("reservation.form.lastName")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("reservation.form.placeholder.lastName")}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-montserrat font-semibold mb-2">
                    {t("reservation.form.email")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("reservation.form.placeholder.email")}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                {/* Phone with Country Code */}
                <div className="grid md:grid-cols-12 gap-3 sm:gap-3.5 md:gap-4">
                  <div className="md:col-span-3">
                    <label className="block font-montserrat font-semibold mb-2">
                      {t("reservation.form.code")}
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base">
                      <option value="+52">+52</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+33">+33</option>
                    </select>
                  </div>
                  <div className="md:col-span-9">
                    <label className="block font-montserrat font-semibold mb-2">
                      {t("reservation.form.phone")}
                    </label>
                    <input
                      type="tel"
                      placeholder={t("reservation.form.placeholder.phone")}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>
                </div>

                {/* Hotel & Room Number */}
                <div>
                  <label className="block font-montserrat font-semibold mb-2">
                    {t("reservation.form.hotelRoom")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("reservation.form.placeholder.hotelRoom")}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  />
                </div>

                {/* Activity Date */}
                <div>
                  <label className="block font-montserrat font-semibold mb-2">
                    {t("reservation.form.activityDate")}
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
                  <label className="block font-montserrat font-semibold mb-2">
                    {t("reservation.form.message")}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t("reservation.form.placeholder.message")}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#0446A1] hover:bg-[#033a8a] text-white font-semibold py-4 px-6 rounded-md transition duration-200 text-base md:text-lg shadow-lg"
                  >
                    {t("reservation.form.submit")}
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

