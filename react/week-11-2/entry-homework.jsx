import { mountTask } from "../src/page.jsx";
import ProjectList from "./gallery/ProjectList";
import projectList from "./gallery/ProjectList.jsx?raw";
import filterBar from "./gallery/FilterBar.jsx?raw";
import projectCard from "./gallery/ProjectCard.jsx?raw";
import projects from "./gallery/projects.js?raw";

mountTask(ProjectList, [
  { name: "ProjectList.jsx", code: projectList },
  { name: "FilterBar.jsx", code: filterBar },
  { name: "ProjectCard.jsx", code: projectCard },
  { name: "projects.js", code: projects },
]);
