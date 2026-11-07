import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-surface-mid">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-12 md:grid-cols-3 md:px-12">
        <div>
          <p className="font-display text-xl font-bold text-white">RuangKafe Surakarta</p>
          <p className="mt-3 max-w-sm text-sm text-line">
            Cari kafe di Surakarta berdasarkan area, radius, fasilitas, anggaran, dan kenyamanan.
          </p>
        </div>
        <nav aria-label="Jelajahi" className="text-sm">
          <p className="font-display font-bold text-white">Jelajahi</p>
          <ul className="mt-3 space-y-2">
            <li><Link href="/cafe" className="hover:text-white">Semua Kafe</Link></li>
            <li><Link href="/peta" className="hover:text-white">Peta &amp; Radius</Link></li>
            <li><Link href="/koleksi" className="hover:text-white">Koleksi Saya</Link></li>
          </ul>
        </nav>
        <p className="text-sm text-line">
          Status keramaian berasal dari laporan komunitas/pengelola, bukan penghitungan otomatis.
        </p>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-line">
        © {new Date().getFullYear()} RuangKafe. Data contoh ditandai jelas pada tiap halaman.
      </div>
    </footer>
  );
}
