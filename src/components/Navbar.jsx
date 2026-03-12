import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#photos", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const html = document.documentElement;
    if (dark) html.setAttribute("data-theme", "dark");
    else html.removeAttribute("data-theme");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  /* ---- Active-section highlighting ---- */
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="brand-wrap">
          <div className="logo-box">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5h1v6H8V5zm4-1h1v7h-1V4zm4 1h1v6h-1V5zM4 13h16a8 8 0 01-16 0z" fill="white" />
            </svg>
          </div>
          <span className="brand">Spice Garden</span>
        </a>

        <nav className="nav-links">
          {NAV_ITEMS.map(({ href, label }) => (
            <a key={href} href={href} className={activeId === href.slice(1) ? "active" : ""}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {NAV_ITEMS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={close}
            className={activeId === href.slice(1) ? "active" : ""}
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
