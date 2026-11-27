import{r as d,j as e,m as I}from"./page-uD2cG-Gt.js";import{l as m,f,h as y,e as p,p as P,a as E}from"./formStyles-gtAPs9JT.js";const N={ce:"Computer Engineering",sw:"Software",ai:"Artificial Intelligence",ee:"Electrical Engineering",ds:"Data Science"},L=({skills:r,onChange:i})=>{const[o,c]=d.useState(""),l=t=>{if(t.key!=="Enter")return;t.preventDefault();const n=o.trim().toLowerCase();n&&!r.includes(n)&&i([...r,n]),c("")};return e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pe-skill",className:m,children:"Skills (optional)"}),e.jsx("ul",{className:"mb-2 flex flex-wrap gap-1.5","aria-label":"Added skills",children:r.map(t=>e.jsxs("li",{className:"flex items-center gap-1 rounded-full bg-indigo-50 py-0.5 pl-3 pr-1 text-sm font-semibold text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200",children:[t,e.jsx("button",{type:"button",onClick:()=>i(r.filter(n=>n!==t)),"aria-label":`Remove ${t}`,className:"grid h-5 w-5 place-items-center rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-900",children:"×"})]},t))}),e.jsx("input",{id:"pe-skill",value:o,onChange:t=>c(t.target.value),onKeyDown:l,placeholder:"e.g. react, then press Enter","aria-describedby":"pe-skill-hint",className:f(!1)}),e.jsx("p",{id:"pe-skill-hint",className:y,children:"Press Enter to add a skill."})]})},T=({profile:r,photoUrl:i,bioLimit:o})=>{const c=r.name.trim().split(/\s+/).map(l=>l[0]).join("").slice(0,2).toUpperCase();return e.jsxs("article",{className:"rounded-2xl bg-[#13233f] p-5 text-white shadow-lg",children:[e.jsx("p",{className:"mb-3 text-xs font-bold uppercase tracking-[0.1em] text-indigo-200",children:"Profile preview"}),e.jsxs("div",{className:"rounded-xl bg-white p-5 text-gray-900",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[i?e.jsx("img",{src:i,alt:"",className:"h-16 w-16 shrink-0 rounded-full object-cover"}):e.jsx("span",{className:"grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#2b5a8a] text-xl font-bold text-white","aria-hidden":"true",children:c}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h3",{className:"break-words text-xl font-bold",children:r.name}),e.jsxs("p",{className:"text-sm text-gray-600",children:["ID ",r.studentId," · Year ",r.year]}),e.jsx("p",{className:"font-semibold text-teal-700",children:N[r.major]})]})]}),e.jsx("p",{className:"mt-4 whitespace-pre-line break-words text-gray-700",children:r.bio}),e.jsxs("p",{className:"mt-1 text-xs text-gray-500",children:["bio: ",r.bio.length," / ",o]}),r.skills.length>0&&e.jsx("ul",{className:"mt-4 flex flex-wrap gap-1.5","aria-label":"Skills",children:r.skills.map(l=>e.jsxs("li",{className:"font-mono text-sm font-semibold text-green-700",children:["[",l,"]"]},l))})]})]})},u=200,U={name:"",studentId:"",major:"",year:"",bio:"",skills:[]},D=()=>{const[r,i]=d.useState(U),[o,c]=d.useState(null),[l,t]=d.useState(""),[n,g]=d.useState({}),[v,j]=d.useState(null);d.useEffect(()=>{if(!o){t("");return}const a=URL.createObjectURL(o);return t(a),()=>URL.revokeObjectURL(a)},[o]);const h=a=>{const{name:s,value:b}=a.target;i(x=>({...x,[s]:b})),g(x=>({...x,[s]:""}))},k=a=>{const s=a.target.files[0];if(s&&!s.type.startsWith("image/")){g(b=>({...b,photo:"Please choose an image file."}));return}g(b=>({...b,photo:""})),c(s||null)},C=()=>{const a={};return r.name.trim()||(a.name="Name is required."),/^\d{10}$/.test(r.studentId)||(a.studentId="The student ID must be exactly 10 digits."),r.major||(a.major="Choose your major."),r.year||(a.year="Choose your year."),r.bio.trim()?r.bio.length>=u&&(a.bio=`The bio must be under ${u} characters.`):a.bio="Write a short bio.",a},w=a=>{a.preventDefault();const s=C();if(g(s),Object.keys(s).length>0){j(null);return}j({...r,name:r.name.trim()})},S=u-r.bio.length;return e.jsxs("div",{className:"grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]",children:[e.jsxs("form",{onSubmit:w,noValidate:!0,className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pe-name",className:m,children:"Name"}),e.jsx("input",{id:"pe-name",name:"name",value:r.name,onChange:h,autoComplete:"name","aria-invalid":!!n.name,"aria-describedby":"pe-name-error",className:f(n.name)}),e.jsx("p",{id:"pe-name-error",className:p,children:n.name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pe-id",className:m,children:"Student ID"}),e.jsx("input",{id:"pe-id",name:"studentId",inputMode:"numeric",maxLength:10,placeholder:"10 digits",value:r.studentId,onChange:a=>h({target:{name:"studentId",value:a.target.value.replace(/\D/g,"")}}),"aria-invalid":!!n.studentId,"aria-describedby":"pe-id-error",className:f(n.studentId)}),e.jsx("p",{id:"pe-id-error",className:p,children:n.studentId})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pe-major",className:m,children:"Major"}),e.jsxs("select",{id:"pe-major",name:"major",value:r.major,onChange:h,"aria-invalid":!!n.major,"aria-describedby":"pe-major-error",className:f(n.major),children:[e.jsx("option",{value:"",children:"Choose a major…"}),Object.entries(N).map(([a,s])=>e.jsx("option",{value:a,children:s},a))]}),e.jsx("p",{id:"pe-major-error",className:p,children:n.major})]}),e.jsxs("fieldset",{"aria-describedby":"pe-year-error",children:[e.jsx("legend",{className:m,children:"Year"}),e.jsx("div",{className:"grid grid-cols-4 gap-2",children:["1","2","3","4"].map(a=>e.jsxs("label",{className:`flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 py-2 ${r.year===a?"border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40":"border-gray-300 dark:border-gray-700"}`,children:[e.jsx("input",{type:"radio",name:"year",value:a,checked:r.year===a,onChange:h,className:"accent-indigo-600"}),a]},a))}),e.jsx("p",{id:"pe-year-error",className:p,children:n.year})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pe-bio",className:m,children:"Bio"}),e.jsx("textarea",{id:"pe-bio",name:"bio",rows:4,value:r.bio,onChange:h,"aria-invalid":!!n.bio,"aria-describedby":"pe-bio-count pe-bio-error",className:f(n.bio)}),e.jsxs("p",{id:"pe-bio-count","aria-live":"polite",className:`mt-1 text-sm tabular-nums ${S<=0?"font-semibold text-red-600 dark:text-red-400":"text-gray-600 dark:text-gray-400"}`,children:[r.bio.length," / ",u]}),e.jsx("p",{id:"pe-bio-error",className:p,children:n.bio})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pe-photo",className:m,children:"Photo (optional)"}),e.jsxs("div",{className:"flex items-center gap-3",children:[l&&e.jsx("img",{src:l,alt:"Chosen photo preview",className:"h-14 w-14 rounded-full object-cover"}),e.jsx("input",{id:"pe-photo",type:"file",accept:"image/*",onChange:k,"aria-describedby":"pe-photo-error",className:"block w-full text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-3 file:py-2 file:font-semibold file:text-indigo-800 hover:file:bg-indigo-100 dark:file:bg-indigo-950/40 dark:file:text-indigo-200"})]}),e.jsx("p",{id:"pe-photo-error",className:p,children:n.photo}),!l&&e.jsx("p",{className:y,children:"Without a photo, the card shows your initials."})]}),e.jsx(L,{skills:r.skills,onChange:a=>i(s=>({...s,skills:a}))}),e.jsx("button",{type:"submit",className:P,children:"Save profile"})]}),e.jsx("div",{"aria-live":"polite",children:v?e.jsx(T,{profile:v,photoUrl:l,bioLimit:u}):e.jsx("div",{className:"grid h-full min-h-48 place-items-center rounded-2xl border-2 border-dashed border-gray-300 p-6 text-center text-gray-600 dark:border-gray-700 dark:text-gray-400",children:"Fill in the form and press Save to see your profile card here."})})]})},O=`import { useEffect, useState } from "react";
import { MAJORS } from "./majors";
import SkillTags from "./SkillTags";
import ProfilePreview from "./ProfilePreview";
import { errorClass, fieldClass, hintClass, labelClass, primaryButton } from "../formStyles";

const BIO_LIMIT = 200;
const EMPTY = { name: "", studentId: "", major: "", year: "", bio: "", skills: [] };

// Homework: a student profile editor.
// All the text fields are in one state object; the photo is kept separately
// because it is a File, not a string.
const ProfileEditor = () => {
  const [form, setForm] = useState(EMPTY);
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(null); // the profile shown in the preview card

  // Turn the chosen file into a temporary URL for the <img>.
  // The cleanup frees the old URL when the photo changes or the component goes away.
  useEffect(() => {
    if (!photo) {
      setPhotoUrl("");
      return;
    }
    const url = URL.createObjectURL(photo);
    setPhotoUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [photo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, photo: "Please choose an image file." }));
      return;
    }
    setErrors((prev) => ({ ...prev, photo: "" }));
    setPhoto(file || null);
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!/^\\d{10}$/.test(form.studentId)) errs.studentId = "The student ID must be exactly 10 digits.";
    if (!form.major) errs.major = "Choose your major.";
    if (!form.year) errs.year = "Choose your year.";
    if (!form.bio.trim()) errs.bio = "Write a short bio.";
    else if (form.bio.length >= BIO_LIMIT) errs.bio = \`The bio must be under \${BIO_LIMIT} characters.\`;
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setSaved(null);
      return;
    }
    setSaved({ ...form, name: form.name.trim() });
  };

  const bioLeft = BIO_LIMIT - form.bio.length;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="pe-name" className={labelClass}>Name</label>
            <input id="pe-name" name="name" value={form.name} onChange={handleChange} autoComplete="name"
              aria-invalid={!!errors.name} aria-describedby="pe-name-error" className={fieldClass(errors.name)} />
            <p id="pe-name-error" className={errorClass}>{errors.name}</p>
          </div>
          <div>
            <label htmlFor="pe-id" className={labelClass}>Student ID</label>
            <input id="pe-id" name="studentId" inputMode="numeric" maxLength={10} placeholder="10 digits"
              value={form.studentId}
              onChange={(e) => handleChange({ target: { name: "studentId", value: e.target.value.replace(/\\D/g, "") } })}
              aria-invalid={!!errors.studentId} aria-describedby="pe-id-error" className={fieldClass(errors.studentId)} />
            <p id="pe-id-error" className={errorClass}>{errors.studentId}</p>
          </div>
        </div>

        <div>
          <label htmlFor="pe-major" className={labelClass}>Major</label>
          <select id="pe-major" name="major" value={form.major} onChange={handleChange}
            aria-invalid={!!errors.major} aria-describedby="pe-major-error" className={fieldClass(errors.major)}>
            <option value="">Choose a major…</option>
            {Object.entries(MAJORS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <p id="pe-major-error" className={errorClass}>{errors.major}</p>
        </div>

        <fieldset aria-describedby="pe-year-error">
          <legend className={labelClass}>Year</legend>
          <div className="grid grid-cols-4 gap-2">
            {["1", "2", "3", "4"].map((y) => (
              <label key={y} className={\`flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 py-2 \${
                form.year === y ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40" : "border-gray-300 dark:border-gray-700"
              }\`}>
                <input type="radio" name="year" value={y} checked={form.year === y} onChange={handleChange} className="accent-indigo-600" />
                {y}
              </label>
            ))}
          </div>
          <p id="pe-year-error" className={errorClass}>{errors.year}</p>
        </fieldset>

        <div>
          <label htmlFor="pe-bio" className={labelClass}>Bio</label>
          <textarea id="pe-bio" name="bio" rows={4} value={form.bio} onChange={handleChange}
            aria-invalid={!!errors.bio} aria-describedby="pe-bio-count pe-bio-error" className={fieldClass(errors.bio)} />
          {/* Live bio counter */}
          <p id="pe-bio-count" aria-live="polite"
            className={\`mt-1 text-sm tabular-nums \${bioLeft <= 0 ? "font-semibold text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400"}\`}>
            {form.bio.length} / {BIO_LIMIT}
          </p>
          <p id="pe-bio-error" className={errorClass}>{errors.bio}</p>
        </div>

        <div>
          <label htmlFor="pe-photo" className={labelClass}>Photo (optional)</label>
          <div className="flex items-center gap-3">
            {photoUrl && <img src={photoUrl} alt="Chosen photo preview" className="h-14 w-14 rounded-full object-cover" />}
            <input id="pe-photo" type="file" accept="image/*" onChange={handlePhoto} aria-describedby="pe-photo-error"
              className="block w-full text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-3 file:py-2 file:font-semibold file:text-indigo-800 hover:file:bg-indigo-100 dark:file:bg-indigo-950/40 dark:file:text-indigo-200" />
          </div>
          <p id="pe-photo-error" className={errorClass}>{errors.photo}</p>
          {!photoUrl && <p className={hintClass}>Without a photo, the card shows your initials.</p>}
        </div>

        <SkillTags skills={form.skills} onChange={(skills) => setForm((prev) => ({ ...prev, skills }))} />

        <button type="submit" className={primaryButton}>Save profile</button>
      </form>

      <div aria-live="polite">
        {saved ? (
          <ProfilePreview profile={saved} photoUrl={photoUrl} bioLimit={BIO_LIMIT} />
        ) : (
          <div className="grid h-full min-h-48 place-items-center rounded-2xl border-2 border-dashed border-gray-300 p-6 text-center text-gray-600 dark:border-gray-700 dark:text-gray-400">
            Fill in the form and press Save to see your profile card here.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileEditor;
`,M=`import { useState } from "react";
import { fieldClass, hintClass, labelClass } from "../formStyles";

// Stretch goal: skills as tags. Type a skill and press Enter to add it, × to remove it.
// The parent owns the list; this component only keeps the text being typed.
const SkillTags = ({ skills, onChange }) => {
  const [draft, setDraft] = useState("");

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault(); // Enter would otherwise submit the whole form
    const skill = draft.trim().toLowerCase();
    if (skill && !skills.includes(skill)) onChange([...skills, skill]);
    setDraft("");
  };

  return (
    <div>
      <label htmlFor="pe-skill" className={labelClass}>
        Skills (optional)
      </label>
      <ul className="mb-2 flex flex-wrap gap-1.5" aria-label="Added skills">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-1 rounded-full bg-indigo-50 py-0.5 pl-3 pr-1 text-sm font-semibold text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200">
            {skill}
            <button
              type="button"
              onClick={() => onChange(skills.filter((s) => s !== skill))}
              aria-label={\`Remove \${skill}\`}
              className="grid h-5 w-5 place-items-center rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-900"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      <input
        id="pe-skill"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="e.g. react, then press Enter"
        aria-describedby="pe-skill-hint"
        className={fieldClass(false)}
      />
      <p id="pe-skill-hint" className={hintClass}>
        Press Enter to add a skill.
      </p>
    </div>
  );
};

export default SkillTags;
`,F=`import { MAJORS } from "./majors";

// The "Profile Preview" card shown after a successful submit. It only reads props.
const ProfilePreview = ({ profile, photoUrl, bioLimit }) => {
  const initials = profile.name
    .trim()
    .split(/\\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="rounded-2xl bg-[#13233f] p-5 text-white shadow-lg">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-indigo-200">Profile preview</p>
      <div className="rounded-xl bg-white p-5 text-gray-900">
        <div className="flex items-center gap-4">
          {photoUrl ? (
            <img src={photoUrl} alt="" className="h-16 w-16 shrink-0 rounded-full object-cover" />
          ) : (
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#2b5a8a] text-xl font-bold text-white" aria-hidden="true">
              {initials}
            </span>
          )}
          <div className="min-w-0">
            <h3 className="break-words text-xl font-bold">{profile.name}</h3>
            <p className="text-sm text-gray-600">
              ID {profile.studentId} · Year {profile.year}
            </p>
            <p className="font-semibold text-teal-700">{MAJORS[profile.major]}</p>
          </div>
        </div>
        <p className="mt-4 whitespace-pre-line break-words text-gray-700">{profile.bio}</p>
        <p className="mt-1 text-xs text-gray-500">
          bio: {profile.bio.length} / {bioLimit}
        </p>
        {profile.skills.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills">
            {profile.skills.map((skill) => (
              <li key={skill} className="font-mono text-sm font-semibold text-green-700">
                [{skill}]
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default ProfilePreview;
`,R=`// The options for the major dropdown: value -> label
export const MAJORS = {
  ce: "Computer Engineering",
  sw: "Software",
  ai: "Artificial Intelligence",
  ee: "Electrical Engineering",
  ds: "Data Science",
};
`;I(D,[{name:"ProfileEditor.jsx",code:O},{name:"SkillTags.jsx",code:M},{name:"ProfilePreview.jsx",code:F},{name:"majors.js",code:R},{name:"formStyles.js",code:E}]);
