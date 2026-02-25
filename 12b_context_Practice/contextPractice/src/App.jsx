import RegisterUser from "./components/RegisterUser.jsx";
import DisplayUserContainer from "./components/DisplayUserContainer.jsx";
import { UserContextProvider } from "./context/user.js";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <UserContextProvider value={{ user, setUser }}>
        <RegisterUser />
        <DisplayUserContainer />
      </UserContextProvider>
    </>
  );
}

export default App;
