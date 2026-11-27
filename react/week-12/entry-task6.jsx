import { mountTask } from "../src/page.jsx";
import WordCount from "./WordCount";
import wordCount from "./WordCount.jsx?raw";

mountTask(WordCount, [{ name: "WordCount.jsx", code: wordCount }]);
