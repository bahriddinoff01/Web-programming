import { mountTask } from "../src/page.jsx";
import GitHubLookup from "./GitHubLookup";
import gitHubLookup from "./GitHubLookup.jsx?raw";
import githubApi from "./githubApi.js?raw";
import gitHubUserCard from "./GitHubUserCard.jsx?raw";

mountTask(GitHubLookup, [
  { name: "GitHubLookup.jsx", code: gitHubLookup },
  { name: "githubApi.js", code: githubApi },
  { name: "GitHubUserCard.jsx", code: gitHubUserCard },
]);
