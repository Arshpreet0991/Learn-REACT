export default function MultipleProps({ firstName, lastName }) {
  return (
    <>
      <h2>
        Hello! {firstName} {lastName}
        {/* we can pass the string as two separate props or add concatination like {firstName + lastName} */}
      </h2>
    </>
  );
}
