
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Instagram, Linkedin, MessageCircle, Twitter } from 'lucide-react';


const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false });

  const partners = [
    ["../../../public/assets/Arabsat_logod217.png", "Partner 1"],
    ["../../../public/assets/aramco3a41.jpeg", "Partner 2"],
    ["../../../public/assets/Diriyah97cc.jpeg", "Partner 3"],
    ["../../../public/assets/Arabsat_logod217.png", "Partner 4"],
    ["../../../public/assets/elaqatc3fa.jpeg", "Partner 5"],
    ["../../../public/assets/mixfm-newlooka39e.png", "Partner 6"],
    ["../../../public/assets/mics977c.jpeg", "Partner 7"],
    ["../../../public/assets/nabza91de.jpeg", "Partner 8"],
    ["../../../public/assets/aramco3a41.jpeg", "Partner 9"],
    ["../../../public/assets/Arabsat_logod217.png", "Partner 10"],
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-white  pt-16 overflow-hidden">
      {/* Partners Section */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold text-center mb-12 rtl relative"
        >
          فخورون بأن نكون شركاء رحلتكم نحو التميز
          <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-24 h-2 rounded-lg bg-green-400 mt-2"></span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="w-32 h-16 flex items-center justify-center"
            >
              <img
                src={partner[0]}
                alt={partner[1]}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer Content */}
      <footer
        ref={footerRef}
        className="bg-[#003d36] text-white px-4 md:px-8 py-12"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto "
        >
          {/* Top Section with Logo and Newsletter */}
          <div className="flex flex-col md:flex-row justify-around items-center mb-16 ">
            <div className="w-full md:w-auto text-center md:text-right rtl">
              <h2 className="text-xl mb-4">
                انضم إلى قائمتنا البريدية لتصلك أحدث الأخبار
              </h2>
              <h3 className="text-lg mb-6">
                الحصرية من المنتدى السعودي للإعلام
              </h3>
              <div className="flex gap-4 max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="flex-grow px-4 py-2 rounded-md text-black rtl"
                />
                <button className="bg-teal-600 px-8 py-2 rounded-md hover:bg-teal-700 transition-colors whitespace-nowrap rtl">
                  اشترك الآن
                </button>
              </div>
            </div>
            <img
              src="../../../src/assets/logoAr.svg"
              alt="Saudi Media Forum"
              className="mb-8 md:mb-0"
            />
          </div>

          {/* Links and Contact Section */}
          <div className="flex justify-around items-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-t border-emerald-900 pt-8">
              {/* Quick Links */}
              <div className="text-right rtl">
                <h4 className="font-bold text-xl mb-6">روابط سريعة</h4>
                <ul className="grid grid-cols-1 gap-4">
                  <li className="hover:text-green-400 transition-colors cursor-pointer">
                    الرئيسية
                  </li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">
                    المعرض
                  </li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">
                    جائزة المنتدى
                  </li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">
                    المركز الإعلامي
                  </li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">
                    المتحدثون
                  </li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">
                    جدول الأعمال
                  </li>
                  <li className="hover:text-green-400 transition-colors cursor-pointer">
                    فعاليات السعودية
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="text-right rtl">
                <h4 className="font-bold text-xl mb-6">روابط التواصل</h4>
                <ul className="space-y-4">
                  <li className="flex items-center justify-end gap-2">
                    <span dir="ltr">+966535979563</span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>info@saudimf.sa</span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>الرياض، المملكة العربية السعودية</span>
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-green-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          {/* Bottom Links */}
          <div className="flex justify-center gap-8 text-sm border-t border-emerald-800 pt-8">
            <a href="#" className="hover:text-green-400 transition-colors">
              الشروط والأحكام
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              سياسة الخصوصية
            </a>
            <span>جميع الحقوق محفوظة لمجموعة المنتدى السعودي للإعلام 2025</span>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
