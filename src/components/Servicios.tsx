export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-serene">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold serif mb-8">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">Terapia Individual</div>
          <div className="bg-white p-6 rounded-2xl shadow">Terapia de Pareja</div>
          <div className="bg-white p-6 rounded-2xl shadow">Acompañamiento Emocional</div>
        </div>
      </div>
    </section>
  );
}
