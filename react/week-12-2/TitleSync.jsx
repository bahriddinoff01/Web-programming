import { useEffect, useState } from "react";

// Keeps the browser tab's title in sync with the input.
// The effect runs after every render where `text` changed.
// Its cleanup puts the old title back before the next run and when the component is removed.
const TitleSync = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const previousTitle = document.title;
    if (text.trim()) document.title = text;

    return () => {
      document.title = previousTitle;
    };
  }, [text]);

  return (
    <div className="mx-auto max-w-md space-y-3">
      <label htmlFor="title-text" className="block font-medium">
        New tab title
      </label>
      <input
        id="title-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type and look at the browser tab…"
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-900"
      />
      <p className="text-sm text-gray-600 dark:text-gray-400">
        The tab now says:{" "}
        <strong className="text-gray-900 dark:text-gray-100">{text.trim() || "(the original title)"}</strong>
      </p>
    </div>
  );
};

export default TitleSync;
