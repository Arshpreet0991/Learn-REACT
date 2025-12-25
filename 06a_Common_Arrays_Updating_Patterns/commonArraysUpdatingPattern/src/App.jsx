import { useState } from "react";
import "./App.css";

const itemList = [
  { id: 1, itemName: "Milk", itemPrice: 3.49 },
  { id: 2, itemName: "Eggs", itemPrice: 4.99 },
  { id: 3, itemName: "Bread", itemPrice: 2.79 },
  { id: 4, itemName: "Butter", itemPrice: 5.25 },
  { id: 5, itemName: "Apples", itemPrice: 3.99 },
];

// add an element
// remove an element (use filter)
// updating all elements in an array (use map)
// modifying a particular element of an array (use map)

function App() {
  const [items, setItems] = useState(itemList);

  const addItem = () => {
    setItems((prevItemsArr) => [
      ...prevItemsArr,
      { id: 6, itemName: "Banana", itemPrice: 1.99 },
    ]);
  };

  const deleteItem = (id) => {
    setItems((prevId) => {
      return prevId.filter((i) => i.id != id);
    });
  };

  // work on this
  const updateItem = () => {
    setItems((prevItem) => prevItem.map((i) => console.log(i)));
  };

  return (
    <>
      <div>
        <ul className="bg-amber-50 flex flex-col rounded-xl justify-between gap-2 w-56 font-bold text-2xl p-3 text-zinc-950">
          {items.map((item) => (
            <li
              key={item.id}
              className="bg-amber-200 rounded-xl p-2"
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              {item.itemName}- {item.itemPrice}
            </li>
          ))}
        </ul>
        <button
          className="mt-5 bg-green-900 text-white text-2xl px-4 py-2 rounded-lg"
          onClick={() => addItem(items)}
        >
          Add
        </button>
        <button
          className="mt-5 bg-green-900 text-white text-2xl px-4 py-2 rounded-lg ml-3"
          onClick={() => updateItem(items)}
        >
          Update
        </button>
      </div>
    </>
  );
}

export default App;
