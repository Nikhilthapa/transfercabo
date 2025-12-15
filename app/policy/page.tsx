import CustomHero from "@/components/CustomHero";
import Footer from "@/components/homepage/Footer";

export default function PolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <CustomHero
        backgroundImagePath="/policy.png"
        title="Our Privacy Commitment"
        subtitle="Learn How Cheap Transfers Cabo Collects, Uses, And Safeguards Your Personal Information."
        hideTopBar={true}
        titleColor="#fcfcfc"
        subtitleColor="#fafaf9"
      />
      
      {/* Main Content Area */}
      <section className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Policy Title */}
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-8 md:mb-12">
            Privacy Policy
          </h2>
          
          {/* Introductory Paragraph */}
          <div className="text-center mb-1 md:mb-2">
            <p className="font-montserrat font-medium text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-left">
              At Cheap Transfers Cabo, we understand the importance of protecting the privacy of our customers. This Privacy Policy outlines the types of information we collect, how it is collected, and how we use and share it.
            </p>
          </div>
          
          {/* Privacy Policy Sections */}
          <div className="space-y-1 md:space-y-2">
            {/* Section 1: What information do we collect? */}
            <div>
              <h3 className="font-montserrat font-medium text-base md:text-lg mb-1 text-center">
                What information do we collect?
              </h3>
              <div className="text-center">
                <p className="font-montserrat font-medium  text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-left">
                  We may collect personal information such as your name, email address, phone number, and flight details. We may also collect non-personal information such as your IP address and browser type.
                </p>
              </div>
            </div>
            
            {/* Section 2: How do we collect information? */}
            <div>
              <h3 className="font-montserrat font-medium text-base md:text-lg mb-1 text-center">
                How do we collect information?
              </h3>
              <div className="text-center">
                <p className="font-montserrat font-medium  text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-left">
                  We may collect information through our website, mobile app, phone calls, or emails.
                </p>
              </div>
            </div>
            
            {/* Section 3: Why do we collect this information? */}
            <div>
              <h3 className=" font-montserrat font-medium text-base md:text-lg mb-1 text-center">
                Why do we collect this information?
              </h3>
              <div className="text-center">
                <p className=" font-montserrat font-medium  text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-left">
                  We collect this information to provide you with the best possible airport transfer experience, including arranging your transportation or activities and communicating with you in relation of your reservation or activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

