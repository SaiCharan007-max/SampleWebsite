import { useEffect, useRef, useState } from "react";

export default function About() {
  const statsRef = useRef(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const started = useRef(false);

  /* ---- Animated stat counters ---- */
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const targets = [12, 500, 20, 100];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const t0 = performance.now();
          const step = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 4); // easeOutQuart
            setCounts(targets.map((t) => Math.floor(ease * t)));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about-section reveal" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap">
            <div className="about-img-main">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                alt="Warm restaurant dining interior with ambient lighting"
              />
            </div>
            <div className="about-img-accent">
              <img
                src="https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=600&q=80"
                alt="Fresh veg biryani dish"
              />
            </div>
          </div>

          <div className="about-text">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">A Family Tradition<br />Since 2012</h2>
            <p>
              What started as a small tiffin centre in Rampally has grown into a
              beloved neighbourhood restaurant, serving thousands of happy
              customers every month. Our kitchen runs on age-old family recipes
              passed down through generations.
            </p>
            <p>
              Every dish is cooked fresh to order using locally sourced
              vegetables, hand-ground spices, and pure ghee — because we believe
              great food starts with great ingredients.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">🌿</div>
                <div className="feature-text">
                  <h4>100% Vegetarian</h4>
                  <p>Pure veg kitchen — no cross-contamination, ever.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🔥</div>
                <div className="feature-text">
                  <h4>Cooked Fresh Daily</h4>
                  <p>Every dish is prepared to order — no pre-cooked batches.</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🏠</div>
                <div className="feature-text">
                  <h4>Family-Owned</h4>
                  <p>Run by the same family since day one, with love.</p>
                </div>
              </div>
            </div>

            <div className="about-stats" ref={statsRef}>
              <div className="about-stat">
                <span className="stat-num">{counts[0]}+</span>
                <span className="stat-label">Years Serving</span>
              </div>
              <div className="about-stat">
                <span className="stat-num">{counts[1]}+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="about-stat">
                <span className="stat-num">{counts[2]}+</span>
                <span className="stat-label">Menu Items</span>
              </div>
              <div className="about-stat">
                <span className="stat-num">{counts[3]}%</span>
                <span className="stat-label">Vegetarian</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
