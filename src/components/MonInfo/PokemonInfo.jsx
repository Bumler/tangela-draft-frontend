import React, { useContext } from "react";
import "./PokemonInfo.css";
import PokemonDraftContext from '../../context/PokemonDraftContext';

const PokemonInfo = () => {
  const {highlightedMon, availableDraftMons} = useContext(PokemonDraftContext);
  const pokemonData = availableDraftMons.find(pokemon => pokemon.name === highlightedMon);

  if (!pokemonData){ 
    return (
      <div className="centered-text">
        <h1>Select a Pokemon to see more info</h1>
      </div>
    );
  }

  const { name, gameData, displayData } = pokemonData;
  const { type1, type2, stats, abilities } = gameData;
  const { spriteUrl } = displayData;

  return (
    <div style={{ display: "flex", flexDirection: "column" }} >
      <div style={{ display: "flex" }}>
        <img src={spriteUrl} alt={name} style={{ width: "33%" }} className="pokemon-sprite" />
        <div style={{ width: "67%", display: "flex", flexDirection: "column" }}>
          <h2>{name}</h2>
          <div>
            Type: {type1}
            {type2 && `, ${type2}`}
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "33%", display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>Hp: {stats.hp}</div>
            <div>Atk: {stats.attack}</div>
            <div>Def: {stats.defense}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>SpAtk: {stats.specialAttack}</div>
            <div>SpDef: {stats.specialDefense}</div>
            <div>Spd: {stats.speed}</div>
          </div>
        </div>
        <div style={{ width: "67%" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {abilities.map((ability) => (
                <div key={ability.name}>{ability.name}</div>
                ))}
            </div>
            </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
