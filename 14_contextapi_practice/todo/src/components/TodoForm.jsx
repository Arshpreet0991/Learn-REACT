import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [title, setTitle] = useState("");

  const { addTask } = useTodo();

  const addTaskOnCLick = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title: title, isCompleted: false });
    setTitle("");
  };

  return (
    <>
      <form onSubmit={addTaskOnCLick} className="flex">
        <input
          type="text"
          className="bg-white p-1 text-xl text-black rounded-l-md w-2xl"
          maxLength={50}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="p-2 px-4 text-xl text-white font-bold bg-green-700 rounded-r-md cursor-pointer">
          Add Task
        </button>
      </form>
    </>
  );
}

export default TodoForm;
