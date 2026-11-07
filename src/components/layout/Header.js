"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Hanya rute yang benar-benar ada yang ditautkan (tidak ada tombol tanpa tujuan).
const NAV = [
  { href: "/", label: "Beranda" },
  { href: "/cafe", label: "Eksplorasi Kafe" },
  { href: "/peta", label: "Peta Interaktif" },
  { href: "/koleksi", label: "Koleksi Saya" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 md:h-20 md:px-12">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold" onClick={() => setOpen(false)}>
          <span aria-hidden className="grid size-9 place-items-center rounded-md bg-brand text-white">☕</span>
          RuangKafe
          <span className="hidden rounded-full bg-brand-tint px-2 py-0.5 text-xs font-semibold text-brand-deep sm:inline">Surakarta</span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active ? "bg-brand text-white" : "text-ink-warm hover:bg-surface-mid"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/masuk" className="rounded-md bg-surface-mid px-3 py-2 text-sm font-semibold hover:bg-surface-high">
            Masuk
          </Link>
          <button
            type="button"
            className="rounded-md p-2 md:hidden"
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="nav-mobile" aria-label="Navigasi seluler" className="border-t border-line bg-surface px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-surface-mid">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
