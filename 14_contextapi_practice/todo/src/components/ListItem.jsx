import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function ListItem({ taskObj }) {
  const { deleteTask, editTask } = useTodo();
  const [updatedTask, setUpdatedTask] = useState(taskObj.title);

  return (
    <div className="p-2 bg-red-100 rounded-md mt-3 flex items-center justify-between text-xl">
      <div>
        <input className="mr-5" type="checkbox" />
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => {
            setUpdatedTask(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            editTask(taskObj.id, { ...taskObj, title: updatedTask });
          }}
        >
          ✏️
        </button>
        <button>📁</button>
        <button
          onClick={() => {
            deleteTask(taskObj.id);
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default ListItem;
