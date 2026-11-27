import { mountTask } from "../src/page.jsx";
import CourseFeedback from "./CourseFeedback";
import courseFeedback from "./CourseFeedback.jsx?raw";
import formStyles from "./formStyles.js?raw";

mountTask(CourseFeedback, [
  { name: "CourseFeedback.jsx", code: courseFeedback },
  { name: "formStyles.js", code: formStyles },
]);
