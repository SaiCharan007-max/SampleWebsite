import { useState, useEffect } from "react";

const reviews = [
  {
    stars: 5,
    text: "Best veg food in this whole area. The masala dosa is absolutely perfect — crispy outside, flavourful inside. I come here every weekend!",
    name: "Ramesh K.",
    meta: "Regular since 2019",
  },
  {
    stars: 5,
    text: "Very clean place, friendly staff, and the food is always fresh. The filter coffee here is the best I've had outside of a proper South Indian home.",
    name: "Sravya R.",
    meta: "Google Review",
  },
  {
    stars: 5,
    text: "Paneer Butter Masala and Naan are incredible. Feels like home food. Generous portions, great prices — highly recommend to everyone!",
    name: "Anil P.",
    meta: "Visited 10+ times",
  },
  {
    stars: 5,
    text: "Great idli-vada combo for breakfast. The sambar is so flavourful and fresh. Will definitely bring my family here again soon.",
    name: "Priya M.",
    meta: "Zomato Review",
  },
  {
    stars: 5,
    text: "Ordered the Veg Biryani and Dal Makhani — both outstanding. Generous portions at very fair prices. A hidden gem in Rampally!",
    name: "Suresh T.",
    meta: "First-time visitor",
  },
  {
    stars: 5,
    text: "Authentic taste, clean ambiance, quick service. The lassi is absolutely refreshing. This is my go-to place for a satisfying meal every time.",
    name: "Lakshmi B.",
    meta: "Regular customer",
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  /* ---- Auto-advance carousel ---- */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % reviews.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="section reviews-section reveal" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className="section-sub">
            Don&rsquo;t take our word for it — hear from the people who dine
            with us every day.
          </p>
        </div>

        <div
          className="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            className="carousel-btn carousel-prev"
            onClick={() => setActive((active - 1 + reviews.length) % reviews.length)}
            aria-label="Previous review"
          >
            ‹
          </button>

          <div className="carousel-track">
            {reviews.map((r, i) => (
              <div
                key={i}
                className={`review-card carousel-slide${i === active ? " active" : ""}`}
              >
                <div className="review-stars">{"★".repeat(r.stars)}</div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="review-author">
                  <div className="review-avatar">{r.name.charAt(0)}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-meta">{r.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn carousel-next"
            onClick={() => setActive((active + 1) % reviews.length)}
            aria-label="Next review"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === active ? " active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
