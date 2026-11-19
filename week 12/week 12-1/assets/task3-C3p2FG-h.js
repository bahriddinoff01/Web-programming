import{j as e,r as a,m as c}from"./page-Ddfm8VX7.js";const d=({name:n,score:o,onIncrement:t,onDecrement:s})=>e.jsxs("div",{className:"flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900",children:[e.jsxs("h4",{className:"font-medium",children:[n," score is ",o]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:s,className:"h-9 w-9 rounded-lg border border-gray-300 text-lg font-semibold transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700",children:"-"}),e.jsx("button",{onClick:t,className:"h-9 w-9 rounded-lg bg-indigo-600 text-lg font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300",children:"+"})]})]}),i=()=>{const[n,o]=a.useState(0),[t,s]=a.useState(0);return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("h3",{className:"rounded-lg bg-indigo-50 px-4 py-3 text-lg font-semibold text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200",children:["total score is ",n+t]}),e.jsx(d,{name:"Player 1",score:n,onIncrement:()=>o(r=>r+1),onDecrement:()=>o(r=>r-1)}),e.jsx(d,{name:"Player 2",score:t,onIncrement:()=>s(r=>r+1),onDecrement:()=>s(r=>r-1)})]})},g=`import { useState } from "react";
import PlayerScore from "./PlayerScore";

const ScoreBoard = () => {
  const [firstScore, setFirstScore] = useState(0);
  const [secondScore, setSecondScore] = useState(0);
  return (
    <div className="space-y-3">
      <h3 className="rounded-lg bg-indigo-50 px-4 py-3 text-lg font-semibold text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200">
        total score is {firstScore + secondScore}
      </h3>
      <PlayerScore
        name="Player 1"
        score={firstScore}
        onIncrement={() => setFirstScore((p) => p + 1)}
        onDecrement={() => setFirstScore((p) => p - 1)}
      />
      <PlayerScore
        name="Player 2"
        score={secondScore}
        onIncrement={() => setSecondScore((p) => p + 1)}
        onDecrement={() => setSecondScore((p) => p - 1)}
      />
    </div>
  );
};

export default ScoreBoard;
`,l=`import React from "react";

const PlayerScore = ({ name, score, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900">
      <h4 className="font-medium">
        {name} score is {score}
      </h4>
      <div className="flex gap-2">
        <button
          onClick={onDecrement}
          className="h-9 w-9 rounded-lg border border-gray-300 text-lg font-semibold transition hover:border-indigo-500 hover:text-indigo-600 dark:border-gray-700"
        >
          -
        </button>
        <button
          onClick={onIncrement}
          className="h-9 w-9 rounded-lg bg-indigo-600 text-lg font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PlayerScore;
`;c(i,[{name:"ScoreBoard.jsx",code:g},{name:"PlayerScore.jsx",code:l}]);
