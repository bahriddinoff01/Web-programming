import { mountTask } from "../src/page.jsx";
import ContactForm from "./ContactForm";
import contactForm from "./ContactForm.jsx?raw";
import formStyles from "./formStyles.js?raw";

mountTask(ContactForm, [
  { name: "ContactForm.jsx", code: contactForm },
  { name: "formStyles.js", code: formStyles },
]);
