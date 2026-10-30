import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "RuangKafe — Cafe Finder Surakarta",
  description:
    "Temukan kafe di Surakarta yang sesuai area, radius, fasilitas, anggaran, dan kenyamananmu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
