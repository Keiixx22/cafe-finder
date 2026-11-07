import cafes from "@/data/cafes.json";

export function getCafes() {
  return cafes;
}

export function getCafeBySlug(slug) {
<<<<<<< HEAD
  return cafes.find((cafe) => cafe.slug === slug);
}
=======
    return cafes.find(cafe => cafe.slug === slug)
}
>>>>>>> 6740dc270e29c4df40a5453e9bd9908d2e567f09
