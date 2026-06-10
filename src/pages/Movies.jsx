import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h1 className="text-3xl font-bold">
              Películas
            </h1>

            <p className="text-gray-500 mt-2">
              Tu colección personal de películas.
            </p>
          </div>

          <button className="bg-black text-white px-5 py-3 rounded-xl hover:opacity-90 transition">
            + Agregar película
          </button>

        </div>


        <div className="mt-8 flex flex-wrap gap-3">

          <button className="px-4 py-2 rounded-full bg-black text-white">
            Completadas (0)
          </button>

          <button className="px-4 py-2 rounded-full border">
            Pendientes (0)
          </button>

          <button className="px-4 py-2 rounded-full border">
            En progreso (0)
          </button>

          <button className="px-4 py-2 rounded-full border">
            Abandonadas (0)
          </button>

        </div>

     <div className="mt-10 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">

            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />

    </div>

      </main>
      <Footer />
    </>
  );
}