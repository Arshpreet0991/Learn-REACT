// Here, the function receives the argument as destructred props, and then we use it inside the function body.

export default function PropsExample1({ name }) {
  return (
    <>
      <h1> Hello! {name}</h1>
    </>
  );
}
