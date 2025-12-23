import { useI18n } from "@/lib/i18n";

export default function AboutWelcome() {
  const { t } = useI18n();

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center">
          <h1
            className="text-2xl md:text-3xl lg:text-3xl font-montserrat font-Montserrat font-semibold text-black uppercase"
            style={{ marginBottom: "15px" }}
          >
            {t("about.welcome.title")}
          </h1>
          <p className="text-gray-700 font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            {t("about.welcome.text")}
          </p>
        </div>
      </div>
    </section>
  );
}

