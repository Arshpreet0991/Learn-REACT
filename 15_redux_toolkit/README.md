# Redux Tool Kit

- a more better way of using the concept of context in reacts
- `store` : a shared storage
- `reducer` : is a function which takes in two parameters. `state` and `action`. It defines how state changes in response to an action. Only reducers can update the store’s state.
  ```js
  (state, action) => newState;
  ```
- `useSelector` : used when we want to fetch a value from the store
- `useDispatch` : used to send a value to the store

### Install

we have to install 2 packages

- `npm install @reduxjs/toolkit` : install the redux toolkit
- `npm install react-redux` : makes redux toolkit available in react

### Steps

1. create a store first
   - create a file called `store.js`
   - in the store, we pass the reducer object inside configureStore

   ```js
   import { configureStore } from "@reduxjs/toolkit";
   import todoReducer from "../features/todo/todoSlice.js";
   export const store = configureStore({
     reducer: {
       todos: todoReducer,
     },
   });
   ```

2. create reducers (called slices in redux toolkit)

- reducers are the function which are used to make changes to the state inside the store.
- reducers are declared inside `Slice`.
- `Slice` is a an object, which let us configure our store.
- To configure our store. we need, an initial state, reducers and the state logic.
- One app should have 1 store (best practice), and 1 store can have many slices.

```js
  export const todoSlice= createSlice({
    name: "todo" // name is a keyword, so have to give name to slice,
    initialState, // initial state of the store
    reducers:{
      addTodo:(state, action)=>{
        // ... state logic here
      }
    }
  })
```

- state is the current state in the store
- action in a slice, actions are auto-generated objects that trigger reducers and carry the data needed to update the state.

  ```js
      {
    type: "string",   // the name of the reducer is here, so this reducer is called
    payload: any      // data for the reducer
  }
  ```

3.  export all the actions

- these reducers functions must be called inside the `dispatch`.

```js
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
```

4. export all reducers

- export the reducer function from your slice so it can be used in the store.

```js
export default todoSlice.reducer;
```

5. Then in components,

- to send data to state we use `dispatch`

  ```js
  const dispatch = useDispatch();
  dispatch(addTodo(input)); // addTodo is the reducer and input is coming from local state
  ```

- to fetch data from the globals state, we use `selector`

  ```js
  const todos = useSelector((state) => state.todos); // get access to store state
  ```

  - so, to read the state, we use `selector`, to send data to state we use `dispatch`
