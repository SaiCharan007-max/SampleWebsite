export default function ChefPick() {
  return (
    <section className="section chef-pick reveal" id="chef-pick">
      <div className="container">
        <div className="chef-grid">
          <div className="chef-img">
            <img
              src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80"
              alt="Signature paneer butter masala"
              loading="lazy"
            />
            <div className="chef-badge-tag">⭐ Chef&rsquo;s Pick</div>
          </div>
          <div className="chef-text">
            <span className="section-tag">Signature Dish</span>
            <h2 className="section-title">Paneer Butter Masala</h2>
            <p className="chef-desc">
              Our most-loved dish — soft, fresh cottage cheese cubes
              slow-simmered in a rich, creamy tomato gravy with hand-ground
              spices and a touch of kasuri methi. Served with butter naan or
              steamed rice.
            </p>
            <div className="chef-details">
              <div className="chef-detail">
                <span className="chef-detail-label">Prep Time</span>
                <span className="chef-detail-value">25 min</span>
              </div>
              <div className="chef-detail">
                <span className="chef-detail-label">Serves</span>
                <span className="chef-detail-value">2 people</span>
              </div>
              <div className="chef-detail">
                <span className="chef-detail-label">Price</span>
                <span className="chef-detail-value chef-price">₹160</span>
              </div>
            </div>
            <a href="tel:+918555061771" className="btn btn-primary">
              📞 Order This Dish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
