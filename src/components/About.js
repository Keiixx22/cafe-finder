export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="wrap">
        <div className="standard-grid">
          {/* Left: Curation Standard */}
          <div>
            <span className="label">The Curation Standard</span>
            <h2
              className="display"
              style={{ fontSize: 32, letterSpacing: "-.8px", marginTop: 6 }}
            >
              How Solo Brew Audits Every Single Space
            </h2>
            <p
              style={{
                marginTop: 14,
                color: "var(--ink-2)",
                fontSize: 14,
              }}
            >
              We believe where you drink coffee matters as much as what is in
              your cup. Every entry is independently field-tested with calibrated
              decibel meters, Wi-Fi latency benchmarks, and verified water TDS
              profiles.
            </p>
            <div className="criteria">
              <div className="criterion">
                <h4>Acoustic Balance</h4>
                <p>
                  Sound pressure measured under 55dB in dedicated work sections.
                </p>
              </div>
              <div className="criterion">
                <h4>Fiber Stability</h4>
                <p>Minimum 50 Mbps symmetric upload with low jitter.</p>
              </div>
              <div className="criterion">
                <h4>Architectural Integrity</h4>
                <p>
                  Preservation of Javanese heritage or sincere modernist
                  craftsmanship.
                </p>
              </div>
              <div className="criterion">
                <h4>Traceable Origins</h4>
                <p>
                  Direct-trade micro-lots with transparent farm washing data.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Bars & CTA */}
          <div className="bars">
            <span className="label">
              Citywide Quality Breakdown (2024) • N = 142 locations
            </span>
            <div style={{ marginTop: 24 }}>
              <div className="bar">
                <div className="bar-top">
                  <span>Spaces with verified dual outlets per desk</span>
                  <strong>78%</strong>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div className="bar">
                <div className="bar-top">
                  <span>Cafes operating on-site micro-roasteries</span>
                  <strong>42%</strong>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: "42%" }}></div>
                </div>
              </div>
            </div>
            <div className="cta" style={{ marginTop: 12 }}>
              <div>
                <h3>Have a cafe in Solo that meets our criteria?</h3>
                <p>Submit your space for independent field audit.</p>
              </div>
              <a href="#" className="btn-light">
                Submit Space
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

