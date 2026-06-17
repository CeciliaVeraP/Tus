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

  const availableLists = [
  "Ver con mi novio",
  "Favoritas 2026",
  "Para llorar",
  "Marvel",
];
const [showLists, setShowLists] = useState(false);
const [selectedLists, setSelectedLists] = useState([]);

function getStatusLabel(status) {
  const labels = {
    pending: "Pendiente",
    progress: "En progreso",
    completed: "Completada",
    abandoned: "Abandonada",
  };

  return labels[status] || status;
}

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
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
    <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">

      <div className="mb-6">
        <p className="text-sm text-gray-500">
          Guardar en tu biblioteca
        </p>

        <div className="mt-2 flex items-start justify-between gap-4">
          <h2 className="text-2xl font-bold">
            {movie?.title}
          </h2>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          ✓ {getStatusLabel(selectedStatus)}
        </span>
                </div>
      </div>

      <div className="space-y-5">

        <div>
          <label className="mb-2 block text-sm font-medium">
            ¿Cuándo la viste?
          </label>

<select
  className="w-full rounded-2xl border bg-gray-50 px-4 py-3 outline-none transition focus:border-black focus:bg-white"
>
  <option value="">
    Selecciona un año
  </option>

  {Array.from({ length: 80 }, (_, index) => {
    const year = new Date().getFullYear() - index;

    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  })}
</select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            ¿Quieres dejar un recuerdo?
          </label>

          <textarea
            placeholder="Puedes escribir una opinión, una emoción o con quién la viste..."
            rows="4"
            className="w-full resize-none rounded-2xl border bg-gray-50 px-4 py-3 outline-none transition focus:border-black focus:bg-white"
          />
        </div>

        <div>

          {selectedLists.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">

              {selectedLists.map((list) => (
                <span
                  key={list}
                  className="rounded-full bg-black px-3 py-1 text-sm text-white"
                >
                  {list}
                </span>
              ))}

            </div>
          )}

          <button
            type="button"
            onClick={() => setShowLists(!showLists)}
            className="w-full rounded-2xl border border-dashed px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50"
          >
            + Agregar a listas
          </button>

          {showLists && (
            <div className="mt-3 rounded-2xl bg-gray-50 p-3">

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

                {availableLists.map((list) => (
                  <button
                    key={list}
                    type="button"
                    onClick={() => {
                      if (selectedLists.includes(list)) {
                        setSelectedLists(
                          selectedLists.filter(
                            (item) => item !== list
                          )
                        );
                      } else {
                        setSelectedLists([
                          ...selectedLists,
                          list,
                        ]);
                      }
                    }}
                    className={`rounded-xl px-3 py-2 text-left text-sm transition ${
                      selectedLists.includes(list)
                        ? "bg-black text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {list}
                  </button>
                ))}

              </div>

              <button
                type="button"
                className="mt-3 w-full rounded-xl border border-dashed bg-white px-3 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                + Crear nueva lista
              </button>

            </div>
          )}

        </div>

      </div>

      <div className="mt-7 flex justify-end gap-3">

        <button
          onClick={() => setShowModal(false)}
          className="rounded-2xl px-5 py-3 text-gray-600 transition hover:bg-gray-100"
        >
          Cancelar
        </button>

        <button
          onClick={() => {
            setShowModal(false);
            showToast(
              "✓ Agregada a tu biblioteca correctamente"
            );
          }}
          className="rounded-2xl bg-black px-5 py-3 text-white transition hover:opacity-90"
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