// src/i18n.js
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json"; // الترجمات للإنجليزية
import arTranslation from "./locales/ar.json"; // الترجمات للعربية

i18next
  .use(initReactI18next) // توصيل i18next مع react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: "ar", // اللغة الافتراضية
    fallbackLng: "ar", // اللغة الاحتياطية إذا لم توجد الترجمة
    interpolation: {
      escapeValue: false, // لا حاجة للهروب من القيم في React
    },
  });

export default i18next;
