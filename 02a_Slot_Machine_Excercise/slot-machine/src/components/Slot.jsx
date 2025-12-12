export default function Slot({ values }) {
  //let randomElement = Math.floor(Math.random() * values.length);

  const slots = values.map(() => {
    const randomElement = Math.floor(Math.random() * values.length);
    return values[randomElement];
  });

  let isWin = true;

  for (let index = 0; index < slots.length; index++) {
    if (slots[index] !== slots[0]) {
      isWin = false;
      break;
    }
  }

  const result = isWin ? "You Win" : "you lost";
  return (
    <>
      <h1>Slot Machine</h1>
      <h1>{slots}</h1>
      <h3>{result}</h3>
    </>
  );
}
