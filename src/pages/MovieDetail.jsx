import MainLayout from "../layouts/MainLayout";
import { useParams, useNavigate } from "react-router-dom";
import moviesMock from "../data/moviesMock";
import { useState } from "react";
import { useToast } from "../context/ToastContext";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const userMovie = null;

  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState("");

  const movieData = moviesMock.find((category) =>
    category.movies.some((movie) => movie.id === Number(id))
  );

  const movie = movieData?.movies.find(
    (movie) => movie.id === Number(id)
  );

  const category = movieData?.category;
  const { showToast } = useToast();

  return (
    
    <>
      {/* TOAST */}
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {toast}
        </div>
      )}
      

      <MainLayout>
        <div className="max-w-6xl mx-auto px-4 py-6">

          {/* VOLVER */}
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-sm"
          >
            ← Volver
          </button>

          <div className="flex flex-col md:flex-row gap-8 mt-6">

            {/* POSTER */}
            <div className="w-full max-w-xs mx-auto md:mx-0">
              <div className="aspect-[2/3] rounded-2xl bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Poster</span>
              </div>
            </div>

            {/* INFO */}
            <div className="flex-1">

              <div className="flex items-start justify-between gap-4">
                <h1 className="text-3xl font-bold">
                  {movie?.title}
                </h1>

                <button className="text-2xl">☆</button>
              </div>

              <p className="text-gray-500 mt-2">
                {movie?.year} • {category}
              </p>

              {/* SINOPSIS */}
              <div className="mt-8">
                <h2 className="font-semibold text-lg mb-2">
                  Sinopsis
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {movie?.overview || "Sin sinopsis disponible."}
                </p>
              </div>

              {/* BIBLIOTECA */}
              <div className="mt-10">

                {!userMovie && (
                  <div className="space-y-3">

                    <h2 className="font-semibold text-lg">
                      Agregar a mi biblioteca
                    </h2>

                    <div className="flex flex-wrap gap-3">

                      {/* PENDIENTE */}
                      <button
                        onClick={() => setSelectedStatus("pending")}
                        className={`px-4 py-2 rounded-full border transition ${
                          selectedStatus === "pending"
                            ? "bg-black text-white border-black"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        Pendiente
                      </button>

                      {/* PROGRESO */}
                      <button
                        onClick={() => setSelectedStatus("progress")}
                        className={`px-4 py-2 rounded-full border transition ${
                          selectedStatus === "progress"
                            ? "bg-black text-white border-black"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        En progreso
                      </button>

                      {/* COMPLETADA */}
                      <button
                        onClick={() => {
                          setSelectedStatus("completed");
                          setShowModal(true);
                        }}
                        className={`px-4 py-2 rounded-full border transition ${
                          selectedStatus === "completed"
                            ? "bg-black text-white border-black"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        Completada
                      </button>

                      {/* ABANDONADA */}
                      <button
                        onClick={() => setSelectedStatus("abandoned")}
                        className={`px-4 py-2 rounded-full border transition ${
                          selectedStatus === "abandoned"
                            ? "bg-black text-white border-black"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        Abandonada
                      </button>

                    </div>

                    {/* DEBUG */}
                    {selectedStatus && (
                      <p className="mt-4 text-sm text-green-600">
                        Estado seleccionado: {selectedStatus}
                      </p>
                    )}

                  </div>
                )}

              </div>

            </div>
          </div>
        </div>
      </MainLayout>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">

          <div className="bg-white w-full max-w-md rounded-xl p-6">

            <h2 className="text-xl font-semibold mb-4">
              Agregar a tu biblioteca
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Estado: {selectedStatus}
            </p>

            <input
              type="text"
              placeholder="Año visto (opcional)"
              className="w-full border rounded-lg px-3 py-2 mb-3"
            />

            <textarea
              placeholder="Comentario (opcional)"
              className="w-full border rounded-lg px-3 py-2 mb-3"
              rows="3"
            />

            <input
              type="text"
              placeholder="Listas separadas por coma"
              className="w-full border rounded-lg px-3 py-2 mb-4"
            />

            <div className="flex justify-end gap-2">

              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancelar
              </button>

          <button
            onClick={() => {
              setShowModal(false);
              showToast("✓ Agregada a tu biblioteca correctamente");
            }}
            className="px-4 py-2 rounded-lg bg-black text-white"
          >
            Guardar
          </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default MovieDetail;