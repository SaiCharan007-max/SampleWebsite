import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SpecialOffer from "./components/SpecialOffer";
import Menu from "./components/Menu";
import ChefPick from "./components/ChefPick";
import Photos from "./components/Photos";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [splash, setSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);
  const [showTop, setShowTop] = useState(false);

  /* ---- Splash screen ---- */
  useEffect(() => {
    const fade = setTimeout(() => setSplashFading(true), 1500);
    const hide = setTimeout(() => setSplash(false), 2000);
    return () => { clearTimeout(fade); clearTimeout(hide); };
  }, []);

  /* ---- Scroll-reveal & back-to-top ---- */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));

    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [splash]);

  return (
    <>
      {splash && <SplashScreen fading={splashFading} />}
      <Navbar />
      <Hero />
      <About />
      <SpecialOffer />
      <Menu />
      <ChefPick />
      <Photos />
      <Reviews />
      <Contact />

      {/* WhatsApp float */}
      <a
        href="https://wa.me/918555061771"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-tooltip">Chat with us!</span>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="whatsapp-icon">
          <path fill="white" d="M16 3C8.83 3 3 8.83 3 16c0 2.55.75 4.92 2.05 6.92L3 29l6.29-2.03A12.9 12.9 0 0016 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.5c-2.19 0-4.33-.6-6.18-1.73l-.44-.27-3.73 1.21 1.25-3.63-.29-.46A10.45 10.45 0 015.55 16c0-5.78 4.7-10.45 10.45-10.45 5.76 0 10.45 4.67 10.45 10.45 0 5.75-4.69 10.45-10.45 10.45z" />
          <path fill="white" d="M21.41 18.42c-.29-.14-1.73-.85-2-.95-.27-.1-.46-.14-.66.14-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.08-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.59.14-.14.29-.34.43-.51.15-.17.2-.29.29-.48.1-.19.05-.37-.02-.51-.07-.14-.66-1.6-.9-2.19-.24-.57-.48-.49-.66-.49h-.56c-.19 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.45 0 1.43 1.04 2.82 1.18 3.01.14.19 2.06 3.15 4.98 4.41.69.3 1.23.48 1.65.62.69.22 1.32.19 1.82.12.55-.08 1.73-.71 1.98-1.38.25-.67.25-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
        </svg>
      </a>

      {/* Back to top */}
      <button
        className={`back-to-top${showTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Sticky mobile CTA bar */}
      <div className="mobile-cta-bar">
        <a href="tel:+918555061771" className="cta-call">📞 Call</a>
        <a href="https://wa.me/918555061771" target="_blank" rel="noopener noreferrer" className="cta-whatsapp">💬 WhatsApp</a>
        <a href="#menu" className="cta-menu">🍽️ Menu</a>
      </div>

      <Footer />
    </>
  );
}
