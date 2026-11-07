"use client";

import { useState } from "react";

export default function Newsletter() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Terima kasih! Anda telah berlangganan Solo Brew Dispatch.");
    e.target.reset();
  }

  return (
    <section>
      <div className="wrap">
        <div className="newsletter">
          <div>
            <span className="label">Solo Brew Dispatch • Bi-Weekly</span>
            <h2
              className="display"
              style={{ fontSize: 32, letterSpacing: "-.8px", marginTop: 6 }}
            >
              Never miss a new roast release or architectural opening in
              Surakarta.
            </h2>
            <p
              style={{
                marginTop: 12,
                color: "var(--ink-2)",
                fontSize: 14,
              }}
            >
              Sent every other Thursday. Curated tasting notes, secret courtyard
              addresses, and invites to closed-door cupping sessions.
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="your.email@domain.com"
                required
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <p className="label" style={{ marginTop: 10 }}>
              Join 2,400+ readers
            </p>
            {message && (
              <p
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  color: "var(--ink-2)",
                }}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

