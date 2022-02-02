const searchPokemonById = (id) => {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].id === id) {
      return pokemons[i];
    }
  }
};

const displayPokemon = (pokemon) => {
  const pokemonPicture = document.querySelector("#pokemon-img");
  pokemonPicture.src = pokemon.picture;

  const pokemonName = document.querySelector("#pokemon-name");
  pokemonName.innerText =
    pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

  const pokemonHeight = document.querySelector("#pokemon-height span");
  pokemonHeight.innerText = pokemon.height;

  const pokemonWeight = document.querySelector("#pokemon-weight span");
  pokemonWeight.innerText = `${pokemon.weight} kg`;

  const pokemonId = document.querySelector("#pokemon-id");
  pokemonId.innerText = "#" + pokemon.id.toString().padStart(3, "0");

  const pokemonBackground = document.querySelector("#screen");
  pokemonBackground.style.backgroundColor = colors[pokemon.type.name];
};

const handleNumberSearch = () => {
  const searchedId = parseInt(document.querySelector("#search-input").value);
  const pokemon = searchPokemonById(searchedId);
  displayPokemon(pokemon);
};

const main = () => {
  const form = document.querySelector("form");
  form.addEventListener("input", handleNumberSearch);
  form.addEventListener("submit", (event) => event.preventDefault());
};

main();
