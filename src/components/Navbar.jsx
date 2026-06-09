export default function Navbar() {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-10">

          <h1 className="text-2xl font-semibold tracking-wide">
            TUS
          </h1>

          <nav className="flex gap-6 text-gray-600">
            <a href="#" className="hover:text-black transition">
              Inicio
            </a>

            <a href="#" className="hover:text-black transition">
              Películas
            </a>

            <a href="#" className="hover:text-black transition">
              Series
            </a>

            <a href="#" className="hover:text-black transition">
              Libros
            </a>

            <a href="#" className="hover:text-black transition">
              Favoritos
            </a>

            <a href="#" className="hover:text-black transition">
              Etiquetas
            </a>
          </nav>

        </div>

        <div className="flex items-center gap-4">

          <input
            type="text"
            placeholder="Buscar..."
            className="border rounded-xl px-4 py-2 w-64"
          />

          <button className="text-xl">
            👤
          </button>

        </div>

      </div>
    </header>
  );
}