import{j as e,r as c,m as p}from"./page-iZ2EYeiW.js";const a="https://github.com/bahriddinoff01",i="https://bahriddinoff01.github.io",d=[{id:"learncoding",title:"LearnCoding",description:"A learning platform with lessons, challenges, quizzes and an AI instructor for HTML, CSS, JavaScript, Python and React.",tech:["TypeScript","CSS"],github:`${a}/LearnCoding`,demo:`${i}/LearnCoding/`},{id:"mini-games",title:"Mini Arcade",description:"Eight small browser games such as Tic-Tac-Toe, Memory Match and Typing Speed, with a leaderboard.",tech:["JavaScript","CSS"],github:`${a}/mini-games`,demo:`${i}/mini-games/`},{id:"travel-ai",title:"TravelAI",description:"Our team project: pick a destination and an AI creates a day-by-day travel plan.",tech:["JavaScript","HTML","CSS"],github:`${a}/ai-travel-planner`,demo:`${i}/ai-travel-planner/`},{id:"student-directory",title:"Student Directory",description:"Week 11 task: a StudentProfileCard component with props, rendered for several students.",tech:["React","CSS"],github:`${a}/task11`,demo:`${i}/task11/`},{id:"web-programming",title:"Web Programming portfolio",description:"This site: every week of the course, from my first HTML page to React with useState and useEffect.",tech:["HTML","CSS","JavaScript","React"],github:`${a}/Web-programming`,demo:`${i}/Web-programming/main%20container/Main.html`},{id:"team-proposal",title:"Team 19 proposal",description:"Our project proposal published as a web page: the idea, the goals and the plan.",tech:["HTML","CSS"],github:`${a}/team-19-proposal`,demo:`${i}/team-19-proposal/`},{id:"webpro-w9",title:"Git & GitHub Pages practice",description:"Week 10 homework: a repository with several commits and a branch, deployed with GitHub Pages.",tech:["HTML","Git"],github:`${a}/webpro-w9`,demo:`${i}/webpro-w9/`}],g=({title:n,description:o,tech:s,github:t,demo:r})=>e.jsxs("article",{className:"flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900",children:[e.jsx("h3",{className:"text-lg font-bold",children:n}),e.jsx("p",{className:"mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400",children:o}),e.jsx("ul",{className:"mt-4 flex flex-wrap gap-1.5","aria-label":"Technologies",children:s.map(l=>e.jsx("li",{className:"rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200",children:l},l))}),e.jsxs("div",{className:"mt-4 flex gap-2 text-sm font-semibold",children:[e.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"rounded-lg bg-indigo-600 px-3 py-1.5 text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300",children:["Live demo",e.jsxs("span",{className:"sr-only",children:[" of ",n," (opens in a new tab)"]})]}),e.jsxs("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"rounded-lg border border-gray-300 px-3 py-1.5 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800",children:["GitHub",e.jsxs("span",{className:"sr-only",children:[" repository of ",n," (opens in a new tab)"]})]})]})]}),h=({options:n,active:o,onChange:s})=>e.jsx("div",{className:"flex flex-wrap gap-2",role:"group","aria-label":"Filter projects by technology",children:n.map(t=>e.jsx("button",{onClick:()=>s(t),"aria-pressed":o===t,className:`rounded-full px-4 py-1.5 text-sm font-semibold transition ${o===t?"bg-indigo-600 text-white dark:bg-indigo-400 dark:text-gray-950":"border border-gray-300 hover:border-indigo-500 hover:text-indigo-700 dark:border-gray-700 dark:hover:text-indigo-300"}`,children:t},t))}),m=()=>{const[n,o]=c.useState("All"),s=["All",...new Set(d.flatMap(r=>r.tech))],t=n==="All"?d:d.filter(r=>r.tech.includes(n));return e.jsxs("div",{className:"space-y-5",children:[e.jsx(h,{options:s,active:n,onChange:o}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400","aria-live":"polite",children:["Showing ",t.length," of ",d.length," projects"]}),e.jsx("ul",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:t.map(r=>e.jsx("li",{children:e.jsx(g,{...r})},r.id))})]})},b=`import { useState } from "react";
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
`,u=`// A row of buttons, one per technology. It keeps no state itself:
// the parent tells it which one is active and what to do on click.
const FilterBar = ({ options, active, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          aria-pressed={active === option}
          className={\`rounded-full px-4 py-1.5 text-sm font-semibold transition \${
            active === option
              ? "bg-indigo-600 text-white dark:bg-indigo-400 dark:text-gray-950"
              : "border border-gray-300 hover:border-indigo-500 hover:text-indigo-700 dark:border-gray-700 dark:hover:text-indigo-300"
          }\`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
`,f=`// One project: title, description, tech stack and two links.
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
`,x=`// My real public projects. Each one has a title, a description,
// the technologies it uses, and links to its code and live site.
const GITHUB = "https://github.com/bahriddinoff01";
const PAGES = "https://bahriddinoff01.github.io";

const projects = [
  {
    id: "learncoding",
    title: "LearnCoding",
    description: "A learning platform with lessons, challenges, quizzes and an AI instructor for HTML, CSS, JavaScript, Python and React.",
    tech: ["TypeScript", "CSS"],
    github: \`\${GITHUB}/LearnCoding\`,
    demo: \`\${PAGES}/LearnCoding/\`,
  },
  {
    id: "mini-games",
    title: "Mini Arcade",
    description: "Eight small browser games such as Tic-Tac-Toe, Memory Match and Typing Speed, with a leaderboard.",
    tech: ["JavaScript", "CSS"],
    github: \`\${GITHUB}/mini-games\`,
    demo: \`\${PAGES}/mini-games/\`,
  },
  {
    id: "travel-ai",
    title: "TravelAI",
    description: "Our team project: pick a destination and an AI creates a day-by-day travel plan.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: \`\${GITHUB}/ai-travel-planner\`,
    demo: \`\${PAGES}/ai-travel-planner/\`,
  },
  {
    id: "student-directory",
    title: "Student Directory",
    description: "Week 11 task: a StudentProfileCard component with props, rendered for several students.",
    tech: ["React", "CSS"],
    github: \`\${GITHUB}/task11\`,
    demo: \`\${PAGES}/task11/\`,
  },
  {
    id: "web-programming",
    title: "Web Programming portfolio",
    description: "This site: every week of the course, from my first HTML page to React with useState and useEffect.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: \`\${GITHUB}/Web-programming\`,
    demo: \`\${PAGES}/Web-programming/main%20container/Main.html\`,
  },
  {
    id: "team-proposal",
    title: "Team 19 proposal",
    description: "Our project proposal published as a web page: the idea, the goals and the plan.",
    tech: ["HTML", "CSS"],
    github: \`\${GITHUB}/team-19-proposal\`,
    demo: \`\${PAGES}/team-19-proposal/\`,
  },
  {
    id: "webpro-w9",
    title: "Git & GitHub Pages practice",
    description: "Week 10 homework: a repository with several commits and a branch, deployed with GitHub Pages.",
    tech: ["HTML", "Git"],
    github: \`\${GITHUB}/webpro-w9\`,
    demo: \`\${PAGES}/webpro-w9/\`,
  },
];

export default projects;
`;p(m,[{name:"ProjectList.jsx",code:b},{name:"FilterBar.jsx",code:u},{name:"ProjectCard.jsx",code:f},{name:"projects.js",code:x}]);
