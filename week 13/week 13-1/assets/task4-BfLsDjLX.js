import{r as c,j as e,m as y}from"./page-uD2cG-Gt.js";import{s as j,l,f as m,e as u,h as x,p as S,a as T}from"./formStyles-gtAPs9JT.js";const I=[5,4,3],F=["HTML","CSS","JavaScript","Git","React"],f=300,N={name:"",studentId:"",rating:"",topics:[],comments:""},M=()=>{const[a,o]=c.useState(N),[t,p]=c.useState({}),[g,b]=c.useState(""),d=n=>{const{name:s,value:r}=n.target;o(i=>({...i,[s]:r})),p(i=>({...i,[s]:""}))},v=(n,s)=>{o(r=>({...r,topics:s?[...r.topics,n]:r.topics.filter(i=>i!==n)}))},C=()=>{const n={};return a.name.trim()||(n.name="Your name is required."),/^\d{8}$/.test(a.studentId)||(n.studentId="The student ID must be exactly 8 digits."),a.rating||(n.rating="Please choose a rating."),n},k=n=>{n.preventDefault();const s=C();if(Object.keys(s).length>0)return p(s);b(a.name.trim())},h=!a.name.trim()||!a.studentId||!a.rating;return g?e.jsxs("div",{className:"mx-auto max-w-xl rounded-xl bg-green-50 p-6 text-center dark:bg-green-950/40",role:"status",children:[e.jsx("p",{className:"text-4xl","aria-hidden":"true",children:"🎉"}),e.jsxs("p",{className:"mt-2 text-lg font-semibold text-green-900 dark:text-green-200",children:["Thank you, ",g,"!"]}),e.jsxs("p",{className:"text-green-800 dark:text-green-300",children:["You rated the course ","★".repeat(Number(a.rating)),a.topics.length>0&&` and liked ${a.topics.join(", ")}`,"."]}),e.jsx("button",{onClick:()=>{o(N),b("")},className:`${j} mt-4`,children:"Fill it in again"})]}):e.jsxs("form",{onSubmit:k,noValidate:!0,className:"mx-auto max-w-xl space-y-4",children:[e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"fb-name",className:l,children:["Student name ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{id:"fb-name",name:"name",value:a.name,onChange:d,autoComplete:"name","aria-invalid":!!t.name,"aria-describedby":"fb-name-error",className:m(t.name)}),e.jsx("p",{id:"fb-name-error",className:u,children:t.name})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"fb-id",className:l,children:["Student ID ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("input",{id:"fb-id",name:"studentId",inputMode:"numeric",maxLength:8,placeholder:"8 digits",value:a.studentId,onChange:n=>d({target:{name:"studentId",value:n.target.value.replace(/\D/g,"")}}),"aria-invalid":!!t.studentId,"aria-describedby":"fb-id-error",className:m(t.studentId)}),e.jsx("p",{id:"fb-id-error",className:u,children:t.studentId})]})]}),e.jsxs("fieldset",{"aria-describedby":"fb-rating-error",children:[e.jsxs("legend",{className:l,children:["Rating ",e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:I.map(n=>e.jsxs("label",{className:`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 ${a.rating===String(n)?"border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40":"border-gray-300 dark:border-gray-700"}`,children:[e.jsx("input",{type:"radio",name:"rating",value:n,checked:a.rating===String(n),onChange:d,className:"accent-indigo-600"}),e.jsx("span",{className:"text-amber-500","aria-hidden":"true",children:"★".repeat(n)}),e.jsxs("span",{className:"sr-only",children:[n," stars"]})]},n))}),e.jsx("p",{id:"fb-rating-error",className:u,children:t.rating})]}),e.jsxs("fieldset",{children:[e.jsx("legend",{className:l,children:"Topics covered well (optional)"}),e.jsx("div",{className:"flex flex-wrap gap-x-4 gap-y-2",children:F.map(n=>e.jsxs("label",{className:"flex cursor-pointer items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:a.topics.includes(n),onChange:s=>v(n,s.target.checked),className:"h-4 w-4 accent-indigo-600"}),n]},n))})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"fb-comments",className:l,children:"Comments (optional)"}),e.jsx("textarea",{id:"fb-comments",name:"comments",rows:4,maxLength:f,value:a.comments,onChange:d,"aria-describedby":"fb-comments-count",className:m(!1)}),e.jsxs("p",{id:"fb-comments-count",className:x,"aria-live":"polite",children:[a.comments.length," / ",f," characters"]})]}),e.jsx("button",{type:"submit",disabled:h,className:S,children:"Submit feedback"}),h&&e.jsx("p",{className:x,children:"Fill in the fields marked * to submit."})]})},w=`import { useState } from "react";
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
    if (!/^\\d{8}$/.test(form.studentId)) errs.studentId = "The student ID must be exactly 8 digits.";
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
          {form.topics.length > 0 && \` and liked \${form.topics.join(", ")}\`}.
        </p>
        <button
          onClick={() => {
            setForm(EMPTY);
            setThanked("");
          }}
          className={\`\${secondaryButton} mt-4\`}
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
            onChange={(e) => handleChange({ target: { name: "studentId", value: e.target.value.replace(/\\D/g, "") } })}
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
              className={\`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 \${
                form.rating === String(stars) ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40" : "border-gray-300 dark:border-gray-700"
              }\`}
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
`;y(M,[{name:"CourseFeedback.jsx",code:w},{name:"formStyles.js",code:T}]);
