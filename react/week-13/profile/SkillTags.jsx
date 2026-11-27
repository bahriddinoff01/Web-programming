import { useState } from "react";
import { fieldClass, hintClass, labelClass } from "../formStyles";

// Stretch goal: skills as tags. Type a skill and press Enter to add it, × to remove it.
// The parent owns the list; this component only keeps the text being typed.
const SkillTags = ({ skills, onChange }) => {
  const [draft, setDraft] = useState("");

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault(); // Enter would otherwise submit the whole form
    const skill = draft.trim().toLowerCase();
    if (skill && !skills.includes(skill)) onChange([...skills, skill]);
    setDraft("");
  };

  return (
    <div>
      <label htmlFor="pe-skill" className={labelClass}>
        Skills (optional)
      </label>
      <ul className="mb-2 flex flex-wrap gap-1.5" aria-label="Added skills">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-1 rounded-full bg-indigo-50 py-0.5 pl-3 pr-1 text-sm font-semibold text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200">
            {skill}
            <button
              type="button"
              onClick={() => onChange(skills.filter((s) => s !== skill))}
              aria-label={`Remove ${skill}`}
              className="grid h-5 w-5 place-items-center rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-900"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      <input
        id="pe-skill"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="e.g. react, then press Enter"
        aria-describedby="pe-skill-hint"
        className={fieldClass(false)}
      />
      <p id="pe-skill-hint" className={hintClass}>
        Press Enter to add a skill.
      </p>
    </div>
  );
};

export default SkillTags;
