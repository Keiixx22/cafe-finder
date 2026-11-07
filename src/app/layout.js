<<<<<<< HEAD
import "./globals.css";

export const metadata = {
  title: "Solo Brew — Surakarta Cafe Finder",
  description:
    "Cataloging architectural spaces, heritage roasteries, and quiet work havens across Solo.",
=======
import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "RuangKafe — Cafe Finder Surakarta",
  description:
    "Temukan kafe di Surakarta yang sesuai area, radius, fasilitas, anggaran, dan kenyamananmu.",
>>>>>>> 6740dc270e29c4df40a5453e9bd9908d2e567f09
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
=======
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
>>>>>>> 6740dc270e29c4df40a5453e9bd9908d2e567f09
    </html>
  );
}
