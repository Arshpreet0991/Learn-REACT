import { useState } from "react";
export default function Box({ isActive, toggleBox }) {
  console.log(isActive);

  return (
    <>
      <div
        onClick={toggleBox}
        className="w-24 h-21 m-2"
        style={{ background: isActive ? "red" : "black" }}
      ></div>
    </>
  );
}
