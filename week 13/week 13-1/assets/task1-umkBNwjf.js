import{r as i,j as e,m as r}from"./page-uD2cG-Gt.js";import{l as d,f as c,s as m,a as b}from"./formStyles-gtAPs9JT.js";const a=200,u=()=>{const[t,n]=i.useState(""),l=a-t.length,s=l===0;return e.jsxs("div",{className:"mx-auto max-w-xl",children:[e.jsx("label",{htmlFor:"bio",className:d,children:"Your bio"}),e.jsx("textarea",{id:"bio",rows:5,value:t,onChange:o=>n(o.target.value.slice(0,a)),disabled:s,"aria-describedby":"bio-count",placeholder:"Tell us about yourself…",className:`${c(!1)} disabled:cursor-not-allowed disabled:bg-gray-100 dark:disabled:bg-gray-800`}),e.jsxs("div",{className:"mt-2 flex flex-wrap items-center justify-between gap-2",children:[e.jsxs("p",{id:"bio-count","aria-live":"polite",className:`text-sm tabular-nums ${l<20?"font-semibold text-red-600 dark:text-red-400":"text-gray-600 dark:text-gray-400"}`,children:[t.length," / ",a,s&&" · limit reached"]}),s&&e.jsx("button",{onClick:()=>n(t.slice(0,a-20)),className:`${m} text-sm`,children:"Remove last 20 characters"})]})]})},x=`import { useState } from "react";
import { fieldClass, labelClass, secondaryButton } from "./formStyles";

const MAX = 200;

// Exercise 1: a controlled textarea with a live "X / 200" counter.
// The text can never be longer than MAX, and the textarea is disabled at the limit.
const BioCounter = () => {
  const [bio, setBio] = useState("");

  const remaining = MAX - bio.length;
  const full = remaining === 0;

  return (
    <div className="mx-auto max-w-xl">
      <label htmlFor="bio" className={labelClass}>
        Your bio
      </label>
      <textarea
        id="bio"
        rows={5}
        value={bio}
        // slice() cuts anything past the limit, e.g. when a long text is pasted
        onChange={(e) => setBio(e.target.value.slice(0, MAX))}
        disabled={full}
        aria-describedby="bio-count"
        placeholder="Tell us about yourself…"
        className={\`\${fieldClass(false)} disabled:cursor-not-allowed disabled:bg-gray-100 dark:disabled:bg-gray-800\`}
      />
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <p
          id="bio-count"
          aria-live="polite"
          className={\`text-sm tabular-nums \${
            remaining < 20 ? "font-semibold text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400"
          }\`}
        >
          {bio.length} / {MAX}
          {full && " · limit reached"}
        </p>
        {full && (
          // A disabled textarea can't be edited, so this lets the user start again
          <button onClick={() => setBio(bio.slice(0, MAX - 20))} className={\`\${secondaryButton} text-sm\`}>
            Remove last 20 characters
          </button>
        )}
      </div>
    </div>
  );
};

export default BioCounter;
`;r(u,[{name:"BioCounter.jsx",code:x},{name:"formStyles.js",code:b}]);
