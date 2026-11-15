import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// Renders an exercise and shows its source code on the page
export function mount(App, code) {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  document.getElementById("code").textContent = code.trim();
}
