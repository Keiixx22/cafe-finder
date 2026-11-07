"use client";

import { useState } from "react";
import CafeCard from "./CafeCard";
import cafes from "@/data/cafes.json";

const VIBES = [
  { label: "All (142)", value: "" },
  { label: "Heritage (Laweyan)", value: "Heritage" },
  { label: "Open Air Garden", value: "Open Air Garden" },
  { label: "Late Night", value: "Late Night" },
];

export default function CafeList() {
  const [activeVibe, setActiveVibe] = useState("");

  const filtered = cafes.filter((cafe) => {
    if (activeVibe && cafe.vibe !== activeVibe) return false;
    return true;
  });

  return (
    <section id="lists">
      <div className="wrap">
        {/* Section Header */}
        <div className="section-head">
          <div>
            <span className="label">Editorial Dossier • Issue 04</span>
            <h2 className="display">Distinctive Brew Houses of Solo</h2>
          </div>
          <a href="#" className="link-cta">
            View all 142 documented spaces
          </a>
        </div>

        {/* Vibe Tabs */}
        <div className="tabs">
          {VIBES.map((vibe) => (
            <button
              key={vibe.value}
              className={`tab ${activeVibe === vibe.value ? "active" : ""}`}
              onClick={() => setActiveVibe(vibe.value)}
            >
              {vibe.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="cards">
          {filtered.map((cafe) => (
            <CafeCard key={cafe.slug} cafe={cafe} />
          ))}
          {filtered.length === 0 && (
            <p className="empty" style={{ display: "block" }}>
              Tidak ada cafe yang cocok dengan pencarian Anda.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

