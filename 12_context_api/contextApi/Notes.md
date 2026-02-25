# Context API

So react has this problem that, if there are multiple nested components, then if the grandchild component needs to access some data, the data has to be passed to each component in the hierarchy. Even if the other components might not need the data. This problem is called **prop drilling**.

```jsx
<User value={username}>
  <Card value={username}>
    <Photo></Photo>
    <UserName value={username}></UserName>
  </Card>
</User>
```

- Here we can see, only the UserName component needs access to the value of username. But the props has to go through the other components unnecessarily.
- To solve this, we use Context API.
- Context API acts like a shared storage, so whichever component needs access to the data, they can access it directly from context.
- Context can hold any kind of data — states, functions, objects, plain values, etc.
- But we should not put all of our data in shared storage, because:
  - This can cause unnecessary re-renders and hurt performance.
  - So only put that data in shared storage which we know we will have to pass multiple times in the hierarchy.

### Setting up Context

To set up the context, we need to do two things:

- **Create Context**
  - This will create the shared storage for your data.
  - In our example, we can create the context for the User component.
  - Context can be created for anything, like login, user, cards, etc.

- **Context Provider**
  - This is a component that wraps all the components that need access to the shared data.
  - You pass the data you want to share to the Provider.
  - Any component inside the Provider wrapper can access that data directly, without prop drilling.

To accompolish this, we create two separate files:

- `Context.js` just creates the context (the shared storage).
- `ContextProvider.jsx` is where we define what data goes into that shared storage, and wraps the components that need access to it.

#### Context.js

```jsx
import React from "react";
const UserContext = React.createContext(); // create a context
export default UserContext;
```

#### ContextProvider.jsx

```jsx
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // the data that needs to be shared in the context
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
```

- We created the `UserContextProvider` component.
- `children` here is a prop. So any component passed to it will be rendered by `UserContextProvider` wrapped inside `UserContext.Provider`.
- `UserContext.Provider` comes from the context we created in `Context.js`. This is the actual wrapper that gives all the components inside it access to the shared data.
- The data that needs to be shared is passed in the `value` prop of `UserContext.Provider`.
- We passed the data as an object. So in this case, `user` and `setUser` were passed as an object.

### Using Context API

#### The Flow

1. Create the shared storage (`UserContext.js`)
2. Create the Provider wrapper (`UserContextProvider`) that holds the data and wraps the components that need access to it.
3. Any component inside the wrapper can grab the data using `useContext()` hook and also update it.

---

#### App.jsx

```jsx
function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Context API react</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}
```

- All components inside `UserContextProvider` have access to the shared storage.
- In this case, both `Login` and `Profile` have access to `user` and `setUser`.

---

#### Login.jsx

```jsx
import { useContext, useState } from "react";
import UserContext from "../context/UserContext.js";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </div>
  );
}
```

- `useContext(UserContext)` gives us access to whatever is in the shared storage. In this case `{ user, setUser }`.
- We only grabbed `setUser` because we only need to **update** the user data here, not read it.
- `user` was `null` initially. When the form is submitted, `setUser({ username, password })` fills it with the actual data in the shared storage.
- Now any component inside the Provider will have access to the updated `user` data.

---

#### Profile.jsx

```jsx
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div> Please Login</div>;
  return <div> Welcome: {user.username}</div>;
}
```

- This time we only grabbed `user` because we only need to **read** the data here, not update it.
- `if (!user)` checks if `user` is still `null` (empty), meaning the user hasn't logged in yet, so it shows "Please Login".
- Once the user logs in, `user` gets updated in the shared storage via `setUser` in the Login component, and Profile automatically gets the updated data and shows "Welcome: {user.username}".

### Quick Summary - Context API Flow

- Create the shared storage using `createContext` (`UserContext.js`)
- Create a Provider wrapper that holds the data and wraps the components that need access to it (`UserContextProvider`)
- In your app, wrap the components that need access to the shared data inside the Provider wrapper (`App.jsx`)
- To **update** shared data, use `useContext()` to grab the setter function and call it with the new data
- To **read** shared data, use `useContext()` to grab the data and use it in your componen
