import { Globe, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // local state for menu open/close
  const { t, i18n } = useTranslation(); // useTranslation hook
  const lang = localStorage.getItem("i18nextLng"); // Get the current language from localStorage

  // Update language if it's changed in localStorage
  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang); // Change language based on the value from localStorage
    }
  }, [lang, i18n]);

  const handleLangChange = () => {
    const newLang = lang === "ar" ? "en" : "ar"; // Toggle language
    localStorage.setItem("i18nextLng", newLang); // Save the new language in local storage
    i18n.changeLanguage(newLang); // Apply the language change immediately without reloading
  };

  return (
    <div
      className={`overflow-x-hidden font-sans pb-24 lg:pb-0 ${
        lang === "ar" ? "rtl" : "ltr"
      }`}
    >
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white absolute top-6 right-6"
          >
            <X className="w-6 h-6" />
          </button>
          <nav className="grid gap-4 mt-16">
            {[
              "Home",
              "Exhibition",
              "ForumAward",
              "SaudiArabiaEvents",
              "login",
            ].map((item) => (
              <a
                key={item}
                href={item === "Exhibition" ? "/Exhibition" : "/"}
                className="text-white hover:text-[#006D69] transition-colors text-lg py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`menu.${item}`)}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="absolute w-full z-40 px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img
              src="../../../src/assets/logoAr.svg"
              alt="Logo"
              className="h-8 md:h-11"
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 lg:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <nav className="hidden lg:flex justify-center gap-8">
            {["Home", "Exhibition", "ForumAward", "SaudiArabiaEvents"].map(
              (item) => (
                <a
                  key={item}
                  href={item === "Exhibition" ? "/Exhibition" : "/"}
                  className="text-white hover:text-[#006D69] transition-colors text-lg"
                >
                  {t(`menu.${item}`)}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={handleLangChange}
              className="text-white hover:text-gray-200"
            >
              <Globe className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button className="bg-[#006D69] text-white px-4 md:px-6 py-2 rounded-md hover:bg-[#005752] transition-all hidden lg:block">
              {t("login")}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
