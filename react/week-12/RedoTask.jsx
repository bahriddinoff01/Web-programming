import { useState } from "react";

const RedoTask = () => {
  const [value, setValue] = useState(0);
  const [historyArray, setHistoryArray] = useState([value]);
  const [redoArray, setRedoArray] = useState([]);
  const AddHandle = () => {
    const newValue = value + 1;
    setValue(newValue);
    setHistoryArray((prev) => [...prev, newValue]);
    setRedoArray([]);
  };
  const MinusHandle = () => {
    const newValue = value - 1;
    setValue(newValue);
    setHistoryArray((prev) => [...prev, newValue]);
    setRedoArray([]);
  };
  const ResetHandle = () => {
    setHistoryArray([0]);
    setValue(0);
    setRedoArray([]);
  };
  const UndoHandler = () => {
    const newHistoryArray = historyArray.slice(0, -1);
    const removedValue = historyArray.at(-1);
    setRedoArray((prev) => [...prev, removedValue]);
    setHistoryArray(newHistoryArray);
    setValue(newHistoryArray.at(-1));
  };
  const RedoHandler = () => {
    const lastItem = redoArray.at(-1);
    setHistoryArray((prev) => [...prev, lastItem]);
    setValue(lastItem);
    const lastRemovedItem = redoArray.slice(0, -1);
    setRedoArray(lastRemovedItem);
  };
  return (
    <div className="mx-auto max-w-md space-y-5 text-center">
      <h1 className="text-6xl font-extrabold tabular-nums tracking-tight">
        {value}
      </h1>
      <div className="rounded-xl bg-gray-100 px-4 py-3 dark:bg-gray-900">
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-gray-600 dark:text-gray-400">
          History (last 5)
        </p>
        <p className="font-mono text-lg">
          [{historyArray.slice(-5).join(", ")}]
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
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
        <button
          onClick={RedoHandler}
          disabled={redoArray.length === 0}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default RedoTask;
