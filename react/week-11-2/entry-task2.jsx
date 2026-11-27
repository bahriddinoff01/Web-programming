import { mountTask } from "../src/page.jsx";
import StudentCardApp from "./StudentCardApp";
import studentCard from "./StudentCard.jsx?raw";
import studentCardApp from "./StudentCardApp.jsx?raw";

mountTask(StudentCardApp, [
  { name: "StudentCard.jsx", code: studentCard },
  { name: "StudentCardApp.jsx", code: studentCardApp },
]);
