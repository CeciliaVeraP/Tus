import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [openExplore, setOpenExplore] = useState(false);
  const exploreRef = useRef(null);
  useEffect(() => {
  function handleClickOutside(event) {
    if (
      exploreRef.current &&
      !exploreRef.current.contains(event.target)
    ) {
      setOpenExplore(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="text-2xl font-semibold tracking-wide"
          >
            TUS
          </Link>

          <nav className="flex items-center gap-6 text-gray-600">
            <Link to="/" className="hover:text-black transition">
              Inicio
            </Link>

            <Link to="/peliculas" className="hover:text-black transition">
              Películas
            </Link>

            <Link to="/series" className="hover:text-black transition">
              Series
            </Link>

            <Link to="/libros" className="hover:text-black transition">
              Libros
            </Link>

            <Link to="/favoritos" className="hover:text-black transition">
              Favoritos
            </Link>

            <Link to="/etiquetas" className="hover:text-black transition">
              Etiquetas
            </Link>

                        <div
            ref={exploreRef}
            className="relative"
                        >
              <button
                onClick={() => setOpenExplore(!openExplore)}
                className="hover:text-black transition cursor-pointer"
              >
                Explorar ▼
              </button>

              {openExplore && (
                <div className=" absolute top-8 left-0 bg-white border rounded-lg shadow-md w-40">
                  <Link
                    to="/explorar/peliculas"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenExplore(false)}
                  >
                    Películas
                  </Link>

                  <Link
                    to="/explorar/series"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenExplore(false)}
                  >
                    Series
                  </Link>

                  <Link
                    to="/explorar/libros"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenExplore(false)}
                  >
                    Libros
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="border rounded-xl px-4 py-2 w-64"
          />
          <button className="text-xl">👤</button>
        </div>

      </div>
    </header>
  );
}