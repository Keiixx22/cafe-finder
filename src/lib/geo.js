// Titik acuan dari design.md §3.3. Koordinat perkiraan; verifikasi sebelum rilis.
export const REFERENCE_POINTS = [
  { id: "ums", label: "UMS (Pabelan)", lat: -7.5555, lng: 110.7712 },
  { id: "uns", label: "UNS (Kentingan)", lat: -7.5611, lng: 110.8561 },
  { id: "manahan", label: "Stadion Manahan", lat: -7.5546, lng: 110.8048 },
  { id: "pusat", label: "Pusat Kota (Gladak)", lat: -7.5707, lng: 110.8282 },
];
export const RADIUS_OPTIONS = [500, 1000, 2000, 3000, 5000];

// Jarak garis lurus (haversine) dalam meter — bukan jarak jalan.
export function distanceMeters(a, b) {
  const R = 6371000, rad = (d) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat), dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
export function formatDistance(m) {
  return m < 1000 ? `${Math.round(m)} m` : `${(m / 1000).toFixed(1).replace(".", ",")} km`;
}
