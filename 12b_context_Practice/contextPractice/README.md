# Prop Drilling Problem:

Prop drilling happens when you pass props (data/state) through multiple layers of components, even if the intermediate components don’t use the data, just to reach a child component that needs it.

Parent
└─ Child1
└─ Child2
└─ Child3 (needs the data)

- Data/state starts in Parent

- Every intermediate component (Child1, Child2) must accept and forward the props

- Child3 finally uses it

## Problems

- Intermediate components become “useless pipelines”
- Harder to maintain when the tree gets deep
- Adding/removing layers requires updating all prop chains

## Solution to Prop Drilling

- Context API or state management libraries (Redux, Zustand)

- Let components access data directly without passing through intermediate layers

## Prop Drilling Example Code:

### RegisterUser.jsx (Parent)

```jsx
import React, { useState } from "react";
import DisplayUserContainer from "./DisplayUserContainer";

function RegisterUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedName, setSubmittedName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName({ firstName: firstName, lastName: lastName });
  };

  return (
    <>
      <div className="flex gap-5 flex-col justify-center items-center">
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Enter First Name"
            className="bg-white p-2 text-2xl"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            className="bg-white p-2 text-2xl"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 p-3 rounded-md text-white font-bold"
          >
            Submit
          </button>
        </div>
        {submittedName?.firstName && submittedName?.lastName && (
          <DisplayUserContainer
            first={submittedName.firstName}
            last={submittedName.lastName}
          />
        )}
        ;
      </div>
    </>
  );
}

export default RegisterUser;
```

### Display Name Container

```jsx
import DisplayUser from "./DisplayUser";

function DisplayUserContainer({ first, last }) {
  return (
    <div className="border-2 border-white border-double">
      <DisplayUser first={first} last={last} />
    </div>
  );
}

export default DisplayUserContainer;
```

### Display User Name

```jsx
function DisplayUser({ first, last }) {
  return (
    <div>
      <p className="text-3xl text-white p-20">
        Welcome {first} {""}
        {last}!
      </p>
    </div>
  );
}

export default DisplayUser;
```

**Here, Display container does not used the data, it merely passes it on to DisplayUser.jsx, where the data will be used.**

## Example code with Context API

### Create Context

```js
import React from "react";
const RegisterUserContext = React.createContext();
export default RegisterUserContext;
```

### Create Context Provider

- It is just a method which return any component that is passed to it and gives access to the shared values/data.

```jsx
import React, { useState } from "react";
import RegisterUserContext from "./RegisterUserContext.js";

function RegisterUserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <>
      <RegisterUserContext.Provider value={{ user, setUser }}>
        {children}
      </RegisterUserContext.Provider>
    </>
  );
}

export default RegisterUserContextProvider;
```

### Component- RegisterUser.jsx

```jsx
import React, { useState, useContext } from "react";
import RegisterUserContext from "../context/RegisterUserContext";

function RegisterUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // use context
  const { setUser } = useContext(RegisterUserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ firstName, lastName });
  };

  return (
    <>
      <div className="flex gap-5 flex-col justify-center items-center">
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Enter First Name"
            className="bg-white p-2 text-2xl"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            className="bg-white p-2 text-2xl"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 p-3 rounded-md text-white font-bold"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default RegisterUser;
```

### Component- DisplayContainer.jsx

```jsx
import DisplayUser from "./DisplayUser.jsx";

function DisplayUserContainer() {
  return (
    <div className="border-2 border-white border-double">
      <DisplayUser />
    </div>
  );
}

export default DisplayUserContainer;
```

### Component- DisplayUser.jsx

```jsx
import React, { useState, useContext } from "react";
import RegisterUserContext from "../context/RegisterUserContext";
function DisplayUser() {
  const { user } = useContext(RegisterUserContext);
  if (!user)
    return (
      <>
        <p className="text-3xl text-white p-20">
          Fill the fields above and hit submit
        </p>
      </>
    );

  return (
    <div>
      <p className="text-3xl text-white p-20">
        Welcome {user.firstName} {user.lastName} !
      </p>
    </div>
  );
}

export default DisplayUser;
```
