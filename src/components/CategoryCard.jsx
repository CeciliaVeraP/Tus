export default function CategoryCard({
  icon,
  title,
  total,
  completed,
  pending,
  progress,
  abandoned,
}) {
  return (
<div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md hover:-translate-y-1 transition cursor-pointer">
      <div className="text-3xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-500 mt-2">
        {total} elementos
      </p>

      <div className="mt-6 space-y-2 text-sm">
        <p>Completadas {completed}</p>
        <p>Pendientes {pending}</p>
        <p>En progreso {progress}</p>
        <p>Abandonadas {abandoned}</p>
      </div>
    </div>
  );
}