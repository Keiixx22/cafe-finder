"use client";

import { useMemo, useState } from "react";
import CafeCard from "@/components/CafeCard";
import { REFERENCE_POINTS, RADIUS_OPTIONS, distanceMeters, formatDistance } from "@/lib/geo";

export default function CafeExplorer({ cafes, initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [refId, setRefId] = useState("ums");
  const [custom, setCustom] = useState(null); // dari geolocation
  const [radius, setRadius] = useState(null); // null = semua
  const [geoState, setGeoState] = useState("idle"); // idle | loading | denied | unsupported | error

  const ref = custom ?? REFERENCE_POINTS.find((p) => p.id === refId);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cafes
      .map((c) => ({ cafe: c, d: distanceMeters(ref, c) }))
      .filter(({ cafe, d }) => (!q || `${cafe.name} ${cafe.address}`.toLowerCase().includes(q)) && (radius == null || d <= radius))
      .sort((a, b) => a.d - b.d);
  }, [cafes, query, ref, radius]);

  function useMyLocation() {
    if (!("geolocation" in navigator)) return setGeoState("unsupported");
    setGeoState("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCustom({ id: "gps", label: "Lokasi Saya", lat: pos.coords.latitude, lng: pos.coords.longitude });
        setGeoState("idle");
      },
      (err) => setGeoState(err.code === 1 ? "denied" : "error"),
      { timeout: 10000 },
    );
  }
  const geoMsg = {
    denied: "Izin lokasi ditolak. Pilih titik acuan manual di bawah.",
    unsupported: "Perangkat ini tidak mendukung geolokasi. Pilih titik acuan manual.",
    error: "Lokasi tidak berhasil ditentukan. Coba lagi atau pilih titik acuan manual.",
  }[geoState];
  const chip = (on) => `rounded-full px-3 py-2 text-sm font-semibold transition ${on ? "bg-brand text-white" : "bg-surface-mid text-ink-warm hover:bg-surface-high"}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <form role="search" onSubmit={(e) => e.preventDefault()} className="space-y-5 rounded-lg bg-white p-5 lg:sticky lg:top-24 lg:self-start">
        <div>
          <label htmlFor="q" className="text-sm font-semibold">Nama kafe atau area</label>
          <input id="q" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="mis. Laweyan, Pabelan"
            className="mt-2 w-full rounded-md border border-line bg-surface px-3 py-2.5 text-sm" />
        </div>
        <fieldset>
          <legend className="text-sm font-semibold">Titik acuan</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {REFERENCE_POINTS.map((p) => (
              <button type="button" key={p.id} aria-pressed={!custom && refId === p.id} className={chip(!custom && refId === p.id)}
                onClick={() => { setCustom(null); setRefId(p.id); }}>{p.label}</button>
            ))}
            <button type="button" onClick={useMyLocation} disabled={geoState === "loading"} aria-pressed={!!custom} className={chip(!!custom)}>
              {geoState === "loading" ? "Mencari lokasi…" : "Gunakan Lokasi Saya"}
            </button>
          </div>
          {geoMsg && <p role="alert" className="mt-2 text-sm text-brand-deep">{geoMsg}</p>}
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold">Radius</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" aria-pressed={radius == null} className={chip(radius == null)} onClick={() => setRadius(null)}>Semua</button>
            {RADIUS_OPTIONS.map((r) => (
              <button type="button" key={r} aria-pressed={radius === r} className={chip(radius === r)} onClick={() => setRadius(r)}>{formatDistance(r)}</button>
            ))}
          </div>
        </fieldset>
        <button type="button" onClick={() => { setQuery(""); setRadius(null); setCustom(null); setRefId("ums"); }}
          className="text-sm font-semibold text-brand-deep underline">Atur ulang filter</button>
      </form>

      <section aria-live="polite">
        <p className="mb-1 text-sm font-semibold">{results.length} kafe ditemukan</p>
        <p className="mb-4 text-xs text-ink-soft">Jarak dihitung garis lurus dari {ref.label}, bukan jarak jalan atau waktu tempuh.</p>
        {results.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {results.map(({ cafe, d }) => <CafeCard key={cafe.id} cafe={cafe} distance={d} />)}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-line bg-white p-8 text-center">
            <p className="font-display text-lg font-semibold">Tidak ada kafe yang cocok</p>
            <p className="mt-1 text-sm text-ink-soft">Coba perbesar radius atau hapus kata kunci.</p>
            <button type="button" onClick={() => { setQuery(""); setRadius(null); }} className="mt-4 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white">Atur ulang filter</button>
          </div>
        )}
      </section>
    </div>
  );
}
