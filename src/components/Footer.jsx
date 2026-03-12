export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="brand-wrap">
              <div className="logo-box">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5h1v6H8V5zm4-1h1v7h-1V4zm4 1h1v6h-1V5zM4 13h16a8 8 0 01-16 0z" fill="white" />
                </svg>
              </div>
              <span className="brand">Spice Garden</span>
            </a>
            <p>
              Authentic South &amp; North Indian cuisine cooked with love and
              served fresh every day since 2012.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#photos">Gallery</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#visit">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Hours</h4>
            <ul>
              <li>Mon – Fri: 7 am – 10 pm</li>
              <li>Sat – Sun: 7 am – 10 pm</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+918555061771">+91 85550 61771</a></li>
              <li>
                <a href="https://wa.me/918555061771" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </li>
              <li>Rampally, Hyderabad</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Spice Garden Restaurant. All rights reserved.</p>
          <p>Rampally, Hyderabad &middot; Pure Veg &middot; Est. 2012</p>
        </div>
      </div>
    </footer>
  );
}
