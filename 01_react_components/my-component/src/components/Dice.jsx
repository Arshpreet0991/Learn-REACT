function Dice() {
  const diceRoll = Math.floor(Math.random() * 6) + 1;

  return (
    <>
      <h1>Dice Roll: {diceRoll}</h1>
    </>
  );
}

export default Dice;
