import { useState } from "react";
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
        className={`${fieldClass(false)} disabled:cursor-not-allowed disabled:bg-gray-100 dark:disabled:bg-gray-800`}
      />
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <p
          id="bio-count"
          aria-live="polite"
          className={`text-sm tabular-nums ${
            remaining < 20 ? "font-semibold text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {bio.length} / {MAX}
          {full && " · limit reached"}
        </p>
        {full && (
          // A disabled textarea can't be edited, so this lets the user start again
          <button onClick={() => setBio(bio.slice(0, MAX - 20))} className={`${secondaryButton} text-sm`}>
            Remove last 20 characters
          </button>
        )}
      </div>
    </div>
  );
};

export default BioCounter;
