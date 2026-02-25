import { useContext, createContext } from "react";

// created context
export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

// created wrapper
export const ThemeContextProvider = ThemeContext.Provider;

// instead of importing useContext and ThemeContext everywhere, we create a hook. Now we only need to import 1 file
export default function useTheme() {
  return useContext(ThemeContext);
}
