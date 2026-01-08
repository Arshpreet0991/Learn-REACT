import Die from "./Die";
export default function Dice({ diceRolls }) {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 p-5 rounded-md gap-5">
        {diceRolls.map((val, idx) => (
          <Die val={val} key={idx} />
        ))}
      </div>
    </>
  );
}
