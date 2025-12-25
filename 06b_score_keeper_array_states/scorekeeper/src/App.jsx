import { useState } from "react";
import "./App.css";
import ScoreKeeper from "./components/ScoreKeeper";
import ScoreCard from "./components/ScoreCard";

function App() {
  return (
    <>
      {/* <ScoreKeeper numberOfPlayers={4} target={10} /> */}
      <ScoreCard playerCount={5} target={5} />
    </>
  );
}

export default App;
