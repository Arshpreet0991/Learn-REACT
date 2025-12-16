export default function Clicker({ message, btnText }) {
  function handleClick() {
    alert(message);
  }
  return (
    <>
      <button onClick={handleClick}>{btnText}</button>
    </>
  );
}
