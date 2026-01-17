import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingForm from "./ShoppingForm";

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((currItems) => {
      return [...currItems, { ...item, id: uuid() }];
    });
  }

  return (
    <>
      <h1>Shopping List</h1>
      <div>
        <ul>
          {items.map((i) => (
            <li key={i.id}>
              {i.product} x {i.quantity}
            </li>
          ))}
        </ul>
      </div>
      <ShoppingForm onSubmit={addItem} />
    </>
  );
}
