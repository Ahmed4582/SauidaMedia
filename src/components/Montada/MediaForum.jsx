import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MediaForum = () => {
  const [ref, isInView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const items = [
    {
      text: "التحديات العالمية في قطاع الإعلام من خلال استشراف ابرز القضايا التي تواجه الصناعة الإعلامية وكيفية التعامل معها في ظل التحولات المتسارعة",
      image: "../../../src/assets/step_into_future_11ad9.jpeg",
    },
    {
      text: "اقتصاد الإعلام الحديث عبر تحليل ديناميكيات الاقتصاد الإعلامي واستراتيجيات النمو والاستدامة في بيئة رقمية متطورة",
      image: "../../../src/assets/step_into_future_11ad9.jpeg",
    },
    {
      text: "مستقبل الإعلام وتنمية المواهب باستشراف ملامح الإعلام المستقبلي ودور الكفاءات المبدعة في إعادة تشكيل المشهد الإعلامي",
      image: "../../../src/assets/step_into_future_11ad9.jpeg",
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-emerald-900 min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* المربع الأيسر - مخفي على الشاشات الصغيرة */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:block absolute top-52 left-0 bg-lime-400 w-16 sm:w-20 md:w-24 h-32 sm:h-36 md:h-44 rounded-lg"
      ></motion.div>

      {/* المربع الأيمن - مخفي على الشاشات الصغيرة */}
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:block absolute bottom-52 right-0 bg-lime-400 w-16 sm:w-20 md:w-24 h-32 sm:h-36 md:h-44 rounded-lg"
      ></motion.div>

      {/* العنوان */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 relative after:content-[''] after:block after:w-16 sm:after:w-20 md:after:w-24 after:rounded-lg after:h-1 sm:after:h-1.5 md:after:h-2 after:bg-lime-400 after:mt-2 sm:after:mt-3 md:after:mt-4 after:mx-auto"
      >
        إطار المنتدى
      </motion.h1>

      {/* الحاوية الرئيسية */}
      <div className="max-w-6xl rounded-2xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 bg-[#044836]">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`p-4 sm:p-5 md:p-6 flex flex-col-reverse md:flex-row items-center gap-4 sm:gap-5 md:gap-6
              ${index === 1 ? "md:pr-32 lg:pr-64" : ""}`}
          >
            {/* النص */}
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-relaxed md:leading-8 lg:leading-9 text-right mt-4 md:mt-0">
              {item.text}
            </p>
            {/* الصورة */}
            <div className="w-full sm:w-80 md:w-64 h-36 sm:h-40 md:h-48 z-50 shrink-0">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* الأسهم السفلية */}
      <div className="flex justify-center gap-0.5 sm:gap-1 mt-6 sm:mt-8 md:mt-12 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -50 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            className="text-lime-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            ›
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MediaForum;
