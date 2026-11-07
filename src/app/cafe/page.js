import { getCafes } from "@/lib/cafes";
import CafeExplorer from "@/components/CafeExplorer";

export const metadata = { title: "Eksplorasi Kafe — RuangKafe" };

export default async function CafePage({ searchParams }) {
  const { q = "" } = await searchParams;
  return (
    <main className="mx-auto max-w-[1280px] px-4 py-10 md:px-12">
      <h1 className="font-display text-3xl font-bold md:text-4xl">Eksplorasi Kafe Surakarta</h1>
      <p className="mb-8 mt-2 max-w-xl text-ink-soft">Cari berdasarkan nama atau area, lalu batasi dengan radius dari titik acuan.</p>
      <CafeExplorer cafes={getCafes()} initialQuery={q} />
    </main>
  );
}
