import{r as n,j as e,m as p}from"./page-CGXkMM0X.js";import{f,G as h,g as x,a as y}from"./GitHubUserCard-3HMBOp9t.js";const k=()=>{const[s,g]=n.useState(""),[t,c]=n.useState(""),[i,u]=n.useState(null),[m,o]=n.useState(!1),[d,l]=n.useState("");n.useEffect(()=>{if(!t)return;const r=new AbortController;return o(!0),l(""),u(null),f(t,r.signal).then(a=>{u(a),o(!1)}).catch(a=>{a.name!=="AbortError"&&(l(a.message),o(!1))}),()=>r.abort()},[t]);const b=r=>{r.preventDefault(),c(s.trim())};return e.jsxs("div",{className:"mx-auto max-w-xl space-y-4",children:[e.jsxs("form",{onSubmit:b,className:"flex gap-2",children:[e.jsx("label",{htmlFor:"gh-lookup",className:"sr-only",children:"GitHub username"}),e.jsx("input",{id:"gh-lookup",value:s,onChange:r=>g(r.target.value),placeholder:"GitHub username, e.g. bahriddinoff01",autoComplete:"off",spellCheck:"false",className:"min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-900"}),e.jsx("button",{type:"submit",disabled:!s.trim(),className:"rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300",children:"Search"})]}),e.jsxs("div",{className:"min-h-24 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900","aria-live":"polite",children:[!t&&e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Search for a user to see their profile."}),m&&e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Loading…"}),d&&e.jsx("p",{className:"font-medium text-red-600 dark:text-red-400",children:d}),i&&e.jsx(h,{user:i})]})]})},S=`import { useEffect, useState } from "react";
import { fetchGitHubUser } from "./githubApi";
import GitHubUserCard from "./GitHubUserCard";

// Code challenge: type a username and press Search.
// \`input\` follows every keystroke; \`username\` only changes on Search,
// so the effect (which depends on \`username\`) fetches once per search.
// Bonus: the cleanup aborts the previous request if a new search starts first.
const GitHubLookup = () => {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!username) return;
    const controller = new AbortController();
    setLoading(true);
    setError("");
    setUser(null);

    fetchGitHubUser(username, controller.signal)
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(input.trim());
  };

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <label htmlFor="gh-lookup" className="sr-only">
          GitHub username
        </label>
        <input
          id="gh-lookup"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="GitHub username, e.g. bahriddinoff01"
          autoComplete="off"
          spellCheck="false"
          className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-900"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
        >
          Search
        </button>
      </form>

      <div
        className="min-h-24 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
        aria-live="polite"
      >
        {!username && <p className="text-gray-600 dark:text-gray-400">Search for a user to see their profile.</p>}
        {loading && <p className="text-gray-600 dark:text-gray-400">Loading…</p>}
        {error && <p className="font-medium text-red-600 dark:text-red-400">{error}</p>}
        {user && <GitHubUserCard user={user} />}
      </div>
    </div>
  );
};

export default GitHubLookup;
`;p(k,[{name:"GitHubLookup.jsx",code:S},{name:"githubApi.js",code:x},{name:"GitHubUserCard.jsx",code:y}]);
