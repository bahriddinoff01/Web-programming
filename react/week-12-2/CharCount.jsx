import { useEffect, useState } from "react";

const LIMIT = 80;

// Practice: a live character count using useEffect, as the slide asks.
// The effect copies text.length into its own state whenever `text` changes.
// (In real code `text.length` could be used directly while rendering, with no effect:
//  this is only here to practise the dependency array.)
const CharCount = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(text.length);
  }, [text]);

  const left = LIMIT - count;

  return (
    <div className="mx-auto max-w-md space-y-2">
      <label htmlFor="char-text" className="block font-medium">
        Status message
      </label>
      <input
        id="char-text"
        value={text}
        maxLength={LIMIT}
        onChange={(e) => setText(e.target.value)}
        placeholder="What are you working on?"
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-900"
      />
      <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
        <div
          className={`h-full transition-all ${left <= 10 ? "bg-red-500" : "bg-indigo-500"}`}
          style={{ width: `${(count / LIMIT) * 100}%` }}
        />
      </div>
      <p
        className={`text-sm ${left <= 10 ? "font-semibold text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400"}`}
        aria-live="polite"
      >
        {count} / {LIMIT} characters ({left} left)
      </p>
    </div>
  );
};

export default CharCount;
