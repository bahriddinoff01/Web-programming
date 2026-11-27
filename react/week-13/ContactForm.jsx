import { useState } from "react";
import { errorClass, fieldClass, labelClass, primaryButton, secondaryButton } from "./formStyles";

const EMPTY = { name: "", email: "", message: "" };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Exercise 2: a contact form validated on submit.
// One state object holds every field, and one handler updates them all using e.target.name.
const ContactForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sentTo, setSentTo] = useState(""); // the name shown in the thank-you message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // The error for this field disappears as soon as the user fixes it
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!EMAIL.test(form.email)) errs.email = "Enter a valid email, like name@example.com.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the browser from reloading the page
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSentTo(form.name.trim());
    setForm(EMPTY); // reset the form
  };

  if (sentTo) {
    return (
      <div className="mx-auto max-w-xl rounded-xl bg-green-50 p-6 text-center dark:bg-green-950/40" role="status">
        <p className="text-4xl" aria-hidden="true">✉️</p>
        <p className="mt-2 text-lg font-semibold text-green-900 dark:text-green-200">Thank you, {sentTo}!</p>
        <p className="text-green-800 dark:text-green-300">Your message was sent. I'll get back to you soon.</p>
        <button onClick={() => setSentTo("")} className={`${secondaryButton} mt-4`}>
          Send another message
        </button>
      </div>
    );
  }

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={`contact-${name}`} className={labelClass}>
        {label}
      </label>
      {name === "message" ? (
        <textarea id={`contact-${name}`} name={name} rows={4} value={form[name]} onChange={handleChange}
          aria-invalid={!!errors[name]} aria-describedby={`contact-${name}-error`} className={fieldClass(errors[name])} />
      ) : (
        <input id={`contact-${name}`} name={name} value={form[name]} onChange={handleChange}
          aria-invalid={!!errors[name]} aria-describedby={`contact-${name}-error`} className={fieldClass(errors[name])} {...props} />
      )}
      <p id={`contact-${name}-error`} className={errorClass}>
        {errors[name]}
      </p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-xl space-y-3">
      {field("name", "Name", { autoComplete: "name" })}
      {field("email", "Email", { type: "email", autoComplete: "email" })}
      {field("message", "Message")}
      <button type="submit" className={primaryButton}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
