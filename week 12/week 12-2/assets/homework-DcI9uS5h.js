import{r as d,j as e,m as S}from"./page-CGXkMM0X.js";const C={0:["Clear sky","☀️"],1:["Mainly clear","🌤️"],2:["Partly cloudy","⛅"],3:["Overcast","☁️"],45:["Fog","🌫️"],48:["Freezing fog","🌫️"],51:["Light drizzle","🌦️"],53:["Drizzle","🌦️"],55:["Heavy drizzle","🌧️"],56:["Freezing drizzle","🌧️"],57:["Freezing drizzle","🌧️"],61:["Light rain","🌦️"],63:["Rain","🌧️"],65:["Heavy rain","🌧️"],66:["Freezing rain","🌧️"],67:["Freezing rain","🌧️"],71:["Light snow","🌨️"],73:["Snow","🌨️"],75:["Heavy snow","❄️"],77:["Snow grains","🌨️"],80:["Light showers","🌦️"],81:["Showers","🌧️"],82:["Violent showers","⛈️"],85:["Snow showers","🌨️"],86:["Heavy snow showers","❄️"],95:["Thunderstorm","⛈️"],96:["Thunderstorm with hail","⛈️"],99:["Thunderstorm with hail","⛈️"]};function j(r){const[a,t]=C[r]||["Unknown","🌡️"];return{text:a,icon:t}}async function f(r,a){let t;try{t=await fetch(r,{signal:a})}catch(s){throw s.name==="AbortError"?s:new Error("No connection: check your internet and try again.")}if(t.status===429)throw new Error("Too many requests right now. Wait a minute and try again.");if(!t.ok)throw new Error(`The weather service answered with an error (${t.status}).`);return t.json()}async function _(r,a){var u;const t=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(r)}&count=1&language=en&format=json`,n=(u=(await f(t,a)).results)==null?void 0:u[0];if(!n)throw new Error(`City not found: "${r}". Check the spelling.`);return{name:[n.name,n.country].filter(Boolean).join(", "),lat:n.latitude,lon:n.longitude}}async function F(r,a,t){const s=`https://api.open-meteo.com/v1/forecast?latitude=${r}&longitude=${a}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=auto`,n=await f(s,t);return{temperature:n.current.temperature_2m,feelsLike:n.current.apparent_temperature,humidity:n.current.relative_humidity_2m,wind:n.current.wind_speed_10m,code:n.current.weather_code,isDay:n.current.is_day===1,high:n.daily.temperature_2m_max[0],low:n.daily.temperature_2m_min[0],time:n.current.time}}const p="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-900",E=({onSearch:r,busy:a})=>{const[t,s]=d.useState("city"),[n,u]=d.useState(""),[i,g]=d.useState(""),[h,v]=d.useState(""),[b,l]=d.useState(""),[w,y]=d.useState(!1),N=o=>{if(o.preventDefault(),l(""),t==="city"){if(!n.trim())return l("Type a city name first.");r({type:"city",name:n.trim()});return}const c=Number(i),m=Number(h);if(i.trim()===""||Number.isNaN(c)||c<-90||c>90)return l("Latitude must be a number between -90 and 90.");if(h.trim()===""||Number.isNaN(m)||m<-180||m>180)return l("Longitude must be a number between -180 and 180.");r({type:"coords",lat:c,lon:m,name:"Chosen coordinates"})},k=()=>{if(l(""),!navigator.geolocation)return l("This browser can't share your location.");y(!0),navigator.geolocation.getCurrentPosition(o=>{y(!1);const{latitude:c,longitude:m}=o.coords;r({type:"coords",lat:c,lon:m,name:"My location"})},o=>{y(!1),l(o.code===o.PERMISSION_DENIED?"Location access was blocked. Allow it in the browser, or search by city.":"Your location couldn't be found. Try searching by city.")},{timeout:1e4})},x=(o,c)=>e.jsx("button",{type:"button",onClick:()=>{s(o),l("")},"aria-pressed":t===o,className:`rounded-md px-3 py-1.5 text-sm font-semibold transition ${t===o?"bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white":"text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"}`,children:c});return e.jsxs("form",{onSubmit:N,className:"space-y-3",noValidate:!0,children:[e.jsxs("div",{className:"inline-flex gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800",role:"group","aria-label":"Search by",children:[x("city","City"),x("coords","Coordinates")]}),t==="city"?e.jsxs("div",{children:[e.jsx("label",{htmlFor:"w-city",className:"sr-only",children:"City name"}),e.jsx("input",{id:"w-city",value:n,onChange:o=>u(o.target.value),placeholder:"City, e.g. Tashkent",className:p})]}):e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"w-lat",className:"mb-1 block text-sm font-medium",children:"Latitude"}),e.jsx("input",{id:"w-lat",inputMode:"decimal",value:i,onChange:o=>g(o.target.value),placeholder:"37.45",className:p})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"w-lon",className:"mb-1 block text-sm font-medium",children:"Longitude"}),e.jsx("input",{id:"w-lon",inputMode:"decimal",value:h,onChange:o=>v(o.target.value),placeholder:"127.13",className:p})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"submit",disabled:a,className:"rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300",children:"Search"}),e.jsx("button",{type:"button",onClick:k,disabled:a||w,className:"rounded-lg border border-gray-300 px-4 py-2 font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800",children:w?"Finding you…":"📍 Use my location"})]}),b&&e.jsx("p",{className:"text-sm font-medium text-red-600 dark:text-red-400",role:"alert",children:b})]})},L=({place:r,weather:a})=>{const{text:t,icon:s}=j(a.code),n=a.time.replace("T"," "),u=[["Feels like",`${Math.round(a.feelsLike)}°C`],["Wind",`${a.wind} km/h`],["Humidity",`${a.humidity}%`],["Today",`${Math.round(a.low)}° / ${Math.round(a.high)}°`]];return e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h3",{className:"text-xl font-bold",children:r.name}),e.jsxs("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[r.lat.toFixed(2),", ",r.lon.toFixed(2)," · local time ",n]})]}),e.jsx("span",{className:"text-5xl","aria-hidden":"true",children:s})]}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-6xl font-extrabold tabular-nums tracking-tight",children:[Math.round(a.temperature),"°C"]}),e.jsxs("p",{className:"mt-1 text-lg text-gray-700 dark:text-gray-300",children:[t,a.isDay?"":" · night"]})]}),e.jsx("dl",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:u.map(([i,g])=>e.jsxs("div",{className:"rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-800",children:[e.jsx("dt",{className:"text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400",children:i}),e.jsx("dd",{className:"font-semibold tabular-nums",children:g})]},i))})]})},z=()=>{const[r,a]=d.useState({type:"city",name:"Seoul"}),[t,s]=d.useState({status:"loading"});return d.useEffect(()=>{const n=new AbortController;return s({status:"loading"}),(async()=>{try{const i=r.type==="city"?await _(r.name,n.signal):r,g=await F(i.lat,i.lon,n.signal);s({status:"done",place:i,weather:g})}catch(i){i.name!=="AbortError"&&s({status:"error",message:i.message})}})(),()=>n.abort()},[r]),e.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]",children:[e.jsx("section",{"aria-label":"Search",className:"rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900",children:e.jsx(E,{onSearch:a,busy:t.status==="loading"})}),e.jsxs("section",{"aria-label":"Current weather","aria-live":"polite","aria-busy":t.status==="loading",className:"min-h-64 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900",children:[t.status==="loading"&&e.jsxs("div",{className:"animate-pulse space-y-4","aria-label":"Loading weather",children:[e.jsx("div",{className:"h-6 w-1/2 rounded bg-gray-200 dark:bg-gray-800"}),e.jsx("div",{className:"h-14 w-1/3 rounded bg-gray-200 dark:bg-gray-800"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[1,2,3,4].map(n=>e.jsx("div",{className:"h-12 rounded bg-gray-200 dark:bg-gray-800"},n))})]}),t.status==="error"&&e.jsxs("div",{className:"rounded-lg bg-red-50 px-4 py-3 text-red-800 dark:bg-red-950/40 dark:text-red-300",role:"alert",children:[e.jsx("p",{className:"font-semibold",children:"Couldn't load the weather"}),e.jsx("p",{className:"text-sm",children:t.message})]}),t.status==="done"&&e.jsx(L,{place:t.place,weather:t.weather})]})]})},W=`import { useEffect, useState } from "react";
import { findCity, getWeather } from "./weatherApi";
import SearchForm from "./SearchForm";
import CurrentWeather from "./CurrentWeather";

