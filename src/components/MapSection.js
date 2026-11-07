export default function MapSection() {
  return (
    <section className="map-section" id="roasteries">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="label">Spatial Mapping</span>
            <h2 className="display">
              Geographic Density of Solo Specialty Brews
            </h2>
          </div>
        </div>
        <div className="map-grid">
          <div
            className="map-placeholder"
            role="img"
            aria-label="Peta kepadatan cafe Solo"
          >
            <div
              className="pin cluster"
              style={{ left: "38%", top: "42%" }}
            ></div>
            <div className="pin" style={{ left: "36%", top: "40%" }}></div>
            <div className="pin" style={{ left: "42%", top: "46%" }}></div>
            <div className="pin" style={{ left: "70%", top: "30%" }}></div>
            <div className="pin" style={{ left: "62%", top: "68%" }}></div>
            <div className="pin" style={{ left: "24%", top: "70%" }}></div>
            <div className="map-legend">
              <strong>Active Geo-Cluster</strong>
              <br />
              Laweyan • 18 cafes
            </div>
          </div>
          <aside className="cluster-card">
            <span className="label">Active Geo-Cluster</span>
            <div className="num">18</div>
            <h4>Pinpointed Cluster: Laweyan</h4>
            <p>
              Dense walking radius: 10 heritage cafes within 850m of Slamet
              Riyadi Main Boulevard.
            </p>
            <p className="mono">Avg walking time: 6 min</p>
            <a
              href="#"
              className="link-cta"
              style={{ alignSelf: "flex-start" }}
            >
              Open walking route →
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

