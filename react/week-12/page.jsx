// Shared helper for the Week 12-1 pages:
// renders a task into #root and its source files into #code.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/tailwind.css";

function CodeBlocks({ files }) {
  return (
    <div className="space-y-4">
      {files.map((file) => (
        <figure key={file.name} className="overflow-hidden rounded-xl bg-[#15141c]">
          <figcaption className="border-b border-white/10 bg-[#22212c] px-4 py-2 font-mono text-xs font-semibold text-gray-300">
            {file.name}
          </figcaption>
          <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed text-gray-100">
            <code>{file.code.trim()}</code>
          </pre>
        </figure>
      ))}
    </div>
  );
}

export function mountTask(App, files) {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  createRoot(document.getElementById("code")).render(<CodeBlocks files={files} />);
}
