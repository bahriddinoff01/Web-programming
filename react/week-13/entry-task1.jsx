import { mountTask } from "../src/page.jsx";
import BioCounter from "./BioCounter";
import bioCounter from "./BioCounter.jsx?raw";
import formStyles from "./formStyles.js?raw";

mountTask(BioCounter, [
  { name: "BioCounter.jsx", code: bioCounter },
  { name: "formStyles.js", code: formStyles },
]);
