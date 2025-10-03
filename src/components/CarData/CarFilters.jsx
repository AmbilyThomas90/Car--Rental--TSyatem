export default function CardFilters({ categories, selected, onSelect }) {
  return (
    <div className="flex gap-4 flex-wrap">
      <button
        onClick={() => onSelect("All")}
        className={`px-4 py-2 rounded-lg ${
          selected === "All" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`px-4 py-2 rounded-lg ${
            selected === c ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}