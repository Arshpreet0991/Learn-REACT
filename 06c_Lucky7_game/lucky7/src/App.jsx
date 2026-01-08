import { useState } from "react";
import LuckyN from "./components/LuckyN";
import Dice from "./components/Dice";
import "./App.css";

function App() {
  return (
    <>
      <LuckyN />
      <LuckyN numDice={3} goal={11} />
    </>
  );
}

export default App;
