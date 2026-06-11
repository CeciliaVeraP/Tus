import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";

export default function CategoryMovies() {
    const { category } = useParams();
  return (
    <MainLayout>
      <main className="max-w-7xl mx-auto px-6 py-8">

        <button className="text-sm text-gray-500 hover:text-black transition">
          ← Volver
        </button>

        <h1 className="text-3xl font-bold mt-4 capitalize">
        {category}
        </h1>

      </main>
    </MainLayout>
  );
}