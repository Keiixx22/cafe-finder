import cafes from "@/data/cafes.json";

export function getCafes() {
  return cafes;
}

export function getCafeBySlug(slug) {
  return cafes.find((cafe) => cafe.slug === slug);
}
