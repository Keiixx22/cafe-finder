"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import CafeMap from "@/components/CafeMapLoader";
import { REFERENCE_POINTS, RADIUS_OPTIONS, distanceMeters, formatDistance } from "@/lib/geo";

export default function PetaView({ cafes }) {
  const [refId, setRefId] = useState("ums");
  const [custom, setCustom] = useState(null);
  const [radius, setRadius] = useState(2000);
  const [selectedId, setSelectedId] = useState(null);
  const [geoState, setGeoState] = useState("idle");

  const origin = custom ?? REFERENCE_POINTS.find((p) => p.id === refId);

  const items = useMemo(
    () =>
      cafes
        .map((cafe) => ({ cafe, d: distanceMeters(origin, cafe) }))
        .filter(({ d }) => radius == null || d <= radius)
        .sort((a, b) => a.d - b.d),
    [cafes, origin, radius],
  );

  function locate() {
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
    denied: "Izin lokasi ditolak. Pilih titik acuan manual.",
    unsupported: "Perangkat tidak mendukung geolokasi. Pilih titik acuan manual.",
    error: "Lokasi tidak berhasil ditentukan. Coba lagi atau pilih titik acuan manual.",
  }[geoState];
  const chip = (on) => `rounded-full px-3 py-2 text-sm font-semibold transition ${on ? "bg-brand text-white" : "bg-surface-mid text-ink-warm hover:bg-surface-high"}`;

  return (
    <div className="space-y-6">
      <div className="space-y-4 rounded-lg bg-white p-5">
        <fieldset>
          <legend className="text-sm font-semibold">Titik acuan</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {REFERENCE_POINTS.map((p) => (
              <button type="button" key={p.id} aria-pressed={!custom && refId === p.id} className={chip(!custom && refId === p.id)}
                onClick={() => { setCustom(null); setRefId(p.id); setSelectedId(null); }}>{p.label}</button>
            ))}
            <button type="button" onClick={locate} disabled={geoState === "loading"} aria-pressed={!!custom} className={chip(!!custom)}>
              {geoState === "loading" ? "Mencari lokasi…" : "Lokasi Saya"}
            </button>
          </div>
          {geoMsg && <p role="alert" className="mt-2 text-sm text-brand-deep">{geoMsg}</p>}
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold">Rentang jangkauan</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {RADIUS_OPTIONS.map((r) => (
              <button type="button" key={r} aria-pressed={radius === r} className={chip(radius === r)} onClick={() => setRadius(r)}>{formatDistance(r)}</button>
            ))}
            <button type="button" aria-pressed={radius == null} className={chip(radius == null)} onClick={() => setRadius(null)}>Tanpa batas</button>
          </div>
        </fieldset>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <CafeMap origin={origin} radius={radius} items={items} selectedId={selectedId} onSelect={setSelectedId} />

        <section aria-live="polite" className="lg:max-h-[560px] lg:overflow-y-auto">
          <p className="font-display text-lg font-bold">{items.length} kafe ditemukan</p>
          <p className="mb-3 text-xs text-ink-soft">
            {radius ? `Dalam ${formatDistance(radius)} dari ${origin.label}` : `Dari ${origin.label}`}. Jarak garis lurus, bukan jarak jalan atau waktu tempuh.
          </p>
          {items.length ? (
            <ul className="space-y-3">
              {items.map(({ cafe, d }) => {
                const on = cafe.id === selectedId;
                return (
                  <li key={cafe.id} className={`rounded-lg border bg-white p-4 ${on ? "border-brand-deep" : "border-line"}`}>
                    <button type="button" onClick={() => setSelectedId(cafe.id)} aria-pressed={on} className="w-full text-left">
                      <span className="block font-display font-semibold">{cafe.name}</span>
                      <span className="mt-0.5 block text-sm text-ink-soft">{cafe.address}</span>
                      <span className="mt-2 inline-block rounded-full bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand-deep">{formatDistance(d)} (garis lurus)</span>
                    </button>
                    <div className="mt-3 flex gap-2">
                      <a className="rounded-md bg-surface-mid px-3 py-2 text-xs font-semibold hover:bg-surface-high" target="_blank" rel="noopener noreferrer"
                        href={`https://www.openstreetmap.org/directions?from=${origin.lat}%2C${origin.lng}&to=${cafe.lat}%2C${cafe.lng}`}>Arahkan Rute</a>
                      <Link href={`/cafe/${cafe.slug}`} className="rounded-md bg-brand px-3 py-2 text-xs font-semibold text-white">Lihat Detail</Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="rounded-lg border border-dashed border-line bg-white p-6 text-center">
              <p className="font-semibold">Tidak ada kafe dalam radius ini</p>
              <button type="button" onClick={() => setRadius(null)} className="mt-3 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white">Hapus batas radius</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
