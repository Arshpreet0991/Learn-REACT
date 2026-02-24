import React from "react";
import RegisterContext from "./RegisterContext";
import { useState } from "react";

export const RegisterContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <>
      <RegisterContext.Provider value={{ user, setUser }}>
        {children}
      </RegisterContext.Provider>
    </>
  );
};
