import React, { useContext } from 'react';
import './PokemonCard.css';
import PokemonDraftContext from '../../context/PokemonDraftContext';

const PokemonCard = (props) => {
  const { name, artUrl } = props.props;
  const { setHighlightedMon } = useContext(PokemonDraftContext);

  const handleClick = () => {
    setHighlightedMon(name);
  };

  return (
    // we might have room for type on non-mobile
    <div className="pokemon-card" onClick={handleClick}>
      <div className="pokemon-card-name">{name}</div>
      <img className="pokemon-card-image" src={artUrl} alt={name} />
    </div>
  );
};

export default PokemonCard;
