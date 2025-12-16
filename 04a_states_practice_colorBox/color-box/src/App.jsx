import { useState } from "react";
import ColorBox from "./components/ColorBox";
import "./App.css";

const colorList = [
  { name: "red-500", hex: "#EF4444" },
  { name: "green-500", hex: "#22C55E" },
  { name: "blue-500", hex: "#3B82F6" },
  { name: "yellow-500", hex: "#EAB308" },
  { name: "purple-500", hex: "#A855F7" },
  { name: "pink-500", hex: "#EC4899" },
  { name: "indigo-500", hex: "#6366F1" },
  { name: "gray-500", hex: "#6B7280" },
  { name: "orange-500", hex: "#F97316" },
  { name: "teal-500", hex: "#14B8A6" },
];

function App() {
  return (
    <>
      <div className="flex">
        <div>
          <ColorBox colorList={colorList} />
          <ColorBox colorList={colorList} />
          <ColorBox colorList={colorList} />
        </div>
        <div>
          <ColorBox colorList={colorList} />
          <ColorBox colorList={colorList} />
          <ColorBox colorList={colorList} />
        </div>
        <div>
          <ColorBox colorList={colorList} />
          <ColorBox colorList={colorList} />
          <ColorBox colorList={colorList} />
        </div>
      </div>
    </>
  );
}

export default App;
