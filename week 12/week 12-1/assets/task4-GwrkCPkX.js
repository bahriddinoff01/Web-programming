import{r as d,j as n,m as y}from"./page-I-JLkg2V.js";const b=()=>{const[t,e]=d.useState(0),[o,a]=d.useState([t]),i=()=>{const r=t+1;e(r),a(s=>[...s,r])},l=()=>{const r=t-1;e(r),a(s=>[...s,r])},g=()=>{a([0]),e(0)},c=()=>{const r=o.slice(0,-1);a(r),e(r.at(-1))};return n.jsxs("div",{className:"mx-auto max-w-md space-y-5 text-center",children:[n.jsx("h1",{className:"text-6xl font-extrabold tabular-nums tracking-tight",children:t}),n.jsxs("div",{className:"rounded-xl bg-gray-100 px-4 py-3 dark:bg-gray-900",children:[n.jsx("p",{className:"mb-1 text-xs font-bold uppercase tracking-[0.08em] text-gray-600 dark:text-gray-400",children:"History (last 5)"}),n.jsxs("p",{className:"font-mono text-lg",children:["[",o.slice(-5).join(", "),"]"]})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:[n.jsx("button",{onClick:i,className:"rounded-lg bg-indigo-600 px-4 py-2 text-lg font-bold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300",children:"+"}),n.jsx("button",{onClick:l,className:"rounded-lg bg-indigo-600 px-4 py-2 text-lg font-bold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300",children:"-"}),n.jsx("button",{onClick:g,className:"rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800",children:"Reset"}),n.jsx("button",{onClick:c,disabled:o.length===1,className:"rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800",children:"Undo"})]})]})},u=`import React, { useState } from "react";

const HistoryArray = () => {
  const [value, setValue] = useState(0);
  const [historyArray, setHistoryArray] = useState([value]);
  const AddHandle = () => {
    const newValue = value + 1;
    setValue(newValue);
    setHistoryArray((prev) => [...prev, newValue]);
  };
  const MinusHandle = () => {
    const newValue = value - 1;
    setValue(newValue);
    setHistoryArray((prev) => [...prev, newValue]);
  };
  const ResetHandle = () => {
    setHistoryArray([0]);
    setValue(0);
  };
  const UndoHandler = () => {
    const newHistoryArray = historyArray.slice(0, -1);
    setHistoryArray(newHistoryArray);
    setValue(newHistoryArray.at(-1));
  };
  return (
    <div className="mx-auto max-w-md space-y-5 text-center">
      <h1 className="text-6xl font-extrabold tabular-nums tracking-tight">{value}</h1>
      <div className="rounded-xl bg-gray-100 px-4 py-3 dark:bg-gray-900">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-gray-600 dark:text-gray-400">
          History (last 5)
        </p>
        <p className="font-mono text-lg">[{historyArray.slice(-5).join(", ")}]</p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <button
          onClick={AddHandle}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-lg font-bold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
        >
          +
        </button>
        <button
          onClick={MinusHandle}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-lg font-bold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
        >
          -
        </button>
        <button
          onClick={ResetHandle}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Reset
        </button>
        <button
          onClick={UndoHandler}
          disabled={historyArray.length === 1}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Undo
        </button>
      </div>
    </div>
  );
};

export default HistoryArray;
`;y(b,[{name:"HistoryArray.jsx",code:u}]);
