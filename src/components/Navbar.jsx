import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-10">

          <h1 className="text-2xl font-semibold tracking-wide">
            TUS
          </h1>

          <nav className="flex gap-6 text-gray-600">
            <Link to="/" className="hover:text-black transition">
              Inicio
            </Link>

            <Link to="/peliculas" className="hover:text-black transition">
              Películas
            </Link>

            <Link to="/series" className="hover:text-black transition">
              Series
            </Link>

            <Link to="/libros"className="hover:text-black transition">
              Libros
            </Link>

            <Link to="/favoritos" className="hover:text-black transition">
              Favoritos
            </Link>

            <Link to="/etiquetas" className="hover:text-black transition">
              Etiquetas
            </Link>
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