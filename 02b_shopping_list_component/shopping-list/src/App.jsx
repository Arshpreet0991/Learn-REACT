import "./App.css";
import ShoppingList from "./components/ShoppingList";

function App() {
  const data = [
    { item: "eggs", quantity: 12, isCompleted: true },
    { item: "Milk", quantity: 2, isCompleted: false },
    { item: "Bread", quantity: 1, isCompleted: true },
    { item: "Butter", quantity: 3, isCompleted: false },
  ];

  return (
    <>
      <ShoppingList items={data} />
    </>
  );
}

export default App;
