import { useEffect, useState } from "react";

// A stopwatch. The interval only exists while `running` is true:
// the effect creates it, and the cleanup clears it on Stop, Reset or when the component goes away.
const Stopwatch = () => {
  const [tenths, setTenths] = useState(0); // tenths of a second
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setTenths((t) => t + 1); // updater form, so it always uses the latest value
    }, 100);
    return () => clearInterval(id);
  }, [running]);

  const minutes = String(Math.floor(tenths / 600)).padStart(2, "0");
  const seconds = String(Math.floor((tenths % 600) / 10)).padStart(2, "0");
  const tenth = tenths % 10;

  const reset = () => {
    setRunning(false);
    setTenths(0);
  };

  return (
    <div className="mx-auto max-w-sm space-y-5 text-center">
      <p className="font-mono text-6xl font-bold tabular-nums tracking-tight" aria-live="off">
        {minutes}:{seconds}
        <span className="text-3xl text-gray-500">.{tenth}</span>
      </p>
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => setRunning(true)}
          disabled={running}
          className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-300"
        >
          Start
        </button>
        <button
          onClick={() => setRunning(false)}
          disabled={!running}
          className="rounded-lg border border-gray-300 px-4 py-2 font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Stop
        </button>
        <button
          onClick={reset}
          disabled={tenths === 0}
          className="rounded-lg border border-gray-300 px-4 py-2 font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
