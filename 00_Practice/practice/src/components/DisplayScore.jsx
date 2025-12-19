export default function DisplayScore({
  teamName,
  score,
  updateScore,
  teamNum,
}) {
  return (
    <>
      <div className="text-2xl m-4">
        <h2 className="font-bold m-2">{teamName}</h2>
        <h2>Score: {score}</h2>
        <button className="m-4" onClick={() => updateScore(teamNum)}>
          +1
        </button>
      </div>
    </>
  );
}
