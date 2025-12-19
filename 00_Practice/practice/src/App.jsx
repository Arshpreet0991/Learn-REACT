import { useState } from "react";
import DisplayScore from "./components/DisplayScore";
import "./App.css";

function App() {
  const [score, setScore] = useState({
    t1Score: 0,
    t2Score: 0,
  });

  const updateScore = (teamNum) => {
    setScore((oldScore) => {
      return {
        ...oldScore,
        [teamNum]: oldScore[teamNum] + 1,
      };
    });
  };

  return (
    <>
      <h1 className="font-bold">Score Card</h1>
      <div className="flex">
        <DisplayScore
          teamName={"Blue Dragons"}
          score={score.t1Score}
          updateScore={updateScore}
          teamNum={"t1Score"}
        />
        <DisplayScore
          teamName={"Red Jaguars"}
          score={score.t2Score}
          updateScore={updateScore}
          teamNum={"t2Score"}
        />
      </div>
    </>
  );
}

export default App;
