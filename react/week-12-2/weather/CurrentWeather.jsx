import { describeWeather } from "./weatherApi";

// Shows the weather for one place. It only receives data through props.
const CurrentWeather = ({ place, weather }) => {
  const { text, icon } = describeWeather(weather.code);
  const updated = weather.time.replace("T", " ");

  const stats = [
    ["Feels like", `${Math.round(weather.feelsLike)}°C`],
    ["Wind", `${weather.wind} km/h`],
    ["Humidity", `${weather.humidity}%`],
    ["Today", `${Math.round(weather.low)}° / ${Math.round(weather.high)}°`],
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl font-bold">{place.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {place.lat.toFixed(2)}, {place.lon.toFixed(2)} · local time {updated}
          </p>
        </div>
        <span className="text-5xl" aria-hidden="true">
          {icon}
        </span>
      </div>
      <div>
        <p className="text-6xl font-extrabold tabular-nums tracking-tight">{Math.round(weather.temperature)}°C</p>
        <p className="mt-1 text-lg text-gray-700 dark:text-gray-300">
          {text}
          {weather.isDay ? "" : " · night"}
        </p>
      </div>
      <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800">
            <dt className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">{label}</dt>
            <dd className="font-semibold tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default CurrentWeather;
