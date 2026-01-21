import { useState } from "react";
export default function Test() {
  const [text, setText] = useState("");

  // const handleChange = (e) => {
  //   setText(e);
  // };
  return (
    <>
      <input
        className="bg-white text-black"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}
