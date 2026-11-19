import { useState } from "react";
import PlayerScore from "./PlayerScore";

const ScoreBoard = () => {
  const [firstScore, setFirstScore] = useState(0);
  const [secondScore, setSecondScore] = useState(0);
  return (
    <div className="space-y-3">
      <h3 className="rounded-lg bg-indigo-50 px-4 py-3 text-lg font-semibold text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-200">
        total score is {firstScore + secondScore}
      </h3>
      <PlayerScore
        name="Player 1"
        score={firstScore}
        onIncrement={() => setFirstScore((p) => p + 1)}
        onDecrement={() => setFirstScore((p) => p - 1)}
      />
      <PlayerScore
        name="Player 2"
        score={secondScore}
        onIncrement={() => setSecondScore((p) => p + 1)}
        onDecrement={() => setSecondScore((p) => p - 1)}
      />
    </div>
  );
};

export default ScoreBoard;
