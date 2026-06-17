import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Gallery />
        <Pricing />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
