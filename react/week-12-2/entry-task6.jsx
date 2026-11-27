import { mountTask } from "../src/page.jsx";
import CharCount from "./CharCount";
import charCount from "./CharCount.jsx?raw";

mountTask(CharCount, [
  { name: "CharCount.jsx", code: charCount },
]);
