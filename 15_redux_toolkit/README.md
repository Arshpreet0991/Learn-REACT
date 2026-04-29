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

   ```js
   import { configureStore } from "@reduxjs/toolkit";
   export const store = configureStore({});
   ```

2. create reducers (called slices in redux toolkit)
