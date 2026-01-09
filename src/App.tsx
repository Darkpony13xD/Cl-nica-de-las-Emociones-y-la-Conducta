import AnimatedBackground from "./Components/AnimatedBackground";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Servicios from "./Components/Servicios";

import Enfoque from "./Components/sections/Enfoque";
import SobreNegocio from "./Components/sections/SobreNegocio";
import ContactSection from "./Components/sections/ContactSection";

import ScrollProgress from "./UI/ScrollProgress";
import FloatingContactButton from "./UI/FloatingContactButton";

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
