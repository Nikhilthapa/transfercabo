import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function AboutMeetRodrigo() {
  const { t } = useI18n();

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-[80px] items-center">
          {/* Left Column - Text */}
          <div>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-Montserrat font-bold text-black"
              style={{ marginBottom: "10px" }}
            >
              {t("about.meetRodrigo.title")}
            </h2>
            <p
              className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed"
              style={{ marginBottom: "10px" }}
            >
              {t("about.meetRodrigo.p1")}
            </p>
            <p
              className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed"
              style={{ marginBottom: "10px" }}
            >
              {t("about.meetRodrigo.p2")}
            </p>
            <p
              className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed"
              style={{ marginBottom: "10px" }}
            >
              {t("about.meetRodrigo.p3")}
            </p>
            <p className="font-Montserrat font-medium text-[#6f6f6f] text-base md:text-lg leading-relaxed">
              {t("about.meetRodrigo.p4")}
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl md:rounded-2xl overflow-hidden mx-auto">
            <Image
              src="/aboutus/page/about1.jpg"
              alt={t("about.meetRodrigo.imageAlt")}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

