import{j as r}from"./page-CGXkMM0X.js";async function o(e,a){let t;try{t=await fetch(`https://api.github.com/users/${encodeURIComponent(e)}`,{signal:a})}catch(s){throw s.name==="AbortError"?s:new Error("Network problem: check your connection.")}if(t.status===404)throw new Error(`No GitHub user called "${e}".`);if(t.status===403||t.status===429)throw new Error("GitHub's rate limit was reached. Try again in a few minutes.");if(!t.ok)throw new Error(`Request failed (${t.status}).`);return t.json()}const i=({user:e})=>r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("img",{src:e.avatar_url,alt:"",width:"72",height:"72",className:"h-18 w-18 shrink-0 rounded-full border border-gray-200 dark:border-gray-700"}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("h3",{className:"text-lg font-bold",children:e.name||e.login}),r.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["@",e.login]}),e.bio&&r.jsx("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:e.bio}),r.jsxs("p",{className:"mt-2 flex flex-wrap gap-x-4 text-sm text-gray-600 dark:text-gray-400",children:[r.jsxs("span",{children:[r.jsx("strong",{className:"text-gray-900 dark:text-gray-100",children:e.followers})," followers"]}),r.jsxs("span",{children:[r.jsx("strong",{className:"text-gray-900 dark:text-gray-100",children:e.public_repos})," public repos"]})]}),r.jsxs("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"mt-2 inline-block break-all text-sm font-medium text-indigo-700 hover:underline dark:text-indigo-300",children:[e.html_url,r.jsx("span",{className:"sr-only",children:" (opens in a new tab)"})]})]})]}),l=`// Fetches one GitHub user and turns every kind of failure into a readable message.
export async function fetchGitHubUser(username, signal) {
  let res;
  try {
    res = await fetch(\`https://api.github.com/users/\${encodeURIComponent(username)}\`, { signal });
  } catch (err) {
    if (err.name === "AbortError") throw err; // cancelled on purpose, not a real error
    throw new Error("Network problem: check your connection.");
  }
  if (res.status === 404) throw new Error(\`No GitHub user called "\${username}".\`);
  if (res.status === 403 || res.status === 429) {
    // Without a key, GitHub allows 60 requests per hour
    throw new Error("GitHub's rate limit was reached. Try again in a few minutes.");
  }
  if (!res.ok) throw new Error(\`Request failed (\${res.status}).\`);
  return res.json();
}
`,c=`// Shows one GitHub user. Used by both GitHub exercises.
const GitHubUserCard = ({ user }) => {
  return (
    <div className="flex items-start gap-4">
      <img
        src={user.avatar_url}
        alt=""
        width="72"
        height="72"
        className="h-18 w-18 shrink-0 rounded-full border border-gray-200 dark:border-gray-700"
      />
      <div className="min-w-0">
        <h3 className="text-lg font-bold">{user.name || user.login}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">@{user.login}</p>
        {user.bio && <p className="mt-2 text-gray-700 dark:text-gray-300">{user.bio}</p>}
        <p className="mt-2 flex flex-wrap gap-x-4 text-sm text-gray-600 dark:text-gray-400">
          <span>
            <strong className="text-gray-900 dark:text-gray-100">{user.followers}</strong> followers
          </span>
          <span>
            <strong className="text-gray-900 dark:text-gray-100">{user.public_repos}</strong> public repos
          </span>
        </p>
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block break-all text-sm font-medium text-indigo-700 hover:underline dark:text-indigo-300"
        >
          {user.html_url}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
};

export default GitHubUserCard;
`;export{i as G,c as a,o as f,l as g};
