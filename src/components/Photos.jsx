import { useState, useEffect } from "react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    alt: "South Indian breakfast spread with dosa and chutneys",
    wide: true,
  },
  {
    src: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=80",
    alt: "Aromatic veg biryani garnished with fried onions",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    alt: "Colourful Indian food platter from overhead",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    alt: "Creamy paneer curry with naan",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    alt: "Warm restaurant dining interior",
  },
];

export default function Photos() {
  const [lightbox, setLightbox] = useState(null);

  /* Close lightbox with Escape key */
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <section className="section photos-section reveal" id="photos">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title">Our Food &amp; Space</h2>
          <p className="section-sub">
            Every plate tells a story — fresh ingredients, bold flavours, and a
            dining experience you will keep coming back for.
          </p>
        </div>
        <div className="photos-grid">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`photo-item${photo.wide ? " wide" : ""}`}
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setLightbox(i)}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="photo-overlay">
                <span className="photo-zoom">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Close lightbox">×</button>
          <button
            className="lightbox-arrow lightbox-prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + photos.length) % photos.length);
            }}
          >
            ‹
          </button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-arrow lightbox-next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % photos.length);
            }}
          >
            ›
          </button>
          <p className="lightbox-caption">{photos[lightbox].alt}</p>
        </div>
      )}
    </section>
  );
}
