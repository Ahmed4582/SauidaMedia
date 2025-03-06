import { motion } from "framer-motion";

const WelcomeImage = () => {
  // إعداد الأنيميشن
  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {/* صورة الترحيب */}
      <div>
        <img
          className="w-full h-full object-cover overflow-hidden"
          src="../../../public/assets/welcome_image6181.jpeg"
          alt="Welcome"
        />
      </div>

      {/* محتوى الصفحة */}
      <motion.div
        className="bg-emerald-900 min-h-screen px-4 py-6 md:p-12 overflow-hidden" // إضافة overflow-hidden
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // يتكرر عند دخول القسم
        variants={slideFromLeft}
      >
        {/* الشعار */}
        <div className="flex justify-center mb-10 mt-8 overflow-hidden">
          <motion.img
            src="../../../public/assets/logoAr.svg"
            alt="FOMEX"
            className="h-8 md:h-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideFromRight}
          />
        </div>

        {/* المحتوى الرئيسي */}
        <div className="max-w-6xl mx-auto overflow-hidden">
          {/* العنوان الرئيسي */}
          <motion.div
            className="text-center mb-10 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={slideFromRight}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 rtl">
              معرض (FOMEX) 2025، انطلق نحو مستقبل الإعلام!
            </h1>
            <p className="text-sm md:text-base text-gray-200 mb-4 rtl">
              استعد لرحلة استثنائية إلى عالم التقنيات الحديثة في معرض Fomex,
              أكبر معرض إعلامي
            </p>
            <p className="text-sm md:text-base text-gray-200 mb-6 rtl">
              متخصص بتقنيات الإعلام والإنتاج الرقمي في الشرق الأوسط
            </p>
            <motion.button
              className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors rtl"
              whileHover={{ scale: 1.1 }}
            >
              احجز مقعدك الآن
            </motion.button>
          </motion.div>

          {/* القسم المميز */}
          <motion.div
            className="relative mt-12 flex flex-col md:flex-row items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // يتكرر عند دخول القسم
            variants={slideFromLeft}
          >
            {/* الصورة مع الخلفية الخضراء */}
            <motion.div
              className="relative w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={slideFromRight}
            >
              <div className="absolute inset-0 h-[300px] md:h-[500px] bg-green-500 rounded-3xl transform scale-90 -translate-x-8 md:-translate-x-32 -translate-y-8 md:-translate-y-16 w-3/4 md:w-3/4" />
              <img
                src="../../../public/assets/participants_2e149.png"
                alt="Media Professional"
                className="relative z-10 rounded-2xl w-full object-cover"
              />
            </motion.div>

            {/* النصوص المرافقة */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={slideFromLeft}
            >
              <h2 className="text-xl md:text-3xl font-bold text-white mb-4 rtl">
                كن جزءًا من التحول الإعلامي!
              </h2>
              <p className="text-white mb-4 rtl">
                كن جزءًا من مستقبل الإعلام في المملكة والعالم
              </p>
              <p className="text-white mb-6 rtl">
                انضم إلينا في هذا الحدث الفريد الذي يجمع بين أبرز الخبراء
                والمتخصصين في المجال الإعلامي
              </p>
              <motion.button
                className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors rtl"
                whileHover={{ scale: 1.1 }}
              >
                سجل الآن
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default WelcomeImage;
