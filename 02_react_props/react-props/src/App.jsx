import "./App.css";
import PropsExample1 from "./components/PropsExample1";
import MultipleProps from "./components/MultipleProps";
import PassingNumbers from "./components/PassingNumbers";
import ArrayProps from "./components/ArrayProps";
import ObjectsProps from "./components/ObjectProps";

function App() {
  return (
    <>
      <PropsExample1 name="Arsh" />
      {/*think of props like passing an argument to a function. Instead of doing
      PropsExample1(name), we use jsx syntax, <PropsExample1 name="Arsh" />
      
      The component will then recieve the value like we do in regular functions.
      */}
      <MultipleProps firstName={"Arshpreet"} lastName={"Singh"} />
      <PassingNumbers num1={2} num2={4} />
      <ArrayProps arrayOfNumbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      <ObjectsProps myObj={{ fName: "Kazuya", lName: "Mishima" }} />{" "}
      {/* Notice the double {{ }}. The outer one is to tell the react that we are working inside JS, and the inside { } is the JS object itself */}
    </>
  );
}

export default App;
