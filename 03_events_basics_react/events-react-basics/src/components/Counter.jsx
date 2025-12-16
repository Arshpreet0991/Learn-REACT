export default function Counter({ counter, setCounter }) {
  const incrementNum = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <button onClick={incrementNum}>Increment</button>
      <h1>{counter}</h1>
    </>
  );
}
