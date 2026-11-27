import { useEffect, useState } from "react";
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
    if (!/^\d{10}$/.test(form.studentId)) errs.studentId = "The student ID must be exactly 10 digits.";
    if (!form.major) errs.major = "Choose your major.";
    if (!form.year) errs.year = "Choose your year.";
    if (!form.bio.trim()) errs.bio = "Write a short bio.";
    else if (form.bio.length >= BIO_LIMIT) errs.bio = `The bio must be under ${BIO_LIMIT} characters.`;
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
              onChange={(e) => handleChange({ target: { name: "studentId", value: e.target.value.replace(/\D/g, "") } })}
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
              <label key={y} className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-3 py-2 ${
                form.year === y ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40" : "border-gray-300 dark:border-gray-700"
              }`}>
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
            className={`mt-1 text-sm tabular-nums ${bioLeft <= 0 ? "font-semibold text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400"}`}>
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
