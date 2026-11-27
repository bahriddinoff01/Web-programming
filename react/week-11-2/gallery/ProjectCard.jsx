// One project: title, description, tech stack and two links.
const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
        {tech.map((name) => (
          <li
            key={name}
            className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200"
          >
            {name}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex gap-2 text-sm font-semibold">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
        >
          Live demo<span className="sr-only"> of {title} (opens in a new tab)</span>
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-300 px-3 py-1.5 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          GitHub<span className="sr-only"> repository of {title} (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
