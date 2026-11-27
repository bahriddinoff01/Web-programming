import { mountTask } from "../src/page.jsx";
import StudentList from "./StudentList";
import studentList from "./StudentList.jsx?raw";

mountTask(StudentList, [
  { name: "StudentList.jsx", code: studentList },
]);
