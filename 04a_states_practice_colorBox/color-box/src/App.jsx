import { useState } from "react";
import ColorBox from "./components/ColorBox";
import BoxRange from "./components/BoxRange";
import "./App.css";
import CreateBoxes from "./components/CreateBoxes";

function App() {
  const colorList = [
    "#EF4444",
    "#22C55E",
    "#3B82F6",
    "#EAB308",
    "#A855F7",
    "#EC4899",
    "#6366F1",
    "#6B7280",
    "#F97316",
    "#14B8A6",
  ];

  const [range, setRange] = useState(3);

  return (
    <>
      <div>
        <BoxRange range={range} setRange={setRange} />
      </div>
      <div className="flex flex-wrap">
        <CreateBoxes range={range} />
      </div>
    </>
  );
}

export default App;
