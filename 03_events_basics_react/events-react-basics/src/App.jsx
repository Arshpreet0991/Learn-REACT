import "./App.css";
import Clicker from "./components/Clicker";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Clicker message="Hiii" btnText="Please Click Me!!" />
      <Clicker message="bye" btnText="Please Dont Click Me!!" />
    </>
  );
}

export default App;
