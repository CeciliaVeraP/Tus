import MainLayout from "../layouts/MainLayout";
import MovieCard from "../components/MovieCard";
import moviesMock from "../data/moviesMock";
import { Link } from "react-router-dom";

export default function AllMovies() {

  const allMovies = moviesMock.flatMap(
    (category) => category.movies
  );

  return (
    <MainLayout>
      <main className="max-w-7xl mx-auto px-6 py-8">

      <Link
      to="/explorar/peliculas"
      className="text-sm text-gray-500 hover:text-black transition"
      > ← Volver
      </Link>

        <h1 className="text-3xl font-bold">
          Todas las películas
        </h1>

        <p className="text-gray-500 mt-2">
          Explora el catálogo completo de películas.
        </p>



        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">

          {allMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
            />
          ))}

        </div>

      </main>
    </MainLayout>
  );
}