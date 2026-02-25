import { createContext, useContext } from "react";

export const UserContext = createContext(null); // create context

export const UserContextProvider = UserContext.Provider;

export default function useUser() {
  return useContext(UserContext);
}
