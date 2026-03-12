import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef(null);

  /* ---- Parallax ---- */
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" ref={bgRef}>
        <img
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1920&q=80"
          alt="Vibrant authentic Indian cuisine spread"
        />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Serving Since 2012
        </div>
        <h1>Taste the Soul<br />of Authentic India</h1>
        <p className="hero-sub">
          Fresh South &amp; North Indian dishes crafted daily with traditional
          recipes and the finest local ingredients — right here in Rampally.
        </p>
        <div className="hero-rating">
          <span className="hero-stars">★★★★★</span>
          <span>4.8 · 500+ happy customers</span>
        </div>
        <div className="hero-btns">
          <a href="tel:+918555061771" className="btn btn-primary">📞 Call Now</a>
          <a href="#menu" className="btn btn-outline">View Menu →</a>
        </div>
      </div>
    </section>
  );
}
