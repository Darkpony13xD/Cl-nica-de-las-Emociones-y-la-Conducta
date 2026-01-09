export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Clínica de las Emociones y la Conducta. Todos los derechos reservados.
      </div>
    </footer>
  );
}
