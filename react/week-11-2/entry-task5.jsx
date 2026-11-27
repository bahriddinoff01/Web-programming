import { mountTask } from "../src/page.jsx";
import ConditionalDemo from "./ConditionalDemo";
import conditionalDemo from "./ConditionalDemo.jsx?raw";

mountTask(ConditionalDemo, [
  { name: "ConditionalDemo.jsx", code: conditionalDemo },
]);
