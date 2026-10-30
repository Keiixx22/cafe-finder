"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Marker memakai circleMarker agar tidak bergantung pada aset ikon bawaan Leaflet.
export default function CafeMap({ origin, radius, items, selectedId, onSelect }) {
  const elRef = useRef(null);
  const mapRef = useRef(null);
  const groupRef = useRef(null);
  const onSelectRef = useRef(onSelect);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    const map = L.map(elRef.current, { zoomControl: true }).setView([origin.lat, origin.lng], 14);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    groupRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
    // Inisialisasi sekali; pembaruan ditangani efek di bawah.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const group = groupRef.current;
    if (!map || !group) return;
    group.clearLayers();

    L.circleMarker([origin.lat, origin.lng], { radius: 8, color: "#fff", weight: 2, fillColor: "#30312e", fillOpacity: 1 })
      .bindTooltip(`Titik acuan: ${origin.label}`)
      .addTo(group);

    let circle = null;
    if (radius) {
      circle = L.circle([origin.lat, origin.lng], {
        radius, color: "#c2410c", weight: 2, dashArray: "6 6", fillColor: "#c2410c", fillOpacity: 0.08,
      }).addTo(group);
    }

    items.forEach(({ cafe }) => {
      const selected = cafe.id === selectedId;
      L.circleMarker([cafe.lat, cafe.lng], {
        radius: selected ? 11 : 8, color: "#fff", weight: 2,
        fillColor: selected ? "#9b2f00" : "#c2410c", fillOpacity: 1,
      })
        .bindTooltip(cafe.name)
        .on("click", () => onSelectRef.current(cafe.id))
        .addTo(group);
    });

    if (circle) map.fitBounds(circle.getBounds(), { padding: [24, 24] });
    else if (items.length) map.fitBounds(L.latLngBounds(items.map(({ cafe }) => [cafe.lat, cafe.lng]).concat([[origin.lat, origin.lng]])), { padding: [24, 24] });
    else map.setView([origin.lat, origin.lng], 14);
  }, [origin, radius, items, selectedId]);

  return <div ref={elRef} className="h-[360px] w-full rounded-lg lg:h-[560px]" role="region" aria-label="Peta kafe dan radius jangkauan" />;
}
