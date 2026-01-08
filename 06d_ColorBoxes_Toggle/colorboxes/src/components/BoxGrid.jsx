import Box from "./Box";
import { useState } from "react";
export default function BoxGrid() {
  const [boxes, setBoxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleBox = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        if (i === idx) {
          return !value;
        } else {
          return value;
        }
      });
    });
  };

  const reset = () =>
    setBoxes([false, false, false, false, false, false, false, false, false]);

  return (
    <>
      {boxes.map((value, idx) => (
        <Box
          key={idx}
          isActive={value}
          toggleBox={() => {
            toggleBox(idx);
          }}
        />
      ))}

      <button onClick={reset} className="m-2">
        Reset
      </button>
    </>
  );
}
