"use client";

import dynamic from "next/dynamic";

const CafeMap = dynamic(() => import("@/components/CafeMap"), {
  ssr: false,
  loading: () => <div className="grid h-[360px] place-items-center rounded-lg bg-surface-mid text-sm text-ink-soft lg:h-[560px]">Memuat peta…</div>,
});

export default CafeMap;
