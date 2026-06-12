import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function createSlug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export default function ExploreSection({ category, movies }) {
  return (
    <section className="mt-12">

      <div className="flex items-center gap-6 mb-4">

        <h2 className="text-2xl font-semibold">
          {category}
        </h2>

        <Link
          to={`/explorar/peliculas/categoria/${createSlug(category)}`}
          className="text-sm text-gray-700 hover:text-black transition"
        >
          Ver todas →
        </Link>

      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
          />
        ))}

      </div>

    </section>
  );
}