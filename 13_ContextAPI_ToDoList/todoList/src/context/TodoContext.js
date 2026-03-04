import { useContext, createContext } from "react";

export const TodoContext = createContext({
  taskList: [
    {
      id: 1,
      task: "task1",
      isCompleted: false,
    },
  ],
  addTask: (task) => {},
  editTask: (id, task) => {},
  deleteTask: (id) => {},
  toggleTask: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
