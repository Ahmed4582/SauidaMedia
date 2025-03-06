import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/HeroSection";
import MediaForum from "./components/Montada/MediaForum";
import SaudiMediaAwards from "./components/Montada/SaudiMediaAwards ";
import WelcomeImage from "./components/Montada/WelcomeImage";
import WhyBeHereSection from "./components/Montada/WhyBeHereSection";
import NewsSocialSection from "./components/news/News";

const App = () => {
// الحصول على اللغة من الـ localStorage


  return (
    <>
      <div className="relative overflow-hidden">
        {/* Video Background for both Header and Hero */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="../../../public/assets/NoOutro.mp4" type="video/mp4" />
          </video>
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#006D69]/70" />
        </div>

        <div className="relative z-10">
          {/* Header Section */}
          <Header />

          {/* Hero Section */}
          <Hero />
        </div>
      </div>
      <NewsSocialSection />
      <MediaForum/>
      <WelcomeImage/>
      <SaudiMediaAwards/>
      <WhyBeHereSection/>
      <Footer/>
    </>
  );
};

export default App;
