import React, { useContext } from 'react';
import './PokemonCard.css';
import PokemonDraftContext from '../../context/PokemonDraftContext';

const BackspriteCard = (props) => {
  const { name, artUrl } = props;
  const { setHighlightedMon } = useContext(PokemonDraftContext);

  const handleClick = () => {
    setHighlightedMon(name);
  };

  return (
    // we might have room for type on non-mobile
    <div className="pokemon-card" onClick={handleClick}>
      <img className="pokemon-card-image" src={artUrl} alt={name} />
    </div>
  );
};

export default BackspriteCard;
