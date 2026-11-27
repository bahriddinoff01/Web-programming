import { mountTask } from "../src/page.jsx";
import SkillPicker from "./SkillPicker";
import skillPicker from "./SkillPicker.jsx?raw";

mountTask(SkillPicker, [
  { name: "SkillPicker.jsx", code: skillPicker },
]);
