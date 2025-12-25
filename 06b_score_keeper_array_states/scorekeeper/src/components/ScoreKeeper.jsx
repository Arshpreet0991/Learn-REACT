import { useState } from "react";
export default function ScoreKeeper({ numberOfPlayers, target }) {
  const newArr = [];

  for (let i = 1; i <= numberOfPlayers; i++) {
    newArr.push({ id: i, pName: `Player ${i}`, score: 0 });
  }

  const addScore = (id) => {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player) => {
        if (id == player.id) {
          if (player.score < target && player.score >= target) {
            console.log(player.pName, "WON");
          }
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    });
  };

  const [players, setPlayers] = useState(newArr);

  return (
    <>
      <div>
        <ul style={{ listStyle: "none" }}>
          {players.map((p) => (
            <li key={p.id} style={{ margin: "15px" }}>
              {p.pName}
              <button onClick={(e) => addScore(p.id)}>+</button> {p.score}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
