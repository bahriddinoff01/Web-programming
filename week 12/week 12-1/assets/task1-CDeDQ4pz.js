import{r as s,j as e,m as a}from"./page-Ddfm8VX7.js";const i=()=>{const[t,n]=s.useState(!1),o=()=>{n(t!==!0)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"There is an explanation for this heading."}),e.jsx("button",{onClick:o,className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300",children:t?"remove":"show more"}),t&&e.jsx("p",{className:"rounded-lg border-l-4 border-indigo-500 bg-indigo-50 px-4 py-3 text-gray-700 dark:bg-indigo-950/40 dark:text-gray-200",children:"This is the explanation"})]})},r=`import React, { useState } from "react";
import "../src/tailwind.css";

const Task1 = () => {
  const [toggle, settoggle] = useState(false);
  const toggleHandle = () => {
    toggle === true ? settoggle(false) : settoggle(true);
  };
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        There is an explanation for this heading.
      </h3>
      <button
        onClick={toggleHandle}
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
      >
        {toggle ? "remove" : "show more"}
      </button>
      {toggle && (
        <p className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 px-4 py-3 text-gray-700 dark:bg-indigo-950/40 dark:text-gray-200">
          This is the explanation
        </p>
      )}
    </div>
  );
};

export default Task1;
`;a(i,[{name:"Task1.jsx",code:r}]);
