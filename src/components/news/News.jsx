import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";


const NewsSocialSection = () => {
//   const lang = localStorage.getItem("i18nextLng"); // Get the current language from localStorage
  const [ref, isInView] = useInView({
    triggerOnce: false, // اجعلها false لتشغيل الانميشن في كل مرة يدخل العنصر إلى الشاشة
    threshold: 0.4, // يتم تشغيل الانميشن عندما 10% من العنصر يكون مرئيًا
  });

  const tweets = [
    {
      id: 1,
      avatar: "../../../src/assets/favicon.ico",
      handle: "المنتدى السعودي للإعلام 2024",
      content:
        "نستعد لإطلاق أكبر حدث إعلامي في المنطقة بمشاركة نخبة من صناع المحتوى والإعلام",
      date: "2024 يناير",
    },
    {
      id: 2,
      avatar: "../../../src/assets/favicon.ico",
      handle: "المنتدى السعودي للإعلام 2024",
      content:
        "فعاليات متنوعة وورش عمل متخصصة في مجال الإعلام الرقمي والتقليدي",
      date: "2024 يناير",
    },
    {
      id: 3,
      avatar: "../../../src/assets/favicon.ico",
      handle: "المنتدى السعودي للإعلام 2024",
      content: "انطلاق التسجيل في برامج وفعاليات المنتدى السعودي للإعلام",
      date: "2024 يناير",
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-[#004D49] py-12 px-4 relative overflow-x-hidden"
      dir="rtl"
    >
      {/* Dots decoration */}
      <div className="absolute left-6 bottom-32">
        <div className="grid grid-cols-6 gap-1">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[#98EC2D] rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-2xl font-bold mb-8 border-b-2 border-[#98EC2D] pb-2 inline-block">
          أهم الأخبار
        </h2>

        {/* Twitter Cards */}
        <div className="bg-[#28aa3a] py-2 px-10 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {tweets.map((tweet, index) => (
              <motion.div
                key={tweet.id}
                initial={{ x: 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg p-5 shadow-lg"
              >
                <div className="flex items-start gap-3  ">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      src={tweet.avatar}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="py-3">
                    <h3 className="font-bold text-gray-900">{tweet.handle}</h3>
                    <span className="text-sm text-gray-500">{tweet.date}</span>
                  </div>
                  <button className="mr-auto ">
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                <p className="text-gray-800 py-3">{tweet.content}</p>
                <div className="flex justify-between text-gray-500 text-sm py-3">
                  <button>❤️ 45</button>
                  <button>💬 23</button>
                  <button>🔄 12</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div
          ref={ref}
          className="bg-[#004D49] min-h-[600px] relative py-16 px-4 overflow-hidden"
        >
          {/* Decorative dots */}
          <div className="absolute top-8 left-8">
            <div className="grid grid-cols-6 gap-1">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#98EC2D] rounded-full" />
              ))}
            </div>
          </div>

          {/* Right dots */}
          <div className="absolute top-8 right-8">
            <div className="grid grid-cols-4 gap-1">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-[#98EC2D] rounded-full" />
              ))}
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute bottom-16 left-16">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: i * 0.3 }}
                className="text-[#98EC2D] text-4xl mb-2"
              >
                ›
              </motion.div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative">
            {/* Main Event Image */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="md:col-span-6 rounded-2xl overflow-hidden h-[400px]"
            >
              <img
                src="../../../src/assets/step_into_future_11ad9.jpeg"
                alt="Saudi Media Forum"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small Event Images */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-3 md:col-start-10 space-y-4"
            >
              <div className="rounded-lg overflow-hidden h-[180px]">
                <img
                  src="../../../src/assets/step_into_future_11ad9.jpeg"
                  alt="Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-[180px]">
                <img
                  src="../../../src/assets/step_into_future_11ad9.jpeg"
                  alt="Event"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Event Title Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-6 md:col-start-4 bg-[#00B655] rounded-2xl p-8 text-center absolute bottom-16 mx-4 md:mx-0"
            >
              <h2 className="text-white text-3xl font-bold mb-2">
                المنتدى السعودي للإعلام 2025
              </h2>
              <p className="text-white/90 text-lg">
                منصة الابتكار الثاني والمستقبل الإعلامي
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSocialSection;
