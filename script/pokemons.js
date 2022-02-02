const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 7,
    weight: 69,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 2,
    name: "ivysaur",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 10,
    weight: 130,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 3,
    name: "venusaur",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 20,
    weight: 1000,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    id: 4,
    name: "charmander",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 6,
    weight: 85,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 5,
    name: "charmeleon",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 11,
    weight: 190,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    id: 6,
    name: "charizard",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 17,
    weight: 905,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    id: 7,
    name: "squirtle",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 5,
    weight: 90,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 8,
    name: "wartortle",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 10,
    weight: 225,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    id: 9,
    name: "blastoise",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 16,
    weight: 855,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    id: 10,
    name: "caterpie",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 3,
    weight: 29,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
  },
  {
    id: 11,
    name: "metapod",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 7,
    weight: 99,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
  {
    id: 12,
    name: "butterfree",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 11,
    weight: 320,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    id: 13,
    name: "weedle",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 3,
    weight: 32,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  },
  {
    id: 14,
    name: "kakuna",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 6,
    weight: 100,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  },
  {
    id: 15,
    name: "beedrill",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 10,
    weight: 295,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
  },
  {
    id: 16,
    name: "pidgey",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 3,
    weight: 18,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  },
  {
    id: 17,
    name: "pidgeotto",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 11,
    weight: 300,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  },
  {
    id: 18,
    name: "pidgeot",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 15,
    weight: 395,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  },
  {
    id: 19,
    name: "rattata",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 3,
    weight: 35,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    id: 20,
    name: "raticate",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 7,
    weight: 185,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  },
  {
    id: 21,
    name: "spearow",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 3,
    weight: 20,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
  },
  {
    id: 22,
    name: "fearow",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 12,
    weight: 380,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
  },
  {
    id: 23,
    name: "ekans",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 20,
    weight: 69,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
  },
  {
    id: 24,
    name: "arbok",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 35,
    weight: 650,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
  },
  {
    id: 25,
    name: "pikachu",
    type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    height: 4,
    weight: 60,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    id: 26,
    name: "raichu",
    type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    height: 8,
    weight: 300,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
  },
  {
    id: 27,
    name: "sandshrew",
    type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    height: 6,
    weight: 120,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
  },
  {
    id: 28,
    name: "sandslash",
    type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    height: 10,
    weight: 295,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
  },
  {
    id: 29,
    name: "nidoran-f",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 4,
    weight: 70,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
  },
  {
    id: 30,
    name: "nidorina",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 8,
    weight: 200,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
  },
  {
    id: 31,
    name: "nidoqueen",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 13,
    weight: 600,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
  },
  {
    id: 32,
    name: "nidoran-m",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 5,
    weight: 90,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
  },
  {
    id: 33,
    name: "nidorino",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 9,
    weight: 195,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
  },
  {
    id: 34,
    name: "nidoking",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 14,
    weight: 620,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
  },
  {
    id: 35,
    name: "clefairy",
    type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
    height: 6,
    weight: 75,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
  },
  {
    id: 36,
    name: "clefable",
    type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
    height: 13,
    weight: 400,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
  },
  {
    id: 37,
    name: "vulpix",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 6,
    weight: 99,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
  },
  {
    id: 38,
    name: "ninetales",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 11,
    weight: 199,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
  },
  {
    id: 39,
    name: "jigglypuff",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 5,
    weight: 55,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
  },
  {
    id: 40,
    name: "wigglytuff",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 10,
    weight: 120,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
  },
  {
    id: 41,
    name: "zubat",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 8,
    weight: 75,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
  },
  {
    id: 42,
    name: "golbat",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 16,
    weight: 550,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
  },
  {
    id: 43,
    name: "oddish",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 5,
    weight: 54,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
  },
  {
    id: 44,
    name: "gloom",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 8,
    weight: 86,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
  },
  {
    id: 45,
    name: "vileplume",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 12,
    weight: 186,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
  },
  {
    id: 46,
    name: "paras",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 3,
    weight: 54,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
  },
  {
    id: 47,
    name: "parasect",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 10,
    weight: 295,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
  },
  {
    id: 48,
    name: "venonat",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 10,
    weight: 300,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
  },
  {
    id: 49,
    name: "venomoth",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 15,
    weight: 125,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
  },
  {
    id: 50,
    name: "diglett",
    type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    height: 2,
    weight: 8,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
  },
  {
    id: 51,
    name: "dugtrio",
    type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    height: 7,
    weight: 333,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
  },
  {
    id: 52,
    name: "meowth",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 4,
    weight: 42,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
  },
  {
    id: 53,
    name: "persian",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 10,
    weight: 320,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
  },
  {
    id: 54,
    name: "psyduck",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 8,
    weight: 196,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
  },
  {
    id: 55,
    name: "golduck",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 17,
    weight: 766,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
  },
  {
    id: 56,
    name: "mankey",
    type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    height: 5,
    weight: 280,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
  },
  {
    id: 57,
    name: "primeape",
    type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    height: 10,
    weight: 320,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
  },
  {
    id: 58,
    name: "growlithe",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 7,
    weight: 190,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
  },
  {
    id: 59,
    name: "arcanine",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 19,
    weight: 1550,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
  },
  {
    id: 60,
    name: "poliwag",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 6,
    weight: 124,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
  },
  {
    id: 61,
    name: "poliwhirl",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 10,
    weight: 200,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
  },
  {
    id: 62,
    name: "poliwrath",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 13,
    weight: 540,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
  },
  {
    id: 63,
    name: "abra",
    type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    height: 9,
    weight: 195,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
  },
  {
    id: 64,
    name: "kadabra",
    type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    height: 13,
    weight: 565,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
  },
  {
    id: 65,
    name: "alakazam",
    type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    height: 15,
    weight: 480,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
  },
  {
    id: 66,
    name: "machop",
    type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    height: 8,
    weight: 195,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
  },
  {
    id: 67,
    name: "machoke",
    type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    height: 15,
    weight: 705,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
  },
  {
    id: 68,
    name: "machamp",
    type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    height: 16,
    weight: 1300,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
  },
  {
    id: 69,
    name: "bellsprout",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 7,
    weight: 40,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
  },
  {
    id: 70,
    name: "weepinbell",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 10,
    weight: 64,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
  },
  {
    id: 71,
    name: "victreebel",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 17,
    weight: 155,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
  },
  {
    id: 72,
    name: "tentacool",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 9,
    weight: 455,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
  },
  {
    id: 73,
    name: "tentacruel",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 16,
    weight: 550,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
  },
  {
    id: 74,
    name: "geodude",
    type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    height: 4,
    weight: 200,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
  },
  {
    id: 75,
    name: "graveler",
    type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    height: 10,
    weight: 1050,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
  },
  {
    id: 76,
    name: "golem",
    type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    height: 14,
    weight: 3000,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
  },
  {
    id: 77,
    name: "ponyta",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 10,
    weight: 300,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
  },
  {
    id: 78,
    name: "rapidash",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 17,
    weight: 950,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
  },
  {
    id: 79,
    name: "slowpoke",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 12,
    weight: 360,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
  },
  {
    id: 80,
    name: "slowbro",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 16,
    weight: 785,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
  },
  {
    id: 81,
    name: "magnemite",
    type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    height: 3,
    weight: 60,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
  },
  {
    id: 82,
    name: "magneton",
    type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    height: 10,
    weight: 600,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
  },
  {
    id: 83,
    name: "farfetchd",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 8,
    weight: 150,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
  },
  {
    id: 84,
    name: "doduo",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 14,
    weight: 392,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
  },
  {
    id: 85,
    name: "dodrio",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 18,
    weight: 852,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
  },
  {
    id: 86,
    name: "seel",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 11,
    weight: 900,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
  },
  {
    id: 87,
    name: "dewgong",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 17,
    weight: 1200,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
  },
  {
    id: 88,
    name: "grimer",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 9,
    weight: 300,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
  },
  {
    id: 89,
    name: "muk",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 12,
    weight: 300,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
  },
  {
    id: 90,
    name: "shellder",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 3,
    weight: 40,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
  },
  {
    id: 91,
    name: "cloyster",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 15,
    weight: 1325,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
  },
  {
    id: 92,
    name: "gastly",
    type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
    height: 13,
    weight: 1,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
  },
  {
    id: 93,
    name: "haunter",
    type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
    height: 16,
    weight: 1,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
  },
  {
    id: 94,
    name: "gengar",
    type: { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
    height: 15,
    weight: 405,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  },
  {
    id: 95,
    name: "onix",
    type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    height: 88,
    weight: 2100,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
  },
  {
    id: 96,
    name: "drowzee",
    type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    height: 10,
    weight: 324,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
  },
  {
    id: 97,
    name: "hypno",
    type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    height: 16,
    weight: 756,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
  },
  {
    id: 98,
    name: "krabby",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 4,
    weight: 65,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
  },
  {
    id: 99,
    name: "kingler",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 13,
    weight: 600,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
  },
  {
    id: 100,
    name: "voltorb",
    type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    height: 5,
    weight: 104,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
  },
  {
    id: 101,
    name: "electrode",
    type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    height: 12,
    weight: 666,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
  },
  {
    id: 102,
    name: "exeggcute",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 4,
    weight: 25,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
  },
  {
    id: 103,
    name: "exeggutor",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 20,
    weight: 1200,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
  },
  {
    id: 104,
    name: "cubone",
    type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    height: 4,
    weight: 65,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
  },
  {
    id: 105,
    name: "marowak",
    type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    height: 10,
    weight: 450,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
  },
  {
    id: 106,
    name: "hitmonlee",
    type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    height: 15,
    weight: 498,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
  },
  {
    id: 107,
    name: "hitmonchan",
    type: { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
    height: 14,
    weight: 502,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
  },
  {
    id: 108,
    name: "lickitung",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 12,
    weight: 655,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
  },
  {
    id: 109,
    name: "koffing",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 6,
    weight: 10,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
  },
  {
    id: 110,
    name: "weezing",
    type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
    height: 12,
    weight: 95,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
  },
  {
    id: 111,
    name: "rhyhorn",
    type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    height: 10,
    weight: 1150,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
  },
  {
    id: 112,
    name: "rhydon",
    type: { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
    height: 19,
    weight: 1200,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
  },
  {
    id: 113,
    name: "chansey",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 11,
    weight: 346,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
  },
  {
    id: 114,
    name: "tangela",
    type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
    height: 10,
    weight: 350,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
  },
  {
    id: 115,
    name: "kangaskhan",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 22,
    weight: 800,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
  },
  {
    id: 116,
    name: "horsea",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 4,
    weight: 80,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
  },
  {
    id: 117,
    name: "seadra",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 12,
    weight: 250,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
  },
  {
    id: 118,
    name: "goldeen",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 6,
    weight: 150,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
  },
  {
    id: 119,
    name: "seaking",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 13,
    weight: 390,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
  },
  {
    id: 120,
    name: "staryu",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 8,
    weight: 345,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
  },
  {
    id: 121,
    name: "starmie",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 11,
    weight: 800,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
  },
  {
    id: 122,
    name: "mr-mime",
    type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    height: 13,
    weight: 545,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
  },
  {
    id: 123,
    name: "scyther",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 15,
    weight: 560,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
  },
  {
    id: 124,
    name: "jynx",
    type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
    height: 14,
    weight: 406,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
  },
  {
    id: 125,
    name: "electabuzz",
    type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    height: 11,
    weight: 300,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
  },
  {
    id: 126,
    name: "magmar",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 13,
    weight: 445,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
  },
  {
    id: 127,
    name: "pinsir",
    type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
    height: 15,
    weight: 550,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
  },
  {
    id: 128,
    name: "tauros",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 14,
    weight: 884,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
  },
  {
    id: 129,
    name: "magikarp",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 9,
    weight: 100,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
  },
  {
    id: 130,
    name: "gyarados",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 65,
    weight: 2350,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
  },
  {
    id: 131,
    name: "lapras",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 25,
    weight: 2200,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
  },
  {
    id: 132,
    name: "ditto",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 3,
    weight: 40,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  },
  {
    id: 133,
    name: "eevee",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 3,
    weight: 65,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  },
  {
    id: 134,
    name: "vaporeon",
    type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
    height: 10,
    weight: 290,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  },
  {
    id: 135,
    name: "jolteon",
    type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    height: 8,
    weight: 245,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  },
  {
    id: 136,
    name: "flareon",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 9,
    weight: 250,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  },
  {
    id: 137,
    name: "porygon",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 8,
    weight: 365,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
  },
  {
    id: 138,
    name: "omanyte",
    type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    height: 4,
    weight: 75,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
  },
  {
    id: 139,
    name: "omastar",
    type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    height: 10,
    weight: 350,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
  },
  {
    id: 140,
    name: "kabuto",
    type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    height: 5,
    weight: 115,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
  },
  {
    id: 141,
    name: "kabutops",
    type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    height: 13,
    weight: 405,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
  },
  {
    id: 142,
    name: "aerodactyl",
    type: { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
    height: 18,
    weight: 590,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
  },
  {
    id: 143,
    name: "snorlax",
    type: { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
    height: 21,
    weight: 4600,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
  },
  {
    id: 144,
    name: "articuno",
    type: { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
    height: 17,
    weight: 554,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
  },
  {
    id: 145,
    name: "zapdos",
    type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    height: 16,
    weight: 526,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
  },
  {
    id: 146,
    name: "moltres",
    type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
    height: 20,
    weight: 600,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
  },
  {
    id: 147,
    name: "dratini",
    type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
    height: 18,
    weight: 33,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
  },
  {
    id: 148,
    name: "dragonair",
    type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
    height: 40,
    weight: 165,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
  },
  {
    id: 149,
    name: "dragonite",
    type: { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
    height: 22,
    weight: 2100,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
  },
  {
    id: 150,
    name: "mewtwo",
    type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    height: 20,
    weight: 1220,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
  },
  {
    id: 151,
    name: "mew",
    type: { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
    height: 4,
    weight: 40,
    picture:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
  },
];
