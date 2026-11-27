// Open-Meteo: free weather data, no API key needed.
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
  if (!res.ok) throw new Error(`The weather service answered with an error (${res.status}).`);
  return res.json();
}

// "Seoul" -> { name: "Seoul, South Korea", lat, lon }
export async function findCity(name, signal) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1&language=en&format=json`;
  const data = await getJson(url, signal);
  const place = data.results?.[0];
  if (!place) throw new Error(`City not found: "${name}". Check the spelling.`);
  return {
    name: [place.name, place.country].filter(Boolean).join(", "),
    lat: place.latitude,
    lon: place.longitude,
  };
}

// Current weather plus today's high and low
export async function getWeather(lat, lon, signal) {
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
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
