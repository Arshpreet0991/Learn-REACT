import { createSlice, nanoid } from "@reduxjs/toolkit"; // nano id to generate unique id

// initial state of the store; can be object or array, intial state is a keyword
const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

// create slice
export const todoSlice = createSlice({
  name: "todo", // name is the property name, we have to use name here
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo); // add todo to current state
    }, // state gives us the current snapshot of states, action is where we pass arguments
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  }, // properties and function
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
