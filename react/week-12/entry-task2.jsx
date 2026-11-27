import { mountTask } from "../src/page.jsx";
import Task2 from "./Task2";
import task2 from "./Task2.jsx?raw";

mountTask(Task2, [{ name: "Task2.jsx", code: task2 }]);
