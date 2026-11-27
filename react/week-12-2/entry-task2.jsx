import { mountTask } from "../src/page.jsx";
import FetchUser from "./FetchUser";
import fetchUser from "./FetchUser.jsx?raw";

mountTask(FetchUser, [
  { name: "FetchUser.jsx", code: fetchUser },
]);
