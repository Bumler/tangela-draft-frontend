import './App.css';

import PokemonCarousel from './components/MonCarousel/PokemonCarousel';
import PokemonInfo from './components/MonInfo/PokemonInfo';

const pokemonData = [
  { "name": "Gengar", "type1": "Ghost", "type2": "Poison", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" },
  { "name": "Tyranitar", "type1": "Rock", "type2": "Dark", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png" },
  { "name": "Salamence", "type1": "Dragon", "type2": "Flying", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png" },
  { "name": "Lucario", "type1": "Fighting", "type2": "Steel", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png" },
  { "name": "Hippowdon", "type1": "Ground", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png" },
  { "name": "Magnezone", "type1": "Electric", "type2": "Steel", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png" },
  { "name": "Gliscor", "type1": "Ground", "type2": "Flying", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png" }
]

const pokemonData2 = [
  { "name": "Gyarados", "type1": "Water", "type2": "Flying", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png" },
  { "name": "Umbreon", "type1": "Dark", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png" },
  { "name": "Sceptile", "type1": "Grass", "type2": "Dragon", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png" },
  { "name": "Lucario", "type1": "Fighting", "type2": "Steel", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png" },
  { "name": "Miltank", "type1": "Normal", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png" },
  { "name": "Blastoise", "type1": "Water", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" },
  { "name": "Dragonite", "type1": "Dragon", "type2": "Flying", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png" },
  { "name": "Espeon", "type1": "Psychic", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png" },
  { "name": "Gardevoir", "type1": "Psychic", "type2": "Fairy", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png" },
  { "name": "Vaporeon", "type1": "Water", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png" }
]

const pokemonData3 = [
  { "name": "Alakazam", "type1": "Psychic", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png" },
  { "name": "Dragonite", "type1": "Dragon", "type2": "Flying", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png" },
  { "name": "Ursaring", "type1": "Normal", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png" },
  { "name": "Typhlosion", "type1": "Fire", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png" },
  { "name": "Gardevoir", "type1": "Psychic", "type2": "Fairy", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png" },
  { "name": "Sceptile", "type1": "Grass", "type2": "Dragon", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png" },
  { "name": "Milotic", "type1": "Water", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png" },
  { "name": "Electivire", "type1": "Electric", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png" },
  { "name": "Tangrowth", "type1": "Grass", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png" },
  { "name": "Honchkrow", "type1": "Dark", "type2": "Flying", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png" }
]

const selectedData = JSON.parse('{"name":"tangrowth","tier":"UU","gameData":{"type1":"grass","type2":null,"abilities":[{"name":"chlorophyll","description":"https://pokeapi.co/api/v2/ability/34/"},{"name":"leaf-guard","description":"https://pokeapi.co/api/v2/ability/102/"},{"name":"regenerator","description":"https://pokeapi.co/api/v2/ability/144/"}],"stats":{"hp":100,"attack":100,"defense":125,"specialAttack":110,"specialDefense":50,"speed":50}},"displayData":{"artUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png","spriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/465.png","backSpriteUrl":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/465.png"}}');

function App() {
  return (
    <div className="App">
      <PokemonCarousel pokemonData={pokemonData} />
      <PokemonCarousel pokemonData={pokemonData2} /> 
      <PokemonCarousel pokemonData={pokemonData3} />  
      <PokemonInfo pokemonData={selectedData} />
    </div>
  );
}

export default App;
