import { mountTask } from "../src/page.jsx";
import GreetingApp from "./GreetingApp";
import greeting from "./Greeting.jsx?raw";
import greetingApp from "./GreetingApp.jsx?raw";

mountTask(GreetingApp, [
  { name: "Greeting.jsx", code: greeting },
  { name: "GreetingApp.jsx", code: greetingApp },
]);
