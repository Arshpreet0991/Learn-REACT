import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice.js";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // dispatch uses reducers to make changes in store, dispatch --> reducer --> store

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input)); // this input will go in action.payload
    setInput("");
  };

  return (
    <div>
      <form
        className="bg-stone-500 text-2xl p-5 rounded-sm text-black flex gap-3"
        onSubmit={addTodoHandler}
      >
        <input
          type="text"
          className="bg-white text-2xl p-1 rounded-sm text-black"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-blue-900 text-2xl px-3 py-1 rounded-sm text-white">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
