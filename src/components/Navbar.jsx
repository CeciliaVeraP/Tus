import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [openExplore, setOpenExplore] = useState(false);
  const exploreRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  

  function goHome() {
  if (location.pathname === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    navigate("/");
  }
}  

function navigateOrScroll(path) {
  if (location.pathname === path) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    navigate(path);
  }
}

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
          <button
            onClick={goHome}
            className="text-2xl font-semibold tracking-wide"
          >
            TUS
          </button>

          <nav className="flex items-center gap-6 text-gray-600">
          <button
            onClick={goHome}
            className="hover:text-black transition"
          >
            Inicio
          </button>

          <button
            onClick={() => navigateOrScroll("/peliculas")}
            className="hover:text-black transition"
          >
            Películas
          </button>

          <button
            onClick={() => navigateOrScroll("/series")}
            className="hover:text-black transition"
          >
            Series
          </button>

          <button
            onClick={() => navigateOrScroll("/libros")}
            className="hover:text-black transition"
          >
            Libros
          </button>

          <button
            onClick={() => navigateOrScroll("/favoritos")}
            className="hover:text-black transition"
          >
            Favoritos
          </button>

            <button
              onClick={() => navigateOrScroll("/listas")}
              className="hover:text-black transition"
            >
              Mis Listas
            </button>

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
                <button
                  onClick={() => {
                    navigateOrScroll("/explorar/peliculas");
                    setOpenExplore(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Películas
                </button>

                <button
                  onClick={() => {
                    navigateOrScroll("/explorar/series");
                    setOpenExplore(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Series
                </button>

                  <button
                    onClick={() => {
                      navigateOrScroll("/explorar/libros");
                      setOpenExplore(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Libros
                  </button>

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