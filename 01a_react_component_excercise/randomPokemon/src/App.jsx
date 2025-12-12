import { useState } from "react";
import "./App.css";
import RandomPokemon from "./components/RandomPokemon";

function App() {
  return (
    <>
      <RandomPokemon />
      <RandomPokemon />
      <RandomPokemon />
    </>
  );
}

export default App;
