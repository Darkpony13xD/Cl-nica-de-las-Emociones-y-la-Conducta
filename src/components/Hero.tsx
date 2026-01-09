export default function Hero() {
  return (
    <section id="inicio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold serif">Clínica de las Emociones y la Conducta</h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Un espacio seguro y profesional para acompañarte en tu bienestar emocional.
        </p>
        <div className="mt-8">
          <a href="#contacto" className="inline-block px-6 py-3 rounded-xl bg-accent text-white font-semibold">
            Agendar cita
          </a>
        </div>
      </div>
    </section>
  );
}
