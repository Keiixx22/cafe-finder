"use client";

import { useRef, useCallback } from "react";

export default function Navbar({ onSearch }) {
  const inputRef = useRef(null);

  const handleKeyboard = useCallback((e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  }, []);

  // Register global keyboard shortcut
  if (typeof window !== "undefined") {
    // We'll use useEffect in the parent or rely on the event below
  }

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#" className="brand">
          <strong>SOLO</strong>
          <strong>BREW</strong>
        </a>
        <nav className="nav-links">
          <a href="#explore">Explore</a>
          <a href="#districts">Districts</a>
          <a href="#lists">Curated Lists</a>
          <a href="#roasteries">Roasteries</a>
          <a href="#about">About</a>
        </nav>
        <label className="search-mini">
          <span>⌕</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search cafes, beans, vibes..."
            onChange={(e) => onSearch?.(e.target.value)}
          />
          <span className="kbd">⌘K</span>
        </label>
      </div>
    </header>
  );
}

