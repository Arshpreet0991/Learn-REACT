import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
  const [emoji, setEmoji] = useState([{ id: uuid(), emoji: "😂" }]);

  const addEmoji = () => {
    setEmoji((prevEmoji) => [...prevEmoji, { id: uuid(), emoji: "😭" }]);
  };

  const deleteEmoji = (id) => {
    setEmoji((prevEmoji) => {
      return prevEmoji.filter((element) => element.id != id);
    });
  };

  return (
    <>
      {emoji.map((e) => (
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: 50 }}
        >
          {e.emoji}
        </span>
      ))}
      <div>
        <button onClick={addEmoji}> Add Emoji</button>
      </div>
    </>
  );
}
