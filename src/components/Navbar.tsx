export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-bold">Clínica</a>
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#enfoque">Enfoque</a>
          <a href="#servicios">Servicios</a>
          <a href="#sobre-negocio">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>
    </header>
  );
}
