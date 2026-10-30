import Link from "next/link";
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
      </div>
    </article>
  );
}
