export default function ScoreButton({ teamName, score, setScore }) {
  //console.log(score);

  const addScore = () => {
    setScore(score.t1Score);
  };

  return (
    <>
      <button onClick={addScore}>+1 for Team {teamName}</button>
    </>
  );
}
