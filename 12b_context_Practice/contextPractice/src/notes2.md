## 2nd Approach – Single Context File (Common Pattern)

- Instead of creating separate files for **context** and **provider**, we create a single `.js` file.
- In this file, we:
  - Create the context
  - Export the provider
  - Create a custom hook for consuming the context

- Components will use the **custom hook** instead of directly using `useContext`.

---

### 📁 Single Context File – `user.js`

```jsx
import { createContext, useContext } from "react";

// 1. Create context (shared storage reference)
export const UserContext = createContext(null);

// 2. Export provider (this is NOT a custom provider, just an alias)
export const UserContextProvider = UserContext.Provider;

// 3. Custom hook to access context
export default function useUser() {
  return useContext(UserContext);
}
```

---

### 🧠 Explanation

- `createContext(null)`
  - Creates a **context object** (a shared communication channel).
  - `null` is the default value (used only if no provider is found).

- `UserContext.Provider`
  - This is the **actual provider component** from React.
  - It allows child components to access the value passed to it.

- `UserContextProvider`
  - This is just a **renamed alias** of `UserContext.Provider`
  - It does NOT contain state or logic.

- `useUser()`
  - A **custom hook** that wraps `useContext`
  - Makes it easier and cleaner to access context data

---

### ⚠️ Important Clarification

- This file **does NOT manage state**
- The state (`useState`) is still created **outside**, usually in `App.jsx`

Example:

```jsx
const [user, setUser] = useState(null);

<UserContextProvider value={{ user, setUser }}>
  <App />
</UserContextProvider>;
```

---

### 🆚 Compared to Full Provider Pattern

In a more advanced setup, we create a **custom provider component** that includes state:

```jsx
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

- Here, state is **encapsulated inside the provider**
- This makes the code more reusable and cleaner for large apps

---

### ✅ Summary

- Context = communication channel
- Provider = supplies data to components
- `useContext` / custom hook = reads data
- Your current
