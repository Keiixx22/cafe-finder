import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CafeList from "@/components/CafeList";
import MapSection from "@/components/MapSection";
import Districts from "@/components/Districts";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CafeList />
        <MapSection />
        <Districts />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
