import React from "react";

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
