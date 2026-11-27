import { useState } from "react";
import { errorClass, fieldClass, hintClass, labelClass, primaryButton, secondaryButton } from "./formStyles";

const RATINGS = [5, 4, 3];
const TOPICS = ["HTML", "CSS", "JavaScript", "Git", "React"];
const MAX_COMMENT = 300;
const EMPTY = { name: "", studentId: "", rating: "", topics: [], comments: "" };

// Video lecture practice: a course feedback form.
// Text fields, radio buttons and checkboxes all live in one state object.
const CourseFeedback = () => {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [thanked, setThanked] = useState("");

  // One handler for the text inputs, the textarea and the radio buttons
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Checkboxes add to or remove from the topics array
  const toggleTopic = (topic, checked) => {
    setForm((prev) => ({
      ...prev,
      topics: checked ? [...prev.topics, topic] : prev.topics.filter((t) => t !== topic),
    }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Your name is required.";
    if (!/^\d{8}$/.test(form.studentId)) errs.studentId = "The student ID must be exactly 8 digits.";
    if (!form.rating) errs.rating = "Please choose a rating.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);
    setThanked(form.name.trim());
  };

  // Bonus: the button stays disabled while a required field is empty
  const missingRequired = !form.name.trim() || !form.studentId || !form.rating;

  if (thanked) {
    return (
      <div className="mx-auto max-w-xl rounded-xl bg-green-50 p-6 text-center dark:bg-green-950/40" role="status">
        <p className="text-4xl" aria-hidden="true">🎉</p>
        <p className="mt-2 text-lg font-semibold text-green-900 dark:text-green-200">Thank you, {thanked}!</p>
        <p className="text-green-800 dark:text-green-300">
          You rated the course {"★".repeat(Number(form.rating))}
          {form.topics.length > 0 && ` and liked ${form.topics.join(", ")}`}.
        </p>
        <button
          onClick={() => {
            setForm(EMPTY);
            setThanked("");
          }}
          className={`${secondaryButton} mt-4`}
        >
          Fill it in again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-xl space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fb-name" className={labelClass}>
            Student name <span className="text-red-600">*</span>
          </label>
          <input id="fb-name" name="name" value={form.name} onChange={handleChange} autoComplete="name"
            aria-invalid={!!errors.name} aria-describedby="fb-name-error" className={fieldClass(errors.name)} />
          <p id="fb-name-error" className={errorClass}>{errors.name}</p>
        </div>
        <div>
          <label htmlFor="fb-id" className={labelClass}>
            Student ID <span className="text-red-600">*</span>
          </label>
          <input id="fb-id" name="studentId" inputMode="numeric" maxLength={8} placeholder="8 digits"
            value={form.studentId}
            // Only digits are kept, so letters can't be typed in
            onChange={(e) => handleChange({ target: { name: "studentId", value: e.target.value.replace(/\D/g, "") } })}
            aria-invalid={!!errors.studentId} aria-describedby="fb-id-error" className={fieldClass(errors.studentId)} />
          <p id="fb-id-error" className={errorClass}>{errors.studentId}</p>
        </div>
      </div>

      <fieldset aria-describedby="fb-rating-error">
        <legend className={labelClass}>
          Rating <span className="text-red-600">*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {RATINGS.map((stars) => (
            <label
              key={stars}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 ${
                form.rating === String(stars) ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40" : "border-gray-300 dark:border-gray-700"
              }`}
            >
              <input type="radio" name="rating" value={stars} checked={form.rating === String(stars)}
                onChange={handleChange} className="accent-indigo-600" />
              <span className="text-amber-500" aria-hidden="true">{"★".repeat(stars)}</span>
              <span className="sr-only">{stars} stars</span>
            </label>
          ))}
        </div>
        <p id="fb-rating-error" className={errorClass}>{errors.rating}</p>
      </fieldset>

      <fieldset>
        <legend className={labelClass}>Topics covered well (optional)</legend>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {TOPICS.map((topic) => (
            <label key={topic} className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" checked={form.topics.includes(topic)}
                onChange={(e) => toggleTopic(topic, e.target.checked)} className="h-4 w-4 accent-indigo-600" />
              {topic}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="fb-comments" className={labelClass}>Comments (optional)</label>
        <textarea id="fb-comments" name="comments" rows={4} maxLength={MAX_COMMENT} value={form.comments}
          onChange={handleChange} aria-describedby="fb-comments-count" className={fieldClass(false)} />
        <p id="fb-comments-count" className={hintClass} aria-live="polite">
          {form.comments.length} / {MAX_COMMENT} characters
        </p>
      </div>

      <button type="submit" disabled={missingRequired} className={primaryButton}>
        Submit feedback
      </button>
      {missingRequired && <p className={hintClass}>Fill in the fields marked * to submit.</p>}
    </form>
  );
};

export default CourseFeedback;
