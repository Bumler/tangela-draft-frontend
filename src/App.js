import './App.css';

import PokemonCarousel from './components/MonCarousel/PokemonCarousel';

const pokemonData = [
  { "name": "Tangela", "type1": "Grass", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png" },
  { "name": "Pikachu", "type1": "Electric", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
  { "name": "Charmander", "type1": "Fire", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  { "name": "Squirtle", "type1": "Water", "type2": null, "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  { "name": "Bulbasaur", "type1": "Grass", "type2": "Poison", "artUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
];

function App() {
  return (
    <div className="App">
      <PokemonCarousel pokemonData={pokemonData} />  
    </div>
  );
}

export default App;
