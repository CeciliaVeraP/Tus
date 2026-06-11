import MainLayout from "../layouts/MainLayout";
import { useParams, Link } from "react-router-dom";
import moviesMock from "../data/moviesMock";
import MovieCard from "../components/MovieCard";

export default function CategoryMovies() {
    const { category } = useParams();

    const selectedCategory = moviesMock.find(
  (item) =>
    item.category
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-") === category
);

  return (
    <MainLayout>
      <main className="max-w-7xl mx-auto px-6 py-8">

        <Link
        to="/explorar/peliculas"
        className="text-sm text-gray-500 hover:text-black transition"
        >
        ← Volver
        </Link>

        <h1 className="text-3xl font-bold mt-4 capitalize">
        {selectedCategory?.category}
        </h1>

        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {selectedCategory?.movies.map((movie) => (
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