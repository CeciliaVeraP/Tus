import MainLayout from "../layouts/MainLayout";
import ExploreSection from "../components/ExploreSection";
import moviesMock from "../data/moviesMock";

export default function ExplorarMovies() {
  return (
    <MainLayout>
      <main className="max-w-7xl mx-auto px-6 py-8">

        <h1 className="text-3xl font-bold">
          Películas
        </h1>

        <p className="text-gray-500 mt-2">
          Descubre nuevas películas para agregar a tu biblioteca.
        </p>

        <button className="mt-4 text-sm text-gray-700 hover:text-black transition">
          Ver todas las películas →
        </button>

        {moviesMock.map((category) => (
          <ExploreSection
            key={category.category}
            category={category.category}
            movies={category.movies}
          />
        ))}

      </main>
    </MainLayout>
  );
}