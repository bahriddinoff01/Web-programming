import { useState } from "react";
import { STEP_VALIDATORS } from "./validate";
import Field from "./Field";
import { errorClass, labelClass, primaryButton, secondaryButton } from "../formStyles";

const STEPS = ["Personal info", "Account setup", "Preferences"];
const ROLES = ["Student", "TA", "Instructor"];
const EMPTY = { name: "", email: "", username: "", password: "", confirm: "", role: "", newsletter: false };

// Code challenge: a 3-step registration wizard.
// All the data lives in ONE state object in the parent, so going back to a
// previous step never loses what was typed. Each step only decides what is shown.
const RegistrationWizard = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const errors = STEP_VALIDATORS[step](form); // worked out on every render
  const stepIsValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };
  const handleBlur = (e) => setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const fieldProps = (name) => ({
    name,
    value: form[name],
    error: errors[name],
    touched: touched[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!stepIsValid) return;
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      return;
    }
    // Final step: log the whole form object, as the challenge asks
    const fullFormObject = { ...form };
    delete fullFormObject.confirm;
    console.log(fullFormObject);
    setSubmitted(fullFormObject);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-md space-y-3" role="status">
        <p className="rounded-lg bg-green-50 px-4 py-3 font-semibold text-green-900 dark:bg-green-950/40 dark:text-green-200">
          ✅ Registered! This object was logged to the console:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-[#15141c] p-4 text-sm text-gray-100">
          {JSON.stringify({ ...submitted, password: "••••••••" }, null, 2)}
        </pre>
        <button
          onClick={() => {
            setForm(EMPTY);
            setTouched({});
            setStep(0);
            setSubmitted(null);
          }}
          className={secondaryButton}
        >
          Start again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-md">
      <p className="text-lg font-bold" aria-live="polite">
        Step {step + 1} of {STEPS.length}: <span className="font-semibold text-gray-600 dark:text-gray-400">{STEPS[step]}</span>
      </p>

      {/* Progress bar: one segment per step, filled up to the current one */}
      <div className="mt-3 mb-5 grid grid-cols-3 gap-1.5" aria-hidden="true">
        {STEPS.map((label, i) => (
          <span key={label} className={`h-2 rounded-full ${i <= step ? "bg-indigo-600 dark:bg-indigo-400" : "bg-gray-200 dark:bg-gray-800"}`} />
        ))}
      </div>

      <div className="space-y-3">
        {step === 0 && (
          <>
            <Field label="Name" autoComplete="name" {...fieldProps("name")} />
            <Field label="Email" type="email" autoComplete="email" {...fieldProps("email")} />
          </>
        )}

        {step === 1 && (
          <>
            <Field label="Username" autoComplete="username" {...fieldProps("username")} />
            <Field label="Password" type="password" autoComplete="new-password" {...fieldProps("password")} />
            <Field label="Confirm password" type="password" autoComplete="new-password" {...fieldProps("confirm")} />
          </>
        )}

        {step === 2 && (
          <>
            <fieldset>
              <legend className={labelClass}>Role</legend>
              <div className="flex flex-wrap gap-2">
                {ROLES.map((role) => (
                  <label key={role} className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 ${
                    form.role === role ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40" : "border-gray-300 dark:border-gray-700"
                  }`}>
                    <input type="radio" name="role" value={role} checked={form.role === role} onChange={handleChange} className="accent-indigo-600" />
                    {role}
                  </label>
                ))}
              </div>
              {touched.role && <p className={errorClass}>{errors.role}</p>}
            </fieldset>

            <label className="flex cursor-pointer items-center gap-2">
              <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} className="h-4 w-4 accent-indigo-600" />
              Subscribe to the newsletter
            </label>

            {/* Read-only review of everything entered in the earlier steps */}
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-800">
              <dt className="font-semibold">Name</dt><dd className="break-all">{form.name}</dd>
              <dt className="font-semibold">Email</dt><dd className="break-all">{form.email}</dd>
              <dt className="font-semibold">Username</dt><dd className="break-all">{form.username}</dd>
              <dt className="font-semibold">Password</dt><dd>{"•".repeat(form.password.length)}</dd>
              <dt className="font-semibold">Role</dt><dd>{form.role || "—"}</dd>
              <dt className="font-semibold">Newsletter</dt><dd>{form.newsletter ? "Yes" : "No"}</dd>
            </dl>
          </>
        )}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => setStep(step - 1)} disabled={step === 0} className={secondaryButton}>
          Previous
        </button>
        <button type="submit" disabled={!stepIsValid} className={primaryButton}>
          {step === STEPS.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
      {!stepIsValid && <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">Next stays disabled until this step is valid.</p>}
    </form>
  );
};

export default RegistrationWizard;
