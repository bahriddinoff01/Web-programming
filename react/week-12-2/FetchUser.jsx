import { useEffect, useState } from "react";

// Fetches a user from JSONPlaceholder with the three usual pieces of state:
// the data, a loading flag and an error message.
// The effect depends on userId, so picking another user fetches again.
const FetchUser = () => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Lets the cleanup cancel a request that is no longer needed
    const controller = new AbortController();

    // An effect can't be async itself, so the async work goes in an inner function
    const loadUser = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setUser(await res.json());
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") return; // replaced by a newer request
        setError(err.message === "Failed to fetch" ? "Network problem: check your connection." : err.message);
        setLoading(false);
      }
    };

    loadUser();
    return () => controller.abort();
  }, [userId]);

  return (
    <div className="mx-auto max-w-md space-y-4">
      <div className="flex items-center gap-3">
        <label htmlFor="user-id" className="font-medium">
          User
        </label>
        <select
          id="user-id"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-900"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
            <option key={id} value={id}>
              #{id}
            </option>
          ))}
        </select>
      </div>

      <div
        className="min-h-28 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
        aria-live="polite"
      >
        {loading && <p className="text-gray-600 dark:text-gray-400">Loading…</p>}
        {!loading && error && <p className="font-medium text-red-600 dark:text-red-400">Error: {error}</p>}
        {!loading && !error && user && (
          <>
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{user.email}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {user.company.name} · {user.address.city}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default FetchUser;
