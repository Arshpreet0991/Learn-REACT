import { useState } from "react";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);

  const toggleEmoji = () => {
    setIsHappy(!isHappy);
  };

  return (
    <>
      <h1 onClick={toggleEmoji}> {isHappy ? "🙂" : "🙁"}</h1>
    </>
  );
}
