import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState({
    p1Score: 0,
    p2Score: 0,
  });

  // copy the object using spread operator, and then update the values in the new object, because we need to create a copy of object when object is passed as a state. Because react cant differntiate between object data. It checks the memory, and the object in the memory is same, therefore state doesnt change and re-render doesnt happen. For the state to change, we need to pass an entirely new object which then react will treat as a change in state and then update the UI.
  const addScore = () => {
    setScore((oldScore) => {
      return { ...oldScore, p1Score: oldScore.p1Score + 1 };
    });
  };

  return (
    <>
      <h1>Score Board</h1>
      <div>
        <h2>Player 1 Score: {score.p1Score}</h2>
        <h2>Player 2 Score: {score.p2Score}</h2>
      </div>

      <div style={{ display: "flex", gap: 25 }}>
        <button onClick={addScore}>+1 to Player 1</button>
        <button>+1 to Player 2</button>
      </div>
    </>
  );
}

export default App;
