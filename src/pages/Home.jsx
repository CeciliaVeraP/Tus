import MainLayout from "../layouts/MainLayout";
import CategoryCard from "../components/CategoryCard";
import FavoritesSection from "../components/FavoritesSection";
import TagsSection from "../components/TagsSection";

export default function Home() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-6">

        <h2 className="text-3xl font-bold">
          Hola, Andrea 👋
        </h2>

        <p className="text-gray-600 mt-2">
          Películas, series y libros que forman parte de tu historia.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

          <CategoryCard
            icon="🎬"
            title="Películas"
            total={0}
            completed={0}
            pending={0}
            progress={0}
            abandoned={0}
          />

          <CategoryCard
            icon="📺"
            title="Series"
            total={0}
            completed={0}
            pending={0}
            progress={0}
            abandoned={0}
          />

          <CategoryCard
            icon="📚"
            title="Libros"
            total={0}
            completed={0}
            pending={0}
            progress={0}
            abandoned={0}
          />

        </section>

        <FavoritesSection />

        <TagsSection />

      </div>
    </MainLayout>
  );
}