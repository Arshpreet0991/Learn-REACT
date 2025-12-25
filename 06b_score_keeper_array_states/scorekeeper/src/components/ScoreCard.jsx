import { useState } from "react";

export default function ScoreCard({ playerCount = 3, target = 5 }) {
  const [score, setScore] = useState(new Array(playerCount).fill(0));

  const incrementScore = (idx) => {
    setScore((prevScore) => {
      return prevScore.map((score, i) => {
        if (idx == i) return score + 1;
        return score;
      });
    });
  };

  const reset = () => {
    setScore(new Array(playerCount).fill(0));
  };

  return (
    <>
      <div>
        <ul>
          {score.map((score, idx) => (
            <li key={idx}>
              {" "}
              Player {idx + 1}: {score}{" "}
              <button
                onClick={() => {
                  incrementScore(idx);
                }}
              >
                +1
              </button>
              {score >= target && "WINNER"}
            </li>
          ))}
        </ul>

        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
