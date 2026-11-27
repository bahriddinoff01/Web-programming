import { mountTask } from "../src/page.jsx";
import Task1 from "./Task1";
import task1 from "./Task1.jsx?raw";

mountTask(Task1, [{ name: "Task1.jsx", code: task1 }]);
