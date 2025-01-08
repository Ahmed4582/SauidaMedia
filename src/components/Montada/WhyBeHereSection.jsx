import { motion } from "framer-motion";

const WhyBeHereSection = () => {
  const cards = [
    {
      title: "تواصل مع رواد الإعلام",
      description:
        "اغتنم هذه الفرصة الإعلام وطور اتصال قوي مع موجهين التحول الرقمي في القطاع، وأنشئ علاقات مهنية قيمة مع الخبراء وبناء علاقات مهنية قيمة",
      image: "../.../../../../src/assets/participants_45f4e.png",
    },
    {
      title: "اكتسب معرفة",
      description:
        "شارك في جلسات حوارية وورش عمل ومنصات تبحث عن المتحدثين والخبراء المميزين لنحصل على رؤى جديدة وأفكار مبتكرة تعزز من مهاراتك ومستواك",
      image: "../.../../../../src/assets/participants_45f4e.png",
    },
    {
      title: "استكشف التكنولوجيا الحديثة",
      description:
        "اكتشف آخر ما توصلت إليه التكنولوجيا الإعلامية واطلع المبتكرات الجديدة في عالم تقنية المعلومات التي تعيد تشكيل مستقبل الإعلام",
      image: "../.../../../../src/assets/participants_45f4e.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-emerald-900 py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-10">
        {[...Array(64)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0 }}
            animate={{ rotate: 45 }}
            className="w-4 h-4 border border-white"
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // جعل الأنيميشن يعمل عند العودة
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2
          variants={cardVariants}
          className="text-4xl font-bold text-white text-center mb-12 rtl relative after:content-[''] after:block after:w-16 sm:after:w-20 md:after:w-24 after:rounded-lg after:h-1 sm:after:h-1.5 md:after:h-2 after:bg-lime-400 after:mt-2 sm:after:mt-3 md:after:mt-4 after:mx-auto"
        >
          لماذا يجب أن تكون هنا؟
        </motion.h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative group rounded-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-8 right-8 bg-green-500  p-4 text-center rounded-3xl">
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  <p className="text-sm text-white">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyBeHereSection;
