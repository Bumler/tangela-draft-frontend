import React, { useContext } from 'react';
import Slider from "react-slick";
import PokemonDraftContext from '../../context/PokemonDraftContext';
import BackspriteCard from '../MonDraftCard/BackspriteCard';
import "./PokemonCarousel.css";

const BackspriteCarousel = () => {
    const {availableDraftMons, selectedTrainerId} = useContext(PokemonDraftContext);
    
    if (!availableDraftMons) return (<div>Loading...</div>);

    // Filter the pokemonData by the given tier and map to an object with name and artUrl
    const pokemonList = availableDraftMons
      .filter(pokemon => pokemon.isDrafted && pokemon.trainerId === selectedTrainerId)
      .map(pokemon => ({
        name: pokemon.name,
        artUrl: pokemon.displayData.backSpriteUrl
      }));

    const settings = {
      speed: 500,
      variableWidth: true,
      cssEase: "linear",
      infinite: false
    };

    // todo style for desktop

    return (
      <Slider className="carousel-container" {...settings}>
        {pokemonList.map((data) => (
          <BackspriteCard key={data.name} name={data.name} artUrl={data.artUrl} />
        ))}
      </Slider>
    );
  }

export default BackspriteCarousel;