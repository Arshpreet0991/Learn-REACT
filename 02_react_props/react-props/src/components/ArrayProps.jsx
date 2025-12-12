export default function ArraysAndObjectsProps({ arrayOfNumbers }) {
  const randomIndex = Math.floor(Math.random() * arrayOfNumbers.length);
  const randomElementofArray = arrayOfNumbers[randomIndex];

  return (
    <>
      <h1>Random element of an Array: {randomElementofArray}</h1>
    </>
  );
}
