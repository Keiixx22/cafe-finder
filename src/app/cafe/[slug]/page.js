import Link from "next/link";
import { notFound } from "next/navigation";
import { getCafeBySlug } from "@/lib/cafes";

export async function generateMetadata({ params }) {
  const cafe = getCafeBySlug((await params).slug);
  return { title: cafe ? `${cafe.name} — RuangKafe` : "Kafe tidak ditemukan" };
}

export default async function CafeDetail({ params }) {
  const cafe = getCafeBySlug((await params).slug);
  if (!cafe) notFound();
  const na = <span className="text-ink-soft">Belum tersedia</span>;
  return (
    <main className="mx-auto max-w-[960px] px-4 py-10 md:px-12">
      <Link href="/cafe" className="text-sm font-semibold text-brand-deep">← Semua kafe</Link>
      <h1 className="mt-4 font-display text-3xl font-bold">{cafe.name}</h1>
      <p className="mt-2 text-ink-soft">{cafe.address}</p>
      <dl className="mt-8 grid gap-4 rounded-lg bg-white p-6 sm:grid-cols-2">
        {[["Koordinat", `${cafe.lat}, ${cafe.lng}`], ["Jam buka", cafe.hours], ["Kisaran harga", cafe.price], ["Fasilitas", cafe.facilities?.join(", ")], ["Status keramaian", null]].map(([k, v]) => (
          <div key={k}><dt className="text-sm font-semibold">{k}</dt><dd className="mt-1 text-sm">{v ?? na}</dd></div>
        ))}
      </dl>
      <a className="mt-6 inline-block rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white"
        href={`https://www.openstreetmap.org/directions?to=${cafe.lat}%2C${cafe.lng}`} target="_blank" rel="noopener noreferrer">
        Petunjuk arah (OpenStreetMap)
      </a>
    </main>
  );
}
