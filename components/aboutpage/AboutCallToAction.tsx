import Link from "next/link";

export default function AboutCallToAction() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-Montserrat font-bold text-black" style={{ marginBottom: '10px' }}>
            Your Journey Begins With Us
          </h2>
          <p className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed" style={{ marginBottom: '50px' }}>
            Don't wait any longer book your trusted transportation with Rodrigo and enjoy a perfect blend of professionalism, hospitality, and local expertise. Let Rodrigo take care of your Airport Transfer so you can focus on enjoying your Los Cabos adventure!
          </p>
          <Link
            href="/contact#get-in-touch"
            className="inline-block bg-[#0446A1] hover:bg-[#033a8a] text-white px-8 md:px-12 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

