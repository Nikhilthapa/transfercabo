"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { contactConfig } from "@/lib/contact";

export default function Contact() {
  const { t } = useI18n();
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // For phone field, only allow numbers
    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setSubmitStatus({ type: "error", message: "Full name is required" });
      return false;
    }
    if (!formData.email.trim()) {
      setSubmitStatus({ type: "error", message: "Email is required" });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus({ type: "error", message: "Please enter a valid email address" });
      return false;
    }
    if (!formData.phone.trim()) {
      setSubmitStatus({ type: "error", message: "Phone number is required" });
      return false;
    }
    if (!/^\d+$/.test(formData.phone)) {
      setSubmitStatus({ type: "error", message: "Phone number must contain only numbers" });
      return false;
    }
    if (!formData.message.trim()) {
      setSubmitStatus({ type: "error", message: "Message is required" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Message sent successfully! We will contact you soon.",
        });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-in-touch" className="container mx-auto px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Montserrat font-bold text-black mb-2 sm:mb-3">
          {t("contact.form.title")}
        </h2>
        <p className="font-Montserrat font-medium text-[#6f6f6f] text-xs sm:text-sm md:text-base px-4 mb-6 sm:mb-8">
          {t("contact.form.subtitle")}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 md:items-stretch gap-4 sm:gap-6 md:gap-10">
          {/* Left Column - Send Message Form */}
          <div className="bg-white rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] p-4 sm:p-6 md:p-8 flex flex-col md:col-span-2 md:h-full">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">
              {t("contact.form.sendMessageTitle")}
            </h3>
            
            {/* Success/Error Messages */}
            {submitStatus.type && (
              <div
                className={`mb-4 p-4 rounded-md ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <p className="font-semibold text-sm">{submitStatus.message}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
              <div className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={t("contact.form.fullNamePlaceholder")}
                  className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t("contact.form.phonePlaceholder")}
                  className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows={4}
                  className="w-full border border-gray-300 rounded-3xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm md:text-base resize-none"
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0446a1] hover:bg-[#033a8a] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold transition text-sm md:text-base mt-auto"
              >
                {isSubmitting ? "Sending..." : t("contact.form.submitButton")}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Social Media */}
          <div className="flex flex-col md:h-full gap-4 sm:gap-5 md:gap-6">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">
                {t("contact.sidebar.title")}
              </h3>
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-blue-200 p-2 sm:p-2.5 rounded-[16px] flex-shrink-0 mt-0.5">
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
                    <p className="font-semibold text-black mb-1 text-xs sm:text-sm md:text-base">
                      {t("contact.sidebar.phone")}
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm break-words">+52 (624) 182 0525</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-blue-200 p-2 sm:p-2.5 rounded-[16px] flex-shrink-0 mt-0.5">
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
                    <p className="font-semibold text-black mb-1 text-xs sm:text-sm md:text-base">
                      {t("contact.sidebar.email")}
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm break-words break-all">bookingcheaptransferscabo <br />@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-blue-200 p-2 sm:p-2.5 rounded-[16px] flex-shrink-0 mt-0.5">
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
                    <p className="font-semibold text-black mb-1 text-xs sm:text-sm md:text-base">
                      {t("contact.sidebar.location")}
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm">
                      {t("contact.sidebar.city")}
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm">
                      {t("contact.sidebar.region")}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-blue-200 p-2 sm:p-2.5 rounded-[16px] flex-shrink-0 mt-0.5">
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
                    <p className="font-semibold text-black mb-1 text-xs sm:text-sm md:text-base">
                      {t("contact.sidebar.hours")}
                    </p>
                    <p className="text-gray-700 text-xs sm:text-sm">
                      {t("contact.sidebar.hoursValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="bg-white rounded-xl flex flex-wrap justify-center sm:justify-start items-center shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] py-4 sm:py-5 md:py-6 lg:py-8 md:mt-auto px-4 sm:px-6 md:px-8 gap-4 sm:gap-4 md:gap-6 lg:gap-10">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
                className="hover:scale-110 transition-transform duration-300 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${contactConfig.whatsapp.number.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(contactConfig.whatsapp.message)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="#25D366"/>
                </svg>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${contactConfig.phone.number}`}
                className="hover:scale-110 transition-transform duration-300 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Phone"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#0446A1"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}

