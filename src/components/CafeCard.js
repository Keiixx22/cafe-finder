import Link from "next/link";

export default function CafeCard({ cafe }) {
  return (
    <article className="card">
      <div className="card-img">
        <span className="tag mono">Cafe</span>
      </div>
      <div className="card-body">
        <span className="card-district">{cafe.address}</span>
        <h3>
          <Link href={`/cafe/${cafe.slug}`}>{cafe.name}</Link>
        </h3>
        <div className="pills">
          <span className="pill">
            LAT: {cafe.lat.toFixed(4)}
          </span>
          <span className="pill">
            LNG: {cafe.lng.toFixed(4)}
          </span>
        </div>
        <div className="card-meta">
          <span>
            <span className="stars">☕</span> Specialty Cafe
          </span>
          <span className="mono">ID #{cafe.id}</span>
        </div>
      </div>
    </article>
  );
}
