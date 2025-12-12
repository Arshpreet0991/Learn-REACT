export default function RandomPokemon() {
  const randomPokemonNumber = Math.floor(Math.random() * 151 + 1);

  console.log(randomPokemonNumber);

  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomPokemonNumber}.png`;
  return (
    <>
      <div style={{ border: "2px solid white" }}>
        <h1>Pokemon #{randomPokemonNumber}</h1>
        <img src={pokemonImageUrl} style={{ width: "150px" }} />
      </div>
    </>
  );
}
