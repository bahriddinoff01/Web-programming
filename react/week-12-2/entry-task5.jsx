import { mountTask } from "../src/page.jsx";
import GitHubProfile from "./GitHubProfile";
import gitHubProfile from "./GitHubProfile.jsx?raw";
import githubApi from "./githubApi.js?raw";
import gitHubUserCard from "./GitHubUserCard.jsx?raw";

mountTask(GitHubProfile, [
  { name: "GitHubProfile.jsx", code: gitHubProfile },
  { name: "githubApi.js", code: githubApi },
  { name: "GitHubUserCard.jsx", code: gitHubUserCard },
]);
