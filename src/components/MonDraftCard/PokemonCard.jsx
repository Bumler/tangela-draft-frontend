import React from 'react';
import './PokemonCard.css';

const PokemonCard = (props) => {
  const { name, type1, type2, artUrl } = props.props;
  console.log(props);
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-name">{name}</div>
      <img className="pokemon-card-image" src={artUrl} alt={name} />
      <div className="pokemon-card-type">
        {type1}
        {type2 && ` / ${type2}`}
      </div>
    </div>
  );
};

export default PokemonCard;
