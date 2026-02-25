import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeContextProvider } from "./context/theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };
  const lightMode = () => {
    setThemeMode("light");
  };

  // actual theme change

  useEffect(() => {
    const webPage = document.querySelector("html").classList;
    webPage.remove("light", "dark");
    webPage.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeContextProvider value={{ themeMode, darkMode, lightMode }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
