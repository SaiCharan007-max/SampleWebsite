export default function Contact() {
  return (
    <section className="section contact-section reveal" id="visit">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">Find Us</span>
            <h2 className="section-title">Visit Spice Garden</h2>
            <p className="contact-desc">
              Come experience the warmth of our home-style cooking. Open seven
              days a week — ready to serve you a fresh, satisfying meal any
              time of day.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-icon">📍</div>
                <div className="detail-text">
                  <div className="detail-label">Address</div>
                  <div className="detail-value">Rampally, Hyderabad, Telangana</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon">⏰</div>
                <div className="detail-text">
                  <div className="detail-label">Hours</div>
                  <div className="detail-value">7:00 AM – 10:00 PM · Every Day</div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon">📞</div>
                <div className="detail-text">
                  <div className="detail-label">Phone</div>
                  <div className="detail-value">
                    <a href="tel:+918555061771">+91 85550 61771</a>
                  </div>
                </div>
              </div>
              <div className="contact-detail">
                <div className="detail-icon">💬</div>
                <div className="detail-text">
                  <div className="detail-label">WhatsApp</div>
                  <div className="detail-value">
                    <a
                      href="https://wa.me/918555061771"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps?q=Rampally,Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              🗺️ Open in Google Maps
            </a>
          </div>
          <div className="contact-map">
            <iframe
              title="Spice Garden location"
              src="https://www.google.com/maps?q=Rampally,Hyderabad&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
