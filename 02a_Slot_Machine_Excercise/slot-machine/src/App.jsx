import "./App.css";
import Slot from "./components/Slot.jsx";

function App() {
  return (
    <>
      <Slot values={["\u{1F352}", "\u{1F34C}", "\u0037\u20E3"]} />
    </>
  );
}

export default App;
