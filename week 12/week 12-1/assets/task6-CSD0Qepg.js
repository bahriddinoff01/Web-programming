import{r as s,j as r,m as i}from"./page-I-JLkg2V.js";const l=()=>{const[e,t]=s.useState(""),a=e.trim(),n=a===""?0:a.split(/\s+/).length,o=e.length;return r.jsxs("div",{className:"mx-auto max-w-xl space-y-3",children:[r.jsx("label",{htmlFor:"word-count-text",className:"block font-medium",children:"Write something"}),r.jsx("textarea",{id:"word-count-text",rows:5,value:e,onChange:d=>t(d.target.value),placeholder:"Start typing…",className:"w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-900"}),r.jsxs("div",{className:"flex flex-wrap gap-2 text-sm","aria-live":"polite",children:[r.jsxs("span",{className:"rounded-full bg-indigo-50 px-3 py-1 font-semibold text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200",children:[n," ",n===1?"word":"words"]}),r.jsxs("span",{className:"rounded-full bg-gray-100 px-3 py-1 text-gray-700 dark:bg-gray-800 dark:text-gray-300",children:[o," ",o===1?"character":"characters"]})]}),r.jsx("button",{onClick:()=>t(""),disabled:e==="",className:"rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800",children:"Clear"})]})},c=`import { useState } from "react";

// A textarea with a live word count.
// Only the text is stored in state; the counts are calculated from it on every render.
const WordCount = () => {
  const [text, setText] = useState("");

  const trimmed = text.trim();
  const words = trimmed === "" ? 0 : trimmed.split(/\\s+/).length;
  const characters = text.length;

  return (
    <div className="mx-auto max-w-xl space-y-3">
      <label htmlFor="word-count-text" className="block font-medium">
        Write something
      </label>
      <textarea
        id="word-count-text"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing…"
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-900"
      />
      <div className="flex flex-wrap gap-2 text-sm" aria-live="polite">
        <span className="rounded-full bg-indigo-50 px-3 py-1 font-semibold text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200">
          {words} {words === 1 ? "word" : "words"}
        </span>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          {characters} {characters === 1 ? "character" : "characters"}
        </span>
      </div>
      <button
        onClick={() => setText("")}
        disabled={text === ""}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800"
      >
        Clear
      </button>
    </div>
  );
};

export default WordCount;
`;i(l,[{name:"WordCount.jsx",code:c}]);
