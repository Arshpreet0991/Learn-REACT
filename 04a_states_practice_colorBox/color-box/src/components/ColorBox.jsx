import { useState } from "react";

// a function which takes in an array and return a random element
const randomChoice = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export default function ColorBox({ colorList }) {
  const [color, setColor] = useState(randomChoice(colorList));
  const colorChanger = () => {
    setColor(randomChoice(colorList));
  };

  return (
    <>
      <div>
        <button
          onClick={colorChanger}
          className="h-12 w-12"
          style={{ background: color }}
        ></button>
      </div>
    </>
  );
}
