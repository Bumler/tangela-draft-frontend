import React, { useContext } from 'react';
import './PokemonCard.css';
import PokemonDraftContext from '../../context/PokemonDraftContext';

const PokemonCard = (props) => {
  const { name, type1, type2, artUrl } = props.props;
  const { setHighlightedMon } = useContext(PokemonDraftContext);

  const handleClick = () => {
    setHighlightedMon(name);
  };

  //console.log(props);
  return (
    // we might have room for type on non-mobile
    <div className="pokemon-card" onClick={handleClick}>
      <div className="pokemon-card-name">{name}</div>
      <img className="pokemon-card-image" src={artUrl} alt={name} />
      {/* <div className="pokemon-card-type">
        {type1}
        {type2 && ` ${type2}`}
      </div> */} 
    </div>
  );
};

export default PokemonCard;
