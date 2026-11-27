import { mountTask } from "../src/page.jsx";
import WeatherDashboard from "./weather/WeatherDashboard";
import weatherDashboard from "./weather/WeatherDashboard.jsx?raw";
import searchForm from "./weather/SearchForm.jsx?raw";
import currentWeather from "./weather/CurrentWeather.jsx?raw";
import weatherApi from "./weather/weatherApi.js?raw";

mountTask(WeatherDashboard, [
  { name: "WeatherDashboard.jsx", code: weatherDashboard },
  { name: "SearchForm.jsx", code: searchForm },
  { name: "CurrentWeather.jsx", code: currentWeather },
  { name: "weatherApi.js", code: weatherApi },
]);
