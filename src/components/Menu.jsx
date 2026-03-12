import { useState } from "react";
import menu from "../data/menu";

const categories = Object.keys(menu);
const allItems = Object.values(menu).flat();

export default function Menu() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [search, setSearch] = useState("");

  const q = search.trim().toLowerCase();
  const filtered = q
    ? allItems.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q)
      )
    : menu[activeTab];

  return (
    <section className="section menu-section reveal" id="menu">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Kitchen</span>
          <h2 className="section-title">Menu Highlights</h2>
          <p className="section-sub">
            Made fresh every morning — from crispy South Indian breakfast to
            hearty North Indian dinners.
          </p>
        </div>

        <div className="menu-search-wrap">
          <input
            type="text"
            className="menu-search"
            placeholder="🔍  Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {!q && (
          <div className="menu-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`menu-tab${activeTab === cat ? " active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="menu-grid">
          {filtered.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-card-left">
                <div className="menu-card-name">{item.name}</div>
                <div className="menu-card-desc">{item.desc}</div>
              </div>
              <div className="menu-card-price">{item.price}</div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="menu-no-results">No dishes found for &ldquo;{search}&rdquo;</p>
          )}
        </div>
      </div>
    </section>
  );
}
