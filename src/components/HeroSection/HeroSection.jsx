import { useTranslation } from "react-i18next";
import {
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Calendar,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion"; // استيراد motion من framer-motion

const Hero = () => {
  const { t } = useTranslation(); // useTranslation hook

  return (
    <main className="min-h-screen flex flex-col items-center gap-4 justify-center py-0 lg:py-44 text-center overflow-x-hidden">
      <motion.h1
        className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mb-8 space-y-2"
        initial={{ opacity: 0, y: 50 }} // بداية الأنيميشن
        whileInView={{ opacity: 1, y: 0 }} // عند دخول العنصر إلى العرض
        transition={{ duration: 1 }}
        viewport={{ once: false }} // اجعل الأنيميشن يعاد كلما وصل العنصر
      >
        <div>{t("mediaTitle")}</div>
        <div>{t("worldTitle")}</div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <button className="bg-transparent text-white px-6 sm:px-10 py-3 rounded-xl border-2 border-white hover:bg-white/10 transition-all">
          {t("registerNow")}
        </button>
        <button className="bg-[#006D69] text-white px-6 sm:px-10 py-3 rounded-xl hover:bg-[#005752] transition-all">
          {t("reserveSpace")}
        </button>
      </motion.div>

      <motion.div
        className="flex gap-4 md:gap-6 mt-10 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: false }}
      >
        {[Linkedin, Instagram, Twitter, Facebook].map((Icon, index) => (
          <a key={index} href="#" className="text-white hover:text-gray-300">
            <Icon className="w-7 h-7 md:w-9 md:h-9" />
          </a>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-44 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: false }}
      >
        {[
          {
            icon: <Calendar className="w-6 h-6 text-[#98EC2D]" />,
            text: t("date.text"),
            subtext: t("date.year"),
          },
          {
            icon: (
              <img
                src="../../../public/assets/heroIconicLogo.svg"
                className="w-full"
                alt=""
              />
            ),
            isImage: true,
          },
          {
            icon: <MapPin className="w-6 h-6 text-[#98EC2D]" />,
            text: t("location.city"),
            subtext: t("location.country"),
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#006D69]/50 backdrop-blur-sm rounded-lg py-6 md:py-8 px-6 md:px-10 flex items-center justify-center text-white shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 + index * 0.2 }} // تأخير الأنيميشن
            viewport={{ once: false }} // اجعل الأنيميشن يعاد كلما وصل العنصر
          >
            <div className="flex flex-col items-center justify-center gap-1">
              {item.icon}
              {!item.isImage && (
                <>
                  <div className="font-bold">{item.text}</div>
                  <div className="font-bold">{item.subtext}</div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Hero;
