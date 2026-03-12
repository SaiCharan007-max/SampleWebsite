export default function SpecialOffer() {
  return (
    <section className="special-offer reveal">
      <div className="container">
        <div className="offer-card">
          <div className="offer-badge">🔥 Today&rsquo;s Special</div>
          <div className="offer-content">
            <div className="offer-text">
              <h3>Weekend Family Combo</h3>
              <p>
                2 &times; Masala Dosa + 2 &times; Idli Vada + 2 &times; Filter
                Coffee — perfect for a relaxed family breakfast.
              </p>
              <div className="offer-pricing">
                <span className="offer-old">₹310</span>
                <span className="offer-new">₹249</span>
                <span className="offer-save">Save 20%</span>
              </div>
            </div>
            <div className="offer-cta">
              <a href="tel:+918555061771" className="btn btn-primary">
                📞 Order Now
              </a>
              <p className="offer-note">Available Sat &amp; Sun · 7 am – 11 am</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
