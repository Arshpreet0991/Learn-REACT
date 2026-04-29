import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos); // get access to store state
  const dispatch = useDispatch();
  return (
    <div>
      Todos
      {todos.map((todo) => (
        <div key={todo.id} className="bg-blue-950 p-2 text-white">
          {todo.text}{" "}
          <button
            className="text-2xl text-red-800"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
