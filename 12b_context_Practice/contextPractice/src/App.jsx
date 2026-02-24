import "./App.css";
import { useContext } from "react";
import { RegisterContextProvider } from "./context/RegisterContextProvider";
import Welcome from "./components/Welcome";
import Register from "./components/Register";

function App() {
  return (
    <>
      <RegisterContextProvider>
        <Register />
        <Welcome />
      </RegisterContextProvider>
    </>
  );
}

export default App;
