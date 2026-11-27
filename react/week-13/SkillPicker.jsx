import { useState } from "react";

const SKILLS = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"];
const LIMIT = 3;

// Exercise 3: a checklist of skills. The selected skills are an array in state;
// checking adds a skill with the spread, unchecking removes it with filter().
const SkillPicker = () => {
  const [selected, setSelected] = useState([]);

  const toggle = (skill, checked) => {
    setSelected((prev) => (checked ? [...prev, skill] : prev.filter((s) => s !== skill)));
  };

  const tooMany = selected.length > LIMIT;

  return (
    <fieldset className="mx-auto max-w-xl">
      <legend className="mb-3 font-semibold">Pick your top skills (up to {LIMIT})</legend>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {SKILLS.map((skill) => {
          const checked = selected.includes(skill);
          return (
            <label
              key={skill}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 transition ${
                checked
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40"
                  : "border-gray-300 hover:border-indigo-400 dark:border-gray-700"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => toggle(skill, e.target.checked)}
                className="h-4 w-4 accent-indigo-600"
              />
              {skill}
            </label>
          );
        })}
      </div>

      <div className="mt-4" aria-live="polite">
        <p className={`font-semibold tabular-nums ${tooMany ? "text-red-600 dark:text-red-400" : ""}`}>
          Selected: {selected.length} / {LIMIT}
        </p>
        {tooMany && (
          <p className="mt-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300">
            Please select at most {LIMIT} skills.
          </p>
        )}
        {selected.length > 0 && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">You picked: {selected.join(", ")}</p>
        )}
      </div>
    </fieldset>
  );
};

export default SkillPicker;
