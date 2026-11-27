// Mounts the React contact form into the homepage's Contact section.
// No Tailwind here: the form uses the site's own styles from assets/site.css.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomeContactForm from "./HomeContactForm";

const root = document.getElementById("contact-form-root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <HomeContactForm />
    </StrictMode>,
  );
}
