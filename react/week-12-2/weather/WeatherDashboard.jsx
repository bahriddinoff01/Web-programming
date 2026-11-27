import { useEffect, useState } from "react";
import { findCity, getWeather } from "./weatherApi";
import SearchForm from "./SearchForm";
import CurrentWeather from "./CurrentWeather";

// The parent. `query` is what the user asked for (a city or coordinates).
// Whenever it changes, the effect fetches new data; its cleanup aborts a
// request that is still running, so an old answer can never replace a new one.
const WeatherDashboard = () => {
  const [query, setQuery] = useState({ type: "city", name: "Seoul" });
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading" });

    const load = async () => {
      try {
        // A city name must be turned into coordinates first
        const place = query.type === "city" ? await findCity(query.name, controller.signal) : query;
        const weather = await getWeather(place.lat, place.lon, controller.signal);
        setState({ status: "done", place, weather });
      } catch (err) {
        if (err.name !== "AbortError") setState({ status: "error", message: err.message });
      }
    };

    load();
    return () => controller.abort();
  }, [query]);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
      <section aria-label="Search" className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <SearchForm onSearch={setQuery} busy={state.status === "loading"} />
      </section>

      <section
        aria-label="Current weather"
        aria-live="polite"
        aria-busy={state.status === "loading"}
        className="min-h-64 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
      >
        {state.status === "loading" && (
          <div className="animate-pulse space-y-4" aria-label="Loading weather">
            <div className="h-6 w-1/2 rounded bg-gray-200 dark:bg-gray-800" />
            <div className="h-14 w-1/3 rounded bg-gray-200 dark:bg-gray-800" />
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-12 rounded bg-gray-200 dark:bg-gray-800" />
              ))}
            </div>
          </div>
        )}
        {state.status === "error" && (
          <div className="rounded-lg bg-red-50 px-4 py-3 text-red-800 dark:bg-red-950/40 dark:text-red-300" role="alert">
            <p className="font-semibold">Couldn't load the weather</p>
            <p className="text-sm">{state.message}</p>
          </div>
        )}
        {state.status === "done" && <CurrentWeather place={state.place} weather={state.weather} />}
      </section>
    </div>
  );
};

export default WeatherDashboard;
