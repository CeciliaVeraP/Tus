export default function MovieCard() {
  return (
    <div className="group cursor-pointer">

      <div className="aspect-[2/3] rounded-xl bg-gray-200 overflow-hidden flex items-center justify-center">

        <span className="text-xs text-gray-500">
          Poster
        </span>

      </div>

      <div className="mt-2">

        <h3 className="font-medium text-sm truncate">
          Interstellar
        </h3>

        <p className="text-xs text-gray-500">
          2014
        </p>

      </div>

    </div>
  );
}