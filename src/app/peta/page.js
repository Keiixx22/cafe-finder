import { getCafes } from "@/lib/cafes";
import PetaView from "@/components/PetaView";

export const metadata = { title: "Peta Interaktif & Radius — RuangKafe" };

export default function PetaPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-4 py-10 md:px-12">
      <h1 className="font-display text-3xl font-bold md:text-4xl">Peta Interaktif &amp; Radius Jarak Kafe Surakarta</h1>
      <p className="mb-8 mt-2 max-w-2xl text-ink-soft">
        Pilih titik acuan dan rentang jangkauan. Status keramaian belum tersedia karena belum ada laporan.
      </p>
      <PetaView cafes={getCafes()} />
    </main>
  );
}
