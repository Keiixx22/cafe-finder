import Link from "next/link";
<<<<<<< HEAD

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
=======
import { formatDistance } from "@/lib/geo";

export default function CafeCard({ cafe, distance }) {
  return (
    <article className="flex flex-col gap-2 rounded-lg border border-line bg-white p-5 transition hover:border-brand">
      <Link href={`/cafe/${cafe.slug}`} className="font-display text-lg font-semibold hover:text-brand-deep">
        {cafe.name}
      </Link>
      <p className="text-sm text-ink-soft">{cafe.address}</p>
      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
        {distance != null && (
          <span className="rounded-full bg-brand-tint px-2.5 py-1 font-semibold text-brand-deep">
            {formatDistance(distance)} (garis lurus)
          </span>
        )}
        <span className="rounded-full bg-surface-mid px-2.5 py-1 text-ink-soft">Status keramaian: belum ada laporan</span>
>>>>>>> 6740dc270e29c4df40a5453e9bd9908d2e567f09
      </div>
    </article>
  );
}
