import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function AboutCallToAction() {
  const { t } = useI18n();

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-Montserrat font-bold text-black mb-[8px] sm:mb-[10px]">
            {t("about.cta.title")}
          </h2>
          <p className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed mb-[30px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px]">
            {t("about.cta.text")}
          </p>
          <Link
            href="/contact#get-in-touch"
            className="inline-block bg-[#0446A1] hover:bg-[#033a8a] text-white px-8 md:px-12 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {t("about.cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}

