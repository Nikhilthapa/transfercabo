import Image from "next/image";
import CustomHero from "@/components/CustomHero";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/homepage/Footer";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <CustomHero
        backgroundImagePath="/contactus.png"
        title="Contact Us"
        subtitle="We're Always Available to Assist You With Transfers, Tours, And Inquiries."
        textPosition="bottom"
        hideTopBar={true}
      />
      
      {/* Welcome Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
            WELCOME TO THE CONTACT US
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Our team is here to make your travel smooth, safe and effortless — message us anytime.
          </p>
        </div>
      </section>

      {/* Talk to Our Team Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4">
              Talk to Our Team
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
              Connect with us through WhatsApp, call, or email — we're ready to help with your transfers and tours.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Phone/WhatsApp Card */}
            <div className="border border-gray-200 rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: '#fafaf9' }}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/contact/phone.png"
                      alt="Phone"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-black text-lg mb-1">Phone / WhatsApp</h3>
              <p className="text-black text-sm mb-2">And messenger</p>
              <p className="text-black text-base">+52 (624) 182 0525</p>
            </div>

            {/* Email Card */}
            <div className="border border-gray-200 rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: '#fafaf9' }}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/contact/message.png"
                      alt="Email"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-black text-lg mb-2">Email</h3>
              <p className="text-black text-base">rodriguez1269@outlook.es</p>
            </div>

            {/* Location Card */}
            <div className="border border-gray-200 rounded-xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: '#fafaf9' }}>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/contact/location.png"
                      alt="Location"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-black text-lg mb-2">Location</h3>
              <p className="text-black text-base">Baja California Sur, México</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <Contact />
      
      <Footer />
    </div>
  );
}

