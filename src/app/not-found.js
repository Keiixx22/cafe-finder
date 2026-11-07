import Link from "next/link";

const AREAS = ["Manahan", "Laweyan", "Jebres", "Dekat UNS"];

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[720px] px-4 py-20 text-center">
      <p className="font-display text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-ink-soft">Alamat yang kamu buka tidak ada. Cari kafe langsung atau kembali ke beranda.</p>
      <form action="/cafe" role="search" className="mx-auto mt-8 flex max-w-md gap-2">
        <label htmlFor="nf-q" className="sr-only">Nama kafe atau area</label>
        <input id="nf-q" name="q" placeholder="Nama kafe atau area" className="flex-1 rounded-md border border-line bg-white px-3 py-2.5 text-sm" />
        <button className="rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white">Cari</button>
      </form>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {AREAS.map((a) => <Link key={a} href={`/cafe?q=${encodeURIComponent(a)}`} className="rounded-full bg-surface-mid px-3 py-2 text-sm font-semibold hover:bg-surface-high">{a}</Link>)}
      </div>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white">Kembali ke Beranda</Link>
        <Link href="/cafe" className="rounded-md bg-surface-mid px-5 py-3 text-sm font-semibold">Jelajahi Kafe</Link>
      </div>
    </main>
  );
}
