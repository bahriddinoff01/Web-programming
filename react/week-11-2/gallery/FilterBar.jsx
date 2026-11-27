// A row of buttons, one per technology. It keeps no state itself:
// the parent tells it which one is active and what to do on click.
const FilterBar = ({ options, active, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          aria-pressed={active === option}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
            active === option
              ? "bg-indigo-600 text-white dark:bg-indigo-400 dark:text-gray-950"
              : "border border-gray-300 hover:border-indigo-500 hover:text-indigo-700 dark:border-gray-700 dark:hover:text-indigo-300"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
