import { useState } from "react";

export default function BoxRange({ range, setRange }) {
  return (
    <>
      <p>{range}</p>
      <input
        type="range"
        value={range}
        onChange={(e) => Number(setRange(e.target.value))}
        min={3}
        max={24}
        step={3}
      />
    </>
  );
}
