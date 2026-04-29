import React, { useEffect, useState } from "react";
import { TodoProvider, useTodo } from "../context/TodoContext";
import TodoForm from "./TodoForm";
import ListItem from "./ListItem";

function Container() {
  const [taskList, setTaskList] = useState([]);

  // define methods

  const addTask = (taskObj) => {
    setTaskList((prevTaskList) => [...prevTaskList, { ...taskObj }]);
  };
  const deleteTask = (id) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((taskObj) => taskObj.id !== id),
    );
  };
  const editTask = (id, task) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((taskObj) =>
        taskObj.id === id ? { ...task, title: task } : taskObj,
      ),
    );
  };

  const toggledTask = () => {};

  // set up local storage:

  // load old tasks from storage
  useEffect(() => {
    const taskList = JSON.parse(localStorage.getItem("taskList"));
    if (taskList && taskList.length > 0) {
      setTaskList(taskList);
    }
  }, []);

  // save task list array to local storage if tasklist changes
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <TodoProvider
      value={{ addTask, deleteTask, toggledTask, editTask, taskList }}
    >
      <div className="p-4 bg-gray-400 rounded-md text-black">
        <TodoForm />
        {taskList.map((taskObj) => (
          <div key={taskObj.id}>
            <ListItem taskObj={taskObj} />
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}

export default Container;
