import { useState } from "react";
import { useTodo } from "../context/TodoContext";

// we are getting the task object here as a prop named "todo".
function TodoItem({ taskObj }) {
  // get the context
  const { editTask, deleteTask, toggleTask } = useTodo();

  // states
  const [isTaskEditable, setIsTaskEditable] = useState(false); // first check if we can actually edit the task. If the task is completed then, edit should be greyed out.
  const [newTask, setNewTask] = useState(taskObj.task);

  // define onClick Methods

  // edit task on click
  const editOnClick = () => {
    editTask(taskObj.id, { ...taskObj, task: newTask });
    setIsTaskEditable(false);
  };

  // toggle task on click
  const toggleTaskOnClick = () => {
    toggleTask(taskObj.id);
  };

  // delete on click
  const deleteOnClick = () => {
    deleteTask(taskObj.id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        taskObj.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={taskObj.isCompleted}
        onChange={toggleTaskOnClick}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTaskEditable ? "border-black/10 px-2" : "border-transparent"
        } ${taskObj.isCompleted ? "line-through" : ""}`}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        readOnly={!isTaskEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (taskObj.isCompleted) return;

          if (isTaskEditable) {
            editOnClick();
          } else setIsTaskEditable((prev) => !prev);
        }}
        disabled={taskObj.isCompleted}
      >
        {isTaskEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteOnClick(taskObj.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
