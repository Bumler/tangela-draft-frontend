import React, { useContext } from "react";
import "./PokemonInfo.css";
import "../../App.css";
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

  // it will be still and translucent if it is drafted else bouncing
  const spriteClass = pokemonData.isDrafted ? "translucent" : "pokemon-sprite"

  const { name, gameData, displayData } = pokemonData;
  const { type1, type2, stats, abilities } = gameData;
  const { spriteUrl } = displayData;

  return (
    <div style={{ display: "flex", flexDirection: "column" }} >
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }} />
        <img src={spriteUrl} alt={name} style={{ width: "25%" }} className={spriteClass} />
        <div style={{ width: "5%" }} />
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          <h2 style={{ paddingTop: "10px" }}>{name}</h2>
          {pokemonData.isDrafted ? (<div>Selected by {pokemonData.trainerId}</div>) : null } 
          <div>
            Type: {type1}
            {type2 && `, ${type2}`}
          </div>
        </div>
        <div style={{ width: "10%" }} />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "5%" }} />
        <div style={{ width: "40%", display: "flex", justifyContent: "space-between" }}>
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
        <div style={{ width: "40%" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {abilities.map((ability) => (
                <div key={ability.name}>{ability.name}</div>
                ))}
            </div>
            </div>
      </div>
      <div style={{ width: "10%" }} />
    </div>
  );
};

export default PokemonInfo;
