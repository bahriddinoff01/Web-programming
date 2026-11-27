import { useEffect, useState } from "react";
import { fetchGitHubUser } from "./githubApi";
import GitHubUserCard from "./GitHubUserCard";

// Video lecture challenge: fetch while the user types, with a 500 ms debounce.
// Effect 1 waits until typing stops for 500 ms, then copies the input into `username`.
//          Each keystroke's cleanup cancels the previous timer.
// Effect 2 fetches whenever `username` changes, and aborts an unfinished request.
const GitHubProfile = () => {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [result, setResult] = useState({ status: "idle" });

  // Effect 1: debounce
  useEffect(() => {
    const timer = setTimeout(() => setUsername(input.trim()), 500);
    return () => clearTimeout(timer);
  }, [input]);

  // Effect 2: fetch
  useEffect(() => {
    if (!username) {
      setResult({ status: "idle" });
      return;
    }
    const controller = new AbortController();
    setResult({ status: "loading" });

    fetchGitHubUser(username, controller.signal)
      .then((user) => setResult({ status: "done", user }))
      .catch((err) => {
        if (err.name !== "AbortError") setResult({ status: "error", message: err.message });
      });

    return () => controller.abort();
  }, [username]);

  const typing = input.trim() !== username;

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <div>
        <label htmlFor="gh-profile" className="mb-1 block font-medium">
          GitHub username
        </label>
        <input
          id="gh-profile"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start typing, e.g. torvalds"
          autoComplete="off"
          spellCheck="false"
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-900"
        />
        <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
          {typing ? "Waiting for you to stop typing…" : "Searches half a second after you stop typing."}
        </p>
      </div>

      <div
        className="min-h-24 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
        aria-live="polite"
      >
        {result.status === "idle" && <p className="text-gray-600 dark:text-gray-400">Nothing searched yet.</p>}
        {result.status === "loading" && <p className="text-gray-600 dark:text-gray-400">Loading…</p>}
        {result.status === "error" && <p className="font-medium text-red-600 dark:text-red-400">{result.message}</p>}
        {result.status === "done" && <GitHubUserCard user={result.user} />}
      </div>
    </div>
  );
};

export default GitHubProfile;
