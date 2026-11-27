import { mountTask } from "../src/page.jsx";
import RegistrationWizard from "./registration/RegistrationWizard";
import wizard from "./registration/RegistrationWizard.jsx?raw";
import validate from "./registration/validate.js?raw";
import field from "./registration/Field.jsx?raw";
import formStyles from "./formStyles.js?raw";

mountTask(RegistrationWizard, [
  { name: "RegistrationWizard.jsx", code: wizard },
  { name: "validate.js", code: validate },
  { name: "Field.jsx", code: field },
  { name: "formStyles.js", code: formStyles },
]);
