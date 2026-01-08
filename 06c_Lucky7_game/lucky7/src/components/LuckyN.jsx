import Dice from "./Dice";
import { getRolls, sum } from "../utils/utilFunctions.js";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent.jsx";
export default function LuckyN({ numDice = 2, goal = 7 }) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = sum(dice) === goal;
  const roll = () => setDice(getRolls(numDice));
  return (
    <>
      <h1>
        Lucky {goal} {isWinner && "You Win!"}
      </h1>
      <Dice diceRolls={dice} />

      <ButtonComponent clickFunc={roll} />
    </>
  );
}
