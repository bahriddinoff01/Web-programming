// Fetches one GitHub user and turns every kind of failure into a readable message.
export async function fetchGitHubUser(username, signal) {
  let res;
  try {
    res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { signal });
  } catch (err) {
    if (err.name === "AbortError") throw err; // cancelled on purpose, not a real error
    throw new Error("Network problem: check your connection.");
  }
  if (res.status === 404) throw new Error(`No GitHub user called "${username}".`);
  if (res.status === 403 || res.status === 429) {
    // Without a key, GitHub allows 60 requests per hour
    throw new Error("GitHub's rate limit was reached. Try again in a few minutes.");
  }
  if (!res.ok) throw new Error(`Request failed (${res.status}).`);
  return res.json();
}
