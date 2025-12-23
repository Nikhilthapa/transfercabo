import { useI18n } from "@/lib/i18n";

export default function AboutMissionVision() {
  const { t } = useI18n();

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-Montserrat font-bold text-black"
            style={{ marginBottom: "10px" }}
          >
            {t("about.missionVision.title")}
          </h2>
          <p className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[70px]">
            {t("about.missionVision.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Our Mission */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h3
              className="text-2xl md:text-3xl font-Montserrat font-bold text-black"
              style={{ marginBottom: "10px" }}
            >
              {t("about.missionVision.missionTitle")}
            </h3>
            <p className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed">
              {t("about.missionVision.missionText")}
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]">
            <h3
              className="text-2xl md:text-3xl font-Montserrat font-bold text-black"
              style={{ marginBottom: "10px" }}
            >
              {t("about.missionVision.visionTitle")}
            </h3>
            <p className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed">
              {t("about.missionVision.visionText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

