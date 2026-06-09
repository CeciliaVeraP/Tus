export default function FavoritesSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">
        ⭐ Tus favoritos
      </h2>

      <div className="bg-white rounded-2xl border p-6">
        <p className="text-gray-500">
          Aún no tienes elementos marcados como favoritos.
        </p>
      </div>
    </section>
  );
}