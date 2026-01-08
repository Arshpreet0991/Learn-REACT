export default function ButtonComponent({ clickFunc }) {
  return (
    <>
      <button
        onClick={clickFunc}
        className="bg-green-800 text-2xl text-white mt-3 p-2 rounded-md"
      >
        Click Me
      </button>
    </>
  );
}
