import MainLayout from "../layouts/MainLayout";
import { useParams, useNavigate } from "react-router-dom";
import moviesMock from "../data/moviesMock";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = moviesMock
    .flatMap((category) => category.movies)
    .find((movie) => movie.id === Number(id));

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-6">
    <button
      onClick={() => navigate(-1)}
      className="mb-4 text-sm" >
      ← Volver
    </button>

        <h1 className="text-3xl font-bold">
          {movie?.title}
        </h1>

        <p className="text-gray-500 mt-2">
          {movie?.year}
        </p>
      </div>
    </MainLayout>
  );
}

export default MovieDetail;