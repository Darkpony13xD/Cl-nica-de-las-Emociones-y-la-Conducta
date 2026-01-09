import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";

import Enfoque from "./components/sections/Enfoque";
import SobreNegocio from "./components/sections/SobreNegocio";
import ContactSection from "./components/sections/ContactSection";

import ScrollProgress from "./ui/ScrollProgress";
import FloatingContactButton from "./ui/FloatingContactButton";

const SHOW_BACKGROUND = true;

export default function App() {
  return (
    <div className="selection:bg-accent/20 selection:text-accent">
      <ScrollProgress />

      {SHOW_BACKGROUND && <AnimatedBackground />}

      <Navbar />

      <main>
        <Hero />
        <Enfoque />
        <Servicios />
        <SobreNegocio />
        <ContactSection />
      </main>

      <Footer />

      <FloatingContactButton />
    </div>
  );
}
