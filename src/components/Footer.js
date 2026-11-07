export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <div>
          <div className="brand">
            <strong>SOLO BREW</strong>
          </div>
          <p
            style={{
              fontSize: 12,
              color: "var(--ink-3)",
              marginTop: 6,
            }}
          >
            An independent architectural coffee index cataloging the heritage
            roasters, modernist spaces, and specialty coffee houses across
            Surakarta.
          </p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Submit a Roastery</a>
        </div>
        <div className="label">
          © 2024 Solo Brew Archive. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

