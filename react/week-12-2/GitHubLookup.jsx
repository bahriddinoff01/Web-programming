import { useEffect, useState } from "react";
import { fetchGitHubUser } from "./githubApi";
import GitHubUserCard from "./GitHubUserCard";

// Code challenge: type a username and press Search.
// `input` follows every keystroke; `username` only changes on Search,
// so the effect (which depends on `username`) fetches once per search.
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
