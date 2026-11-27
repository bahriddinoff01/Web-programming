import{r as l,j as a,m as b}from"./page-uD2cG-Gt.js";import{s as v,p as C,l as y,f as p,e as N,a as S}from"./formStyles-gtAPs9JT.js";const f={name:"",email:"",message:""},E=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,j=()=>{const[n,i]=l.useState(f),[s,c]=l.useState({}),[d,u]=l.useState(""),g=e=>{const{name:t,value:o}=e.target;i(m=>({...m,[t]:o})),c(m=>({...m,[t]:""}))},x=()=>{const e={};return n.name.trim()||(e.name="Name is required."),n.email.trim()?E.test(n.email)||(e.email="Enter a valid email, like name@example.com."):e.email="Email is required.",n.message.trim()||(e.message="Message is required."),e},h=e=>{e.preventDefault();const t=x();if(Object.keys(t).length>0){c(t);return}u(n.name.trim()),i(f)};if(d)return a.jsxs("div",{className:"mx-auto max-w-xl rounded-xl bg-green-50 p-6 text-center dark:bg-green-950/40",role:"status",children:[a.jsx("p",{className:"text-4xl","aria-hidden":"true",children:"✉️"}),a.jsxs("p",{className:"mt-2 text-lg font-semibold text-green-900 dark:text-green-200",children:["Thank you, ",d,"!"]}),a.jsx("p",{className:"text-green-800 dark:text-green-300",children:"Your message was sent. I'll get back to you soon."}),a.jsx("button",{onClick:()=>u(""),className:`${v} mt-4`,children:"Send another message"})]});const r=(e,t,o={})=>a.jsxs("div",{children:[a.jsx("label",{htmlFor:`contact-${e}`,className:y,children:t}),e==="message"?a.jsx("textarea",{id:`contact-${e}`,name:e,rows:4,value:n[e],onChange:g,"aria-invalid":!!s[e],"aria-describedby":`contact-${e}-error`,className:p(s[e])}):a.jsx("input",{id:`contact-${e}`,name:e,value:n[e],onChange:g,"aria-invalid":!!s[e],"aria-describedby":`contact-${e}-error`,className:p(s[e]),...o}),a.jsx("p",{id:`contact-${e}-error`,className:N,children:s[e]})]});return a.jsxs("form",{onSubmit:h,noValidate:!0,className:"mx-auto max-w-xl space-y-3",children:[r("name","Name",{autoComplete:"name"}),r("email","Email",{type:"email",autoComplete:"email"}),r("message","Message"),a.jsx("button",{type:"submit",className:C,children:"Send"})]})},k=`import { useState } from "react";
import { errorClass, fieldClass, labelClass, primaryButton, secondaryButton } from "./formStyles";

const EMPTY = { name: "", email: "", message: "" };
const EMAIL = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

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
        <button onClick={() => setSentTo("")} className={\`\${secondaryButton} mt-4\`}>
          Send another message
        </button>
      </div>
    );
  }

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={\`contact-\${name}\`} className={labelClass}>
        {label}
      </label>
      {name === "message" ? (
        <textarea id={\`contact-\${name}\`} name={name} rows={4} value={form[name]} onChange={handleChange}
          aria-invalid={!!errors[name]} aria-describedby={\`contact-\${name}-error\`} className={fieldClass(errors[name])} />
      ) : (
        <input id={\`contact-\${name}\`} name={name} value={form[name]} onChange={handleChange}
          aria-invalid={!!errors[name]} aria-describedby={\`contact-\${name}-error\`} className={fieldClass(errors[name])} {...props} />
      )}
      <p id={\`contact-\${name}-error\`} className={errorClass}>
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
`;b(j,[{name:"ContactForm.jsx",code:k},{name:"formStyles.js",code:S}]);
