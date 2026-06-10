import MovieCard from "./MovieCard";

export default function ExploreSection({ category, movies }) {
  return (
    <section className="mt-12">

      <div className="flex items-center gap-6 mb-4">

        <h2 className="text-2xl font-semibold">
          {category}
        </h2>

        <button className="text-sm text-gray-700 hover:text-black transition">
          Ver todas →
        </button>

      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
          />
        ))}

      </div>

    </section>
  );
}