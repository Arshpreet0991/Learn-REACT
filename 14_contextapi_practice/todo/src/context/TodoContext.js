import { useContext, createContext } from "react";

export const todoContext = createContext({
  taskList: [
    {
      id: 1,
      title: "task 1",
      isCompleted: false,
    },
  ],
  addTask: (title) => {},
  editTask: (id, title) => {},
  deleteTask: (id) => {},
  toggledTask: (id) => {},
});

export const TodoProvider = todoContext.Provider;

export const useTodo = () => {
  return useContext(todoContext);
};
