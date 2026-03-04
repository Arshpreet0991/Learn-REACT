import React, { useEffect, useState } from "react";
import { TodoProvider } from "../context/TodoContext";
import TodoForm from "./TodoForm";
import TodoItem from "./Item";

function Container() {
  const [taskList, setTaskList] = useState([]); // the array of tasks

  // methods definition for Context- methods are defined here, and declared at the context level.

  // add task - task parameter here should is object - *** MAKE SURE TO CHECK IF WE ARE RETURNING OBJ FROM INPUT FORM
  const addTask = (task) => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      { id: Date.now(), ...task },
    ]);
  };

  // edit task - here newTask is an object as well- *** MAKE SURE WE ARE SENDING OBJECT IN OUR FORM
  const editTask = (id, task) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((eachTaskObj) =>
        eachTaskObj.id === id ? { ...task, task: task } : eachTaskObj,
      ),
    );
  };

  // delete task
  const deleteTask = (id) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((eachTaskObj) => eachTaskObj.id !== id),
    );
  };

  // toggle task completed
  const toggleTask = (id) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.map((eachTaskObj) => {
        return eachTaskObj.id === id
          ? { ...eachTaskObj, isCompleted: !eachTaskObj.isCompleted }
          : eachTaskObj;
      });
    });
  };

  // set up local storage - we want to run this as soon as the app loads, to display previous tasks

  // get items from local storage
  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem("taskList"));

    if (taskList && taskList.length > 0) {
      setTaskList(taskList);
    }
  }, []);

  // set items to local storage
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <TodoProvider
      value={{ taskList, addTask, deleteTask, editTask, toggleTask }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {taskList.map((eachTaskObj) => (
              <div className="w-full" key={eachTaskObj.id}>
                <TodoItem taskObj={eachTaskObj} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default Container;
