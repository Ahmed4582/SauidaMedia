import { motion } from "framer-motion";

const SaudiMediaAwards = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -100 }, // الصور تتحرك من اليسار
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 }, // الكروت تتحرك من اليمين
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="bg-emerald-900 min-h-screen p-6 md:p-12 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={imageVariants} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 rtl">
            جائزة المنتدى السعودي للإعلام 2025
          </h1>
          <p className="text-gray-200 mb-4 rtl max-w-3xl mx-auto">
            جائزة المنتدى السعودي للإعلام تُكرم وتُتوج المبدعين والمتميزين في
            صناعة المحتوى الإعلامي؛ تهدف إلى تعزيز الإبداع والابتكار في مجالات
            الإعلام المختلفة.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.img
              src="assets/participants_19096.png"
              alt="Award ceremony 1"
              className="rounded-lg w-full h-full object-cover"
              variants={imageVariants}
            />
            <motion.img
              src="assets/participants_9874c.png"
              alt="Award ceremony 2"
              className="rounded-lg w-full h-full object-cover"
              variants={imageVariants}
            />
            <motion.img
              src="assets/participants_51fc5.png"
              alt="Award ceremony main"
              className="col-span-2 rounded-lg w-full h-full object-cover"
              variants={imageVariants}
            />
          </motion.div>

          {/* Right Side - Categories */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                title: "التواصل والعلاقات العامة",
                desc: "تبرز أفضل الحملات الإعلامية المتكاملة على مستوى القطاع الحكومي والقطاع الخاص",
              },
              {
                title: "المحتوى الإعلامي (غير الصحفي)",
                desc: "تبرز المتميزين من الأفراد والجهات الإلكترونية في إنتاج المحتوى، المرئي والمسموع",
              },
              {
                title: "المجال الإخباري",
                desc: "تبرز أفضل التغطيات الإعلامية الأكثر تميزاً في تقديم المحتوى الإعلامي والرقمي",
              },
              {
                title: "الصحافة",
                desc: "تبرز أفضل التغطيات الصحفية وأكثر المختصين و المراسلين نشاطاً وتأثيراً في إنتاج محتوى إعلامي متميز",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="border-2 border-lime-400 rounded-lg p-4 rtl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lime-400 font-bold mb-2">
                  {category.title}
                </h3>
                <p className="text-white text-sm">{category.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={cardVariants}
          className="text-center"
        >
          <button className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition-colors rtl">
            اعرف المزيد
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SaudiMediaAwards;
