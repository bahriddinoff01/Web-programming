import { MAJORS } from "./majors";

// The "Profile Preview" card shown after a successful submit. It only reads props.
const ProfilePreview = ({ profile, photoUrl, bioLimit }) => {
  const initials = profile.name
    .trim()
    .split(/\s+/)
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
