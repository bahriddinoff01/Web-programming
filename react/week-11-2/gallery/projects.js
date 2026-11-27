// My real public projects. Each one has a title, a description,
// the technologies it uses, and links to its code and live site.
const GITHUB = "https://github.com/bahriddinoff01";
const PAGES = "https://bahriddinoff01.github.io";

const projects = [
  {
    id: "learncoding",
    title: "LearnCoding",
    description: "A learning platform with lessons, challenges, quizzes and an AI instructor for HTML, CSS, JavaScript, Python and React.",
    tech: ["TypeScript", "CSS"],
    github: `${GITHUB}/LearnCoding`,
    demo: `${PAGES}/LearnCoding/`,
  },
  {
    id: "mini-games",
    title: "Mini Arcade",
    description: "Eight small browser games such as Tic-Tac-Toe, Memory Match and Typing Speed, with a leaderboard.",
    tech: ["JavaScript", "CSS"],
    github: `${GITHUB}/mini-games`,
    demo: `${PAGES}/mini-games/`,
  },
  {
    id: "travel-ai",
    title: "TravelAI",
    description: "Our team project: pick a destination and an AI creates a day-by-day travel plan.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: `${GITHUB}/ai-travel-planner`,
    demo: `${PAGES}/ai-travel-planner/`,
  },
  {
    id: "student-directory",
    title: "Student Directory",
    description: "Week 11 task: a StudentProfileCard component with props, rendered for several students.",
    tech: ["React", "CSS"],
    github: `${GITHUB}/task11`,
    demo: `${PAGES}/task11/`,
  },
  {
    id: "web-programming",
    title: "Web Programming portfolio",
    description: "This site: every week of the course, from my first HTML page to React with useState and useEffect.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: `${GITHUB}/Web-programming`,
    demo: `${PAGES}/Web-programming/main%20container/Main.html`,
  },
  {
    id: "team-proposal",
    title: "Team 19 proposal",
    description: "Our project proposal published as a web page: the idea, the goals and the plan.",
    tech: ["HTML", "CSS"],
    github: `${GITHUB}/team-19-proposal`,
    demo: `${PAGES}/team-19-proposal/`,
  },
  {
    id: "webpro-w9",
    title: "Git & GitHub Pages practice",
    description: "Week 10 homework: a repository with several commits and a branch, deployed with GitHub Pages.",
    tech: ["HTML", "Git"],
    github: `${GITHUB}/webpro-w9`,
    demo: `${PAGES}/webpro-w9/`,
  },
];

export default projects;
