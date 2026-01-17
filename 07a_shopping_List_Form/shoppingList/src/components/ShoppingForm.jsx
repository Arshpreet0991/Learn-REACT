import { useState } from "react";
import { useId } from "react";

export default function ShoppingForm({ onSubmit }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });

  function handleChange(evt) {
    const fieldName = evt.target.name;
    const newValue = evt.target.value;

    setFormData((currentVal) => {
      console.log(fieldName, newValue);

      return { ...currentVal, [fieldName]: newValue };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ product: "", quantity: 0 }); // reset form
  };

  return (
    <>
      <form className="flex flex-col gap-5">
        <label htmlFor="product"> Product Name:</label>
        <input
          type="text"
          name="product"
          id="product"
          className="text-black bg-white rounded-md text-2xl p-1"
          value={formData.product}
          onChange={handleChange}
        />

        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          className="text-black bg-white rounded-md text-2xl p-1"
          value={formData.quantity}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Add Item</button>
      </form>
    </>
  );
}
