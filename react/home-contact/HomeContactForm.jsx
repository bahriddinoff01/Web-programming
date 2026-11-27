import { useState } from "react";

const EMAIL_TO = "202537225@gachon.ac.kr";
const MAX_MESSAGE = 500;
const TOPICS = ["A question about my work", "Team project", "Feedback on this site", "Something else"];
const EMPTY = { name: "", email: "", topic: TOPICS[0], message: "" };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The contact form on my portfolio homepage (Week 13: React forms).
// Every field is controlled by one state object. This is a static site with no
// server, so a valid message opens the visitor's email app with everything filled in.
const HomeContactForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sentBy, setSentBy] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (form.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!EMAIL.test(form.email)) errs.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) errs.message = "Your message should be at least 10 characters.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Move focus to the first field with a problem
      document.getElementById(`hc-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const subject = `${form.topic} — from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`;
    window.location.href = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentBy(form.name.trim());
    setForm(EMPTY);
  };

  if (sentBy) {
    return (
      <div className="hc-done" role="status">
        <p className="hc-done-title">Thank you, {sentBy}!</p>
        <p>Your email app should open with the message ready. Just press send.</p>
        <p className="hc-small">
          Nothing happened? Email me at <a href={`mailto:${EMAIL_TO}`}>{EMAIL_TO}</a>.
        </p>
        <button type="button" className="btn" onClick={() => setSentBy("")}>
          Write another message
        </button>
      </div>
    );
  }

  const left = MAX_MESSAGE - form.message.length;

  return (
    <form className="hc-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="hc-row">
        <div className="hc-field">
          <label htmlFor="hc-name">Name</label>
          <input id="hc-name" name="name" value={form.name} onChange={handleChange} autoComplete="name"
            aria-invalid={!!errors.name} aria-describedby="hc-name-error" />
          <p id="hc-name-error" className="hc-error">{errors.name}</p>
        </div>
        <div className="hc-field">
          <label htmlFor="hc-email">Email</label>
          <input id="hc-email" name="email" type="email" value={form.email} onChange={handleChange} autoComplete="email"
            aria-invalid={!!errors.email} aria-describedby="hc-email-error" />
          <p id="hc-email-error" className="hc-error">{errors.email}</p>
        </div>
      </div>

      <div className="hc-field">
        <label htmlFor="hc-topic">Topic</label>
        <select id="hc-topic" name="topic" value={form.topic} onChange={handleChange}>
          {TOPICS.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </div>

      <div className="hc-field">
        <label htmlFor="hc-message">Message</label>
        <textarea id="hc-message" name="message" rows={5} maxLength={MAX_MESSAGE} value={form.message}
          onChange={handleChange} aria-invalid={!!errors.message} aria-describedby="hc-message-count hc-message-error" />
        <p id="hc-message-count" className={`hc-count${left <= 50 ? " hc-count-low" : ""}`} aria-live="polite">
          {form.message.length} / {MAX_MESSAGE}
        </p>
        <p id="hc-message-error" className="hc-error">{errors.message}</p>
      </div>

      <button type="submit" className="btn btn-primary">Send message</button>
    </form>
  );
};

export default HomeContactForm;
