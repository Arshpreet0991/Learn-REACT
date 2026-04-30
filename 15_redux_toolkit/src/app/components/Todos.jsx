import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos); // get access to store state
  const dispatch = useDispatch();
  return (
    <div className=" w-1/4 flex flex-col gap-2 mt-2 ">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-amber-50 p-2 text-black flex justify-between items-center rounded-sm"
        >
          {todo.text}
          <div className="flex gap-5">
            <button
              className="text-2xl text-green-800 font-extrabold"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              /
            </button>
            <button
              className="text-2xl text-red-800 font-extrabold"
              onClick={() => dispatch(updateTodo(todo.id))}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;
