import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-900";

// Lets the user search by city name or by coordinates, or use their location.
// It only checks the input; the parent does the fetching when onSearch is called.
const SearchForm = ({ onSearch, busy }) => {
  const [mode, setMode] = useState("city"); // "city" or "coords"
  const [city, setCity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [formError, setFormError] = useState("");
  const [locating, setLocating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (mode === "city") {
      if (!city.trim()) return setFormError("Type a city name first.");
      onSearch({ type: "city", name: city.trim() });
      return;
    }

    const latNum = Number(lat);
    const lonNum = Number(lon);
    if (lat.trim() === "" || Number.isNaN(latNum) || latNum < -90 || latNum > 90) {
      return setFormError("Latitude must be a number between -90 and 90.");
    }
    if (lon.trim() === "" || Number.isNaN(lonNum) || lonNum < -180 || lonNum > 180) {
      return setFormError("Longitude must be a number between -180 and 180.");
    }
    onSearch({ type: "coords", lat: latNum, lon: lonNum, name: "Chosen coordinates" });
  };

  // Bonus: ask the browser for the user's position
  const shareLocation = () => {
    setFormError("");
    if (!navigator.geolocation) return setFormError("This browser can't share your location.");
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        const { latitude, longitude } = pos.coords;
        onSearch({ type: "coords", lat: latitude, lon: longitude, name: "My location" });
      },
      (err) => {
        setLocating(false);
        setFormError(
          err.code === err.PERMISSION_DENIED
            ? "Location access was blocked. Allow it in the browser, or search by city."
            : "Your location couldn't be found. Try searching by city.",
        );
      },
      { timeout: 10000 },
    );
  };

  const tab = (value, label) => (
    <button
      type="button"
      onClick={() => {
        setMode(value);
        setFormError("");
      }}
      aria-pressed={mode === value}
      className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${
        mode === value
          ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      }`}
    >
      {label}
    </button>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div className="inline-flex gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800" role="group" aria-label="Search by">
        {tab("city", "City")}
        {tab("coords", "Coordinates")}
      </div>

      {mode === "city" ? (
        <div>
          <label htmlFor="w-city" className="sr-only">
            City name
          </label>
          <input id="w-city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City, e.g. Tashkent" className={inputClass} />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="w-lat" className="mb-1 block text-sm font-medium">
              Latitude
            </label>
            <input id="w-lat" inputMode="decimal" value={lat} onChange={(e) => setLat(e.target.value)} placeholder="37.45" className={inputClass} />
          </div>
          <div>
            <label htmlFor="w-lon" className="mb-1 block text-sm font-medium">
              Longitude
            </label>
            <input id="w-lon" inputMode="decimal" value={lon} onChange={(e) => setLon(e.target.value)} placeholder="127.13" className={inputClass} />
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          disabled={busy}
          className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
        >
          Search
        </button>
        <button
          type="button"
          onClick={shareLocation}
          disabled={busy || locating}
          className="rounded-lg border border-gray-300 px-4 py-2 font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          {locating ? "Finding you…" : "📍 Use my location"}
        </button>
      </div>

      {formError && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400" role="alert">
          {formError}
        </p>
      )}
    </form>
  );
};

export default SearchForm;
