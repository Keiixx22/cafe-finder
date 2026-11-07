export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        {/* Meta Row */}
        <div className="meta-row">
          <div className="badges">
            <span className="badge mono">
              <i></i>Surakarta Edition • Vol. 24
            </span>
            <span
              className="badge mono"
              style={{ background: "transparent", paddingLeft: 0 }}
            >
              Central Java Specialty Coffee Index
            </span>
          </div>
          <div className="coords">
            Independent Curation &nbsp;|&nbsp; LAT: -7.5666°, LON: 110.8167°
          </div>
        </div>

        {/* Hero Grid */}
        <div className="hero-grid">
          <div className="hero-title">
            <h1 className="display">
              Surakarta&apos;s Curated
              <br />
              Coffee Archive
            </h1>
            <p>
              Cataloging architectural spaces, heritage roasteries, and quiet
              work havens across Solo. Rigorously vetted for beans, ambient
              acoustics, and high-speed fiber.
            </p>
          </div>
          <div className="metrics">
            <div className="metric">
              <strong>142</strong>
              <span>Specialty Cafes</span>
            </div>
            <div className="metric">
              <strong>05</strong>
              <span>Districts Cataloged</span>
            </div>
            <div className="metric">
              <strong>32</strong>
              <span>Micro-Roasters</span>
            </div>
            <div className="metric">
              <strong>100%</strong>
              <span>Verified</span>
            </div>
            <a href="#explore" className="btn-explore">
              EXPLORE
            </a>
          </div>
        </div>

        {/* Search Console */}
        <SearchConsole />
      </div>
    </div>
  );
}

function SearchConsole() {
  return (
    <div className="console" id="explore">
      <div className="console-form">
        <label className="field f-query">
          <span>⌕</span>
          <input
            type="text"
            id="queryInput"
            placeholder="Search by cafe name, beans (Gayo, Flores), or vibe..."
          />
        </label>
        <label className="field f-district">
          <select id="districtSelect">
            <option value="">All Surakarta Districts</option>
            <option>Banjarsari</option>
            <option>Laweyan</option>
            <option>Jebres</option>
            <option>Mangkunegaran</option>
            <option>Pasar Kliwon</option>
          </select>
        </label>
        <label className="field f-vibe">
          <select id="vibeSelect">
            <option value="">All Vibes</option>
            <option value="Heritage">Heritage</option>
            <option value="Open Air Garden">Open Air Garden</option>
            <option value="Late Night">Late Night</option>
          </select>
        </label>
        <button className="btn-submit" id="searchBtn">
          SEARCH
        </button>
      </div>
    </div>
  );
}

