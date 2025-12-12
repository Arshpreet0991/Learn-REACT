export default function ObjectsProps({ myObj }) {
  const { fName, lName } = myObj;

  return (
    <>
      <h3>
        Tekken Character Name: {fName} {lName}
      </h3>
    </>
  );
}
