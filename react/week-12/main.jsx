// Dev page for Week 12-1: run npm run dev, then open /week-12/ to try your tasks.
// Add your next tasks here when they're ready.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/tailwind.css";
import Task1 from "./Task1";
import Task2 from "./Task2";
import ScoreBoard from "./ScoreBoard";
import HistoryArray from "./HistoryArray";
// import Task2 from "./Task2";
// import Task3 from "./Task3";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Task1 />
    <Task2 />
    <ScoreBoard />
    <HistoryArray />
  </StrictMode>,
);
