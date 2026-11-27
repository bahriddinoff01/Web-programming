import { mountTask } from "../src/page.jsx";
import HistoryArray from "./HistoryArray";
import historyArray from "./HistoryArray.jsx?raw";

mountTask(HistoryArray, [{ name: "HistoryArray.jsx", code: historyArray }]);
