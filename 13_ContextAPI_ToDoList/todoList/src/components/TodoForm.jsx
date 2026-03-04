import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [task, setTask] = useState(""); // state for an individual task

  // get the add task function from context
  const { addTask } = useTodo();

  // create an onClick method to create an object and pass it to addTask method to add tasks to taskList array
  const addTaskOnClick = (e) => {
    e.preventDefault();
    if (!task) return;
    addTask({ task: task, isCompleted: false }); // creating and passing an object to add task
    setTask("");
  };

  return (
    <form onSubmit={addTaskOnClick} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
