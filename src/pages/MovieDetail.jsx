import MainLayout from "../layouts/MainLayout";
import { useParams, useNavigate } from "react-router-dom";
import moviesMock from "../data/moviesMock";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

const movieData = moviesMock.find((category) =>
  category.movies.some((movie) => movie.id === Number(id))
);

const movie = movieData?.movies.find(
  (movie) => movie.id === Number(id)
);

const category = movieData?.category;

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-6">
    <button
      onClick={() => navigate(-1)}
      className="mb-4 text-sm" >
      ← Volver
    </button>

<div className="flex flex-col md:flex-row gap-8 mt-6">

  <div className="w-full max-w-xs mx-auto md:mx-0">

    <div className="aspect-[2/3] rounded-2xl bg-gray-200 flex items-center justify-center">

      <span className="text-gray-500">
        Poster
      </span>

    </div>

  </div>

  <div className="flex-1">

    <div className="flex items-start justify-between gap-4">

      <h1 className="text-3xl font-bold">
        {movie?.title}
      </h1>

      <button className="text-2xl">
        ☆
      </button>

    </div>

    <p className="text-gray-500 mt-2">
      {movie?.year} • {category}
    </p>

    <div className="mt-8">

      <h2 className="font-semibold text-lg mb-2">
        Sinopsis
      </h2>

      <p className="text-gray-600 leading-relaxed">
        {movie?.overview || "Sin sinopsis disponible."}
      </p>

    </div>

  </div>

</div>


      </div>
    </MainLayout>
  );
}

export default MovieDetail;