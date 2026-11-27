import { mountTask } from "../src/page.jsx";
import ProfileEditor from "./profile/ProfileEditor";
import profileEditor from "./profile/ProfileEditor.jsx?raw";
import skillTags from "./profile/SkillTags.jsx?raw";
import profilePreview from "./profile/ProfilePreview.jsx?raw";
import majors from "./profile/majors.js?raw";
import formStyles from "./formStyles.js?raw";

mountTask(ProfileEditor, [
  { name: "ProfileEditor.jsx", code: profileEditor },
  { name: "SkillTags.jsx", code: skillTags },
  { name: "ProfilePreview.jsx", code: profilePreview },
  { name: "majors.js", code: majors },
  { name: "formStyles.js", code: formStyles },
]);
