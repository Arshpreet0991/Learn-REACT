import { useState } from "react";

export default function ColorBox({ colorList }) {
  const colorChanger = () => {
    const randomIndex = Math.floor(Math.random() * colorList.length);
    const randomColor = colorList[randomIndex].hex;
    console.log(randomColor);

    setColor(randomColor);
  };

  const [color, setColor] = useState("#EF4444");

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
