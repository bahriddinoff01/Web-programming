import { mountTask } from "../src/page.jsx";
import TitleSync from "./TitleSync";
import titleSync from "./TitleSync.jsx?raw";

mountTask(TitleSync, [
  { name: "TitleSync.jsx", code: titleSync },
]);
