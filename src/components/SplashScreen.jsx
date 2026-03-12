export default function SplashScreen({ fading }) {
  return (
    <div className={`splash${fading ? " fade-out" : ""}`}>
      <div className="splash-inner">
        <div className="splash-logo">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 5h1v6H8V5zm4-1h1v7h-1V4zm4 1h1v6h-1V5zM4 13h16a8 8 0 01-16 0z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="splash-name">Spice Garden</h2>
        <p className="splash-tagline">Authentic Indian Cuisine</p>
        <div className="splash-spinner" />
      </div>
    </div>
  );
}
