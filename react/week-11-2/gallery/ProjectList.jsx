import { useState } from "react";
import projects from "./projects";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";

// The parent: it owns the selected filter and works out which cards to show.
const ProjectList = () => {
  const [filter, setFilter] = useState("All");

  // Every technology used by any project, without duplicates, for the filter buttons
  const options = ["All", ...new Set(projects.flatMap((p) => p.tech))];

  // Calculated on every render, never stored in state
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <div className="space-y-5">
      <FilterBar options={options} active={filter} onChange={setFilter} />
      <p className="text-sm text-gray-600 dark:text-gray-400" aria-live="polite">
        Showing {visible.length} of {projects.length} projects
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.id}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
