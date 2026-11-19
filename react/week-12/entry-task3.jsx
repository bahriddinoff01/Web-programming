import { mountTask } from "./page.jsx";
import ScoreBoard from "./ScoreBoard";
import scoreBoard from "./ScoreBoard.jsx?raw";
import playerScore from "./PlayerScore.jsx?raw";

mountTask(ScoreBoard, [
  { name: "ScoreBoard.jsx", code: scoreBoard },
  { name: "PlayerScore.jsx", code: playerScore },
]);