// The parent. \`query\` is what the user asked for (a city or coordinates).
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
`,M=`import { useState } from "react";

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
      className={\`rounded-md px-3 py-1.5 text-sm font-semibold transition \${
        mode === value
          ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      }\`}
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
`,T=`import { describeWeather } from "./weatherApi";

// Shows the weather for one place. It only receives data through props.
const CurrentWeather = ({ place, weather }) => {
  const { text, icon } = describeWeather(weather.code);
  const updated = weather.time.replace("T", " ");

  const stats = [
    ["Feels like", \`\${Math.round(weather.feelsLike)}°C\`],
    ["Wind", \`\${weather.wind} km/h\`],
    ["Humidity", \`\${weather.humidity}%\`],
    ["Today", \`\${Math.round(weather.low)}° / \${Math.round(weather.high)}°\`],
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
`,$=`// Open-Meteo: free weather data, no API key needed.
//   Geocoding: city name -> latitude / longitude
//   Forecast:  latitude / longitude -> current weather

// WMO weather codes used by Open-Meteo -> a description and an emoji
const CODES = {
  0: ["Clear sky", "☀️"],
  1: ["Mainly clear", "🌤️"],
  2: ["Partly cloudy", "⛅"],
  3: ["Overcast", "☁️"],
  45: ["Fog", "🌫️"],
  48: ["Freezing fog", "🌫️"],
  51: ["Light drizzle", "🌦️"],
  53: ["Drizzle", "🌦️"],
  55: ["Heavy drizzle", "🌧️"],
  56: ["Freezing drizzle", "🌧️"],
  57: ["Freezing drizzle", "🌧️"],
  61: ["Light rain", "🌦️"],
  63: ["Rain", "🌧️"],
  65: ["Heavy rain", "🌧️"],
  66: ["Freezing rain", "🌧️"],
  67: ["Freezing rain", "🌧️"],
  71: ["Light snow", "🌨️"],
  73: ["Snow", "🌨️"],
  75: ["Heavy snow", "❄️"],
  77: ["Snow grains", "🌨️"],
  80: ["Light showers", "🌦️"],
  81: ["Showers", "🌧️"],
  82: ["Violent showers", "⛈️"],
  85: ["Snow showers", "🌨️"],
  86: ["Heavy snow showers", "❄️"],
  95: ["Thunderstorm", "⛈️"],
  96: ["Thunderstorm with hail", "⛈️"],
  99: ["Thunderstorm with hail", "⛈️"],
};

export function describeWeather(code) {
  const [text, icon] = CODES[code] || ["Unknown", "🌡️"];
  return { text, icon };
}

// fetch() that turns failures into readable messages
async function getJson(url, signal) {
  let res;
  try {
    res = await fetch(url, { signal });
  } catch (err) {
    if (err.name === "AbortError") throw err;
    throw new Error("No connection: check your internet and try again.");
  }
  if (res.status === 429) throw new Error("Too many requests right now. Wait a minute and try again.");
  if (!res.ok) throw new Error(\`The weather service answered with an error (\${res.status}).\`);
  return res.json();
}

// "Seoul" -> { name: "Seoul, South Korea", lat, lon }
export async function findCity(name, signal) {
  const url = \`https://geocoding-api.open-meteo.com/v1/search?name=\${encodeURIComponent(name)}&count=1&language=en&format=json\`;
  const data = await getJson(url, signal);
  const place = data.results?.[0];
  if (!place) throw new Error(\`City not found: "\${name}". Check the spelling.\`);
  return {
    name: [place.name, place.country].filter(Boolean).join(", "),
    lat: place.latitude,
    lon: place.longitude,
  };
}

// Current weather plus today's high and low
export async function getWeather(lat, lon, signal) {
  const url =
    \`https://api.open-meteo.com/v1/forecast?latitude=\${lat}&longitude=\${lon}\` +
    "&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day" +
    "&daily=temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=auto";
  const data = await getJson(url, signal);
  return {
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    wind: data.current.wind_speed_10m,
    code: data.current.weather_code,
    isDay: data.current.is_day === 1,
    high: data.daily.temperature_2m_max[0],
    low: data.daily.temperature_2m_min[0],
    time: data.current.time,
  };
}
`;S(z,[{name:"WeatherDashboard.jsx",code:W},{name:"SearchForm.jsx",code:M},{name:"CurrentWeather.jsx",code:T},{name:"weatherApi.js",code:$}]);
