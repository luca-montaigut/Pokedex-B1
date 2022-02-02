const searchPokemonById = (id) => {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].id === id) {
      return pokemons[i];
    }
  }
};

const searchPokemonByName = (name) => {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name === name) {
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

const displayNotFound = () => {
  const pokemonNotFound = {
    id: 0,
    name: "----",
    type: { name: "notFound" },
    height: 0,
    weight: 0,
    picture: "../assets/images/not-found.png",
  };
  displayPokemon(pokemonNotFound);
  manageInputs(pokemonNotFound);
};

const manageInputs = (pokemon) => {
  const numberInput = document.querySelector("#search-number");
  numberInput.value = pokemon.id;
  const nameInput = document.querySelector("#search-text");
  nameInput.value = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
};

const handleNumberSearch = () => {
  const searchedId = parseInt(document.querySelector("#search-number").value);
  const pokemon = searchPokemonById(searchedId);
  displayPokemon(pokemon);
  manageInputs(pokemon);
};

const handleNameSearch = () => {
  const inputValue = document.querySelector("#search-text").value;
  const nameSearched = inputValue.toLowerCase();
  const pokemon = searchPokemonByName(nameSearched);
  if (pokemon === undefined) {
    return displayNotFound();
  }
  displayPokemon(pokemon);
  manageInputs(pokemon);
};

const main = () => {
  const inputNumber = document.querySelector("#search-number");
  inputNumber.addEventListener("input", handleNumberSearch);

  const ballSearch = document.querySelector("#ball-search");
  ballSearch.addEventListener("click", handleNameSearch);
};

main();
