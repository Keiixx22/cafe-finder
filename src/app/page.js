<<<<<<< HEAD
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CafeList from "@/components/CafeList";
import MapSection from "@/components/MapSection";
import Districts from "@/components/Districts";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
=======
import Link from "next/link";
import { getCafes } from "@/lib/cafes";
import CafeCard from "@/components/CafeCard";
>>>>>>> 6740dc270e29c4df40a5453e9bd9908d2e567f09

export default function Home() {
  const cafes = getCafes().slice(0, 4);
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <main>
        <Hero />
        <CafeList />
        <MapSection />
        <Districts />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
=======
    <main>
      <section className="bg-surface-low">
        <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-12 md:py-24">
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">Temukan Kafe Surakarta Sesuai Kebutuhanmu</h1>
          <p className="mt-4 max-w-xl text-ink-soft">Cari berdasarkan area dan radius dari kampus atau lokasimu.</p>
          <form action="/cafe" role="search" className="mt-8 flex max-w-2xl flex-col gap-2 rounded-lg bg-white p-3 sm:flex-row">
            <label htmlFor="hq" className="sr-only">Nama kafe atau area</label>
            <input id="hq" name="q" placeholder="Nama kafe atau area, mis. Laweyan" className="flex-1 rounded-md bg-surface px-3 py-3 text-sm" />
            <button className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white">Cari Kafe</button>
          </form>
          <Link href="/cafe" className="mt-4 inline-block text-sm font-semibold text-brand-deep underline">Jelajahi semua kafe</Link>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 py-12 md:px-12">
        <h2 className="font-display text-2xl font-bold">Kafe di Surakarta dan sekitarnya</h2>
        <p className="mb-6 mt-1 text-xs text-ink-soft">Data contoh dari OpenStreetMap; belum diverifikasi.</p>
        <div className="grid gap-4 md:grid-cols-2">{cafes.map((c) => <CafeCard key={c.id} cafe={c} />)}</div>
      </section>
    </main>
>>>>>>> 6740dc270e29c4df40a5453e9bd9908d2e567f09
  );
}
