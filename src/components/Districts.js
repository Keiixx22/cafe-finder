const DISTRICTS = [
  {
    id: "Laweyan",
    idx: "01 / WEST",
    name: "Laweyan",
    count: "38 Spaces",
    desc: "High fortress brick walls and vintage batik merchant estates converted into quiet courtyards.",
    key: "Key specialty: Java Typica, Cold Drip",
    view: "View Laweyan archive →",
  },
  {
    id: "Banjarsari",
    idx: "02 / NORTH-CENTRAL",
    name: "Banjarsari",
    count: "52 Spaces",
    desc: "The creative engine of Solo. Contemporary brutalist architecture and independent micro-roasters.",
    key: "Key specialty: Nordic Roast, Geisha Lots",
    view: "View Banjarsari archive →",
  },
  {
    id: "Jebres",
    idx: "03 / EAST",
    name: "Jebres",
    count: "34 Spaces",
    desc: "Home to Universitas Sebelas Maret (UNS). Dynamic 24-hour study labs and high-speed fiber hubs.",
    key: "Key specialty: Aeropress, Cold Brew Bottles",
    view: "View Jebres archive →",
  },
  {
    id: "Pasar Kliwon",
    idx: "04 / SOUTH-EAST",
    name: "Pasar Kliwon",
    count: "18 Spaces",
    desc: "Historic spice market vicinity. Aromatic cardamom coffee traditions blended with third-wave espresso nooks.",
    key: "Key specialty: Kopi Rempah, Fine Robusta",
    view: "View Kliwon archive →",
  },
];

export default function Districts() {
  return (
    <section id="districts">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="label">District Topography</span>
            <h2 className="display">Explore Surakarta by Quarter</h2>
            <p
              style={{
                marginTop: 10,
                color: "var(--ink-2)",
                fontSize: 14,
                maxWidth: 560,
              }}
            >
              Each corner of Solo carries distinct coffee culture—from silent
              walled heritage compounds to modernist university study lounges.
            </p>
          </div>
        </div>
        <div className="districts">
          {DISTRICTS.map((d) => (
            <button key={d.id} className="district">
              <span className="idx">{d.idx}</span>
              <h3>{d.name}</h3>
              <span className="count">{d.count}</span>
              <p>{d.desc}</p>
              <span className="key">{d.key}</span>
              <span className="view">{d.view}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

