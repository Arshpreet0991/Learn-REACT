import { useState } from "react";

export default function ToDoForm({ onSubmit }) {
  const [formData, setFormData] = useState({ task: "", isCompleted: false });

  const handleOnChange = (evt) => {
    setFormData((currentData) => {
      return { ...currentData, [evt.target.name]: evt.target.value }; // create a shallow copy of object, then add object with key:value
    });
  };

  const handleOnSubmit = () => {
    onSubmit(formData);
    setFormData({ task: "", isCompleted: false });
  };
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-black mb-5">
          Simple To-Do List
        </h1>
      </div>
      <div className="flex justify-between w-xl">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter Task..."
          className="w-full rounded-l-md text-2xl bg-white text-black"
          value={formData.task}
          onChange={handleOnChange}
        />
        <button
          className="bg-green-700 text-white text-2xl rounded-r-md p-2"
          onClick={handleOnSubmit}
        >
          Add
        </button>
      </div>
    </>
  );
}
