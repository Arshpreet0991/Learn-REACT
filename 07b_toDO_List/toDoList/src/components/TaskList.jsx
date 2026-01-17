import { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuid } from "uuid";
export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskObj) => {
    setTasks((currData) => {
      return [...currData, { ...taskObj, id: uuid() }];
    });
  };

  return (
    <>
      <div className="bg-gray-500 p-2 rounded-md">
        <ToDoForm onSubmit={addTask} />
      </div>
      {tasks.length > 0 && (
        <div className="flex flex-col gap-4 justify-center items-center text-center mt-20">
          <h1 className="text-5xl font-bold">Tasks</h1>
          <div className="text-2xl bg-gray-500 p-2 rounded-md">
            <ul className="w-xl ">
              {tasks.map((i) => (
                <li
                  className="bg-black p-2 rounded-md m-1 flex justify-between pl-5"
                  key={i.id}
                >
                  {i.task}
                  <button className="bg-red-800 p-1 rounded-md">Del</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
