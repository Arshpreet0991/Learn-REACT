import "./App.css";
import ShoppingList from "./components/ShoppingList";

function App() {
  const data = [
    { id: 1, item: "eggs", quantity: 12, isCompleted: true },
    { id: 2, item: "Milk", quantity: 2, isCompleted: false },
    { id: 3, item: "Bread", quantity: 1, isCompleted: true },
    { id: 4, item: "Butter", quantity: 3, isCompleted: false },
  ];

  return (
    <>
      <ShoppingList items={data} />
    </>
  );
}

export default App;
