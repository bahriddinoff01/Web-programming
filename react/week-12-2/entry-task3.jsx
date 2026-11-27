import { mountTask } from "../src/page.jsx";
import Stopwatch from "./Stopwatch";
import stopwatch from "./Stopwatch.jsx?raw";

mountTask(Stopwatch, [
  { name: "Stopwatch.jsx", code: stopwatch },
]);
