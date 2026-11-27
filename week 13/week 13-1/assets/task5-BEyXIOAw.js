import{j as e,r as h,m as E}from"./page-uD2cG-Gt.js";import{l as y,f as T,e as w,s as x,p as F,a as A}from"./formStyles-gtAPs9JT.js";const R=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function O({name:s,email:r}){const n={};return s.trim().length<2&&(n.name="Name must be at least 2 characters."),R.test(r)||(n.email="Enter a valid email, like name@example.com."),n}function B({username:s,password:r,confirm:n}){const t={};return s.length<3?t.username="Username must be at least 3 characters.":/\s/.test(s)&&(t.username="Username can't contain spaces."),r.length<8&&(t.password="Password must be at least 8 characters."),(n!==r||n==="")&&(t.confirm="Passwords don't match."),t}function I({role:s}){return s?{}:{role:"Choose a role."}}const $=[O,B,I],i=({name:s,label:r,value:n,error:t,touched:m,onChange:p,onBlur:u,...g})=>{const o=m&&t;return e.jsxs("div",{children:[e.jsx("label",{htmlFor:`reg-${s}`,className:y,children:r}),e.jsx("input",{id:`reg-${s}`,name:s,value:n,onChange:p,onBlur:u,"aria-invalid":!!o,"aria-describedby":`reg-${s}-error`,className:T(o),...g}),e.jsx("p",{id:`reg-${s}-error`,className:w,children:o?t:""})]})},c=["Personal info","Account setup","Preferences"],V=["Student","TA","Instructor"],N={name:"",email:"",username:"",password:"",confirm:"",role:"",newsletter:!1},L=()=>{const[s,r]=h.useState(0),[n,t]=h.useState(N),[m,p]=h.useState({}),[u,g]=h.useState(null),o=$[s](n),b=Object.keys(o).length===0,f=a=>{const{name:l,type:S,value:k,checked:C}=a.target;t(P=>({...P,[l]:S==="checkbox"?C:k}))},j=a=>p(l=>({...l,[a.target.name]:!0})),d=a=>({name:a,value:n[a],error:o[a],touched:m[a],onChange:f,onBlur:j}),v=a=>{if(a.preventDefault(),!b)return;if(s<c.length-1){r(s+1);return}const l={...n};delete l.confirm,console.log(l),g(l)};return u?e.jsxs("div",{className:"mx-auto max-w-md space-y-3",role:"status",children:[e.jsx("p",{className:"rounded-lg bg-green-50 px-4 py-3 font-semibold text-green-900 dark:bg-green-950/40 dark:text-green-200",children:"✅ Registered! This object was logged to the console:"}),e.jsx("pre",{className:"overflow-x-auto rounded-lg bg-[#15141c] p-4 text-sm text-gray-100",children:JSON.stringify({...u,password:"••••••••"},null,2)}),e.jsx("button",{onClick:()=>{t(N),p({}),r(0),g(null)},className:x,children:"Start again"})]}):e.jsxs("form",{onSubmit:v,noValidate:!0,className:"mx-auto max-w-md",children:[e.jsxs("p",{className:"text-lg font-bold","aria-live":"polite",children:["Step ",s+1," of ",c.length,": ",e.jsx("span",{className:"font-semibold text-gray-600 dark:text-gray-400",children:c[s]})]}),e.jsx("div",{className:"mt-3 mb-5 grid grid-cols-3 gap-1.5","aria-hidden":"true",children:c.map((a,l)=>e.jsx("span",{className:`h-2 rounded-full ${l<=s?"bg-indigo-600 dark:bg-indigo-400":"bg-gray-200 dark:bg-gray-800"}`},a))}),e.jsxs("div",{className:"space-y-3",children:[s===0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Name",autoComplete:"name",...d("name")}),e.jsx(i,{label:"Email",type:"email",autoComplete:"email",...d("email")})]}),s===1&&e.jsxs(e.Fragment,{children:[e.jsx(i,{label:"Username",autoComplete:"username",...d("username")}),e.jsx(i,{label:"Password",type:"password",autoComplete:"new-password",...d("password")}),e.jsx(i,{label:"Confirm password",type:"password",autoComplete:"new-password",...d("confirm")})]}),s===2&&e.jsxs(e.Fragment,{children:[e.jsxs("fieldset",{children:[e.jsx("legend",{className:y,children:"Role"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:V.map(a=>e.jsxs("label",{className:`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 ${n.role===a?"border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40":"border-gray-300 dark:border-gray-700"}`,children:[e.jsx("input",{type:"radio",name:"role",value:a,checked:n.role===a,onChange:f,className:"accent-indigo-600"}),a]},a))}),m.role&&e.jsx("p",{className:w,children:o.role})]}),e.jsxs("label",{className:"flex cursor-pointer items-center gap-2",children:[e.jsx("input",{type:"checkbox",name:"newsletter",checked:n.newsletter,onChange:f,className:"h-4 w-4 accent-indigo-600"}),"Subscribe to the newsletter"]}),e.jsxs("dl",{className:"grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 rounded-lg bg-gray-100 p-4 text-sm dark:bg-gray-800",children:[e.jsx("dt",{className:"font-semibold",children:"Name"}),e.jsx("dd",{className:"break-all",children:n.name}),e.jsx("dt",{className:"font-semibold",children:"Email"}),e.jsx("dd",{className:"break-all",children:n.email}),e.jsx("dt",{className:"font-semibold",children:"Username"}),e.jsx("dd",{className:"break-all",children:n.username}),e.jsx("dt",{className:"font-semibold",children:"Password"}),e.jsx("dd",{children:"•".repeat(n.password.length)}),e.jsx("dt",{className:"font-semibold",children:"Role"}),e.jsx("dd",{children:n.role||"—"}),e.jsx("dt",{className:"font-semibold",children:"Newsletter"}),e.jsx("dd",{children:n.newsletter?"Yes":"No"})]})]})]}),e.jsxs("div",{className:"mt-5 grid grid-cols-2 gap-2",children:[e.jsx("button",{type:"button",onClick:()=>r(s-1),disabled:s===0,className:x,children:"Previous"}),e.jsx("button",{type:"submit",disabled:!b,className:F,children:s===c.length-1?"Submit":"Next"})]}),!b&&e.jsx("p",{className:"mt-2 text-center text-sm text-gray-600 dark:text-gray-400",children:"Next stays disabled until this step is valid."})]})},U=`import { useState } from "react";
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
          <span key={label} className={\`h-2 rounded-full \${i <= step ? "bg-indigo-600 dark:bg-indigo-400" : "bg-gray-200 dark:bg-gray-800"}\`} />
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
                  <label key={role} className={\`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 \${
                    form.role === role ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40" : "border-gray-300 dark:border-gray-700"
                  }\`}>
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
`,M=`// The rules for each step. Each function returns an object of error messages;
// an empty object means the step is valid and "Next" can be enabled.
const EMAIL = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

export function validatePersonal({ name, email }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
  if (!EMAIL.test(email)) errors.email = "Enter a valid email, like name@example.com.";
  return errors;
}

export function validateAccount({ username, password, confirm }) {
  const errors = {};
  if (username.length < 3) errors.username = "Username must be at least 3 characters.";
  else if (/\\s/.test(username)) errors.username = "Username can't contain spaces.";
  if (password.length < 8) errors.password = "Password must be at least 8 characters.";
  if (confirm !== password || confirm === "") errors.confirm = "Passwords don't match.";
  return errors;
}

export function validatePreferences({ role }) {
  return role ? {} : { role: "Choose a role." };
}

export const STEP_VALIDATORS = [validatePersonal, validateAccount, validatePreferences];
`,z=`import { errorClass, fieldClass, labelClass } from "../formStyles";

// One labelled input. The error only shows once the user has left the field (touched),
// so they aren't told off before they've finished typing.
const Field = ({ name, label, value, error, touched, onChange, onBlur, ...props }) => {
  const showError = touched && error;
  return (
    <div>
      <label htmlFor={\`reg-\${name}\`} className={labelClass}>
        {label}
      </label>
      <input
        id={\`reg-\${name}\`}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!showError}
        aria-describedby={\`reg-\${name}-error\`}
        className={fieldClass(showError)}
        {...props}
      />
      <p id={\`reg-\${name}-error\`} className={errorClass}>
        {showError ? error : ""}
      </p>
    </div>
  );
};

export default Field;
`;E(L,[{name:"RegistrationWizard.jsx",code:U},{name:"validate.js",code:M},{name:"Field.jsx",code:z},{name:"formStyles.js",code:A}]);
