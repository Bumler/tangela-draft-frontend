import React, { useContext } from 'react';
import Slider from "react-slick";
import PokemonCard from "../MonDraftCard/PokemonCard";
import PokemonDraftContext from '../../context/PokemonDraftContext';
import "./PokemonCarousel.css";

const PokemonCarousel = ({ tier }) => {
    const {availableDraftMons} = useContext(PokemonDraftContext);
    
    if (!availableDraftMons) return (<div>Loading...</div>);

    // Filter the pokemonData by the given tier and map to an object with name and artUrl
    const pokemonList = availableDraftMons
      .filter(pokemon => pokemon.tier === tier)
      .map(pokemon => ({
        name: pokemon.name,
        artUrl: pokemon.displayData.artUrl
      }));

    const settings = {
      speed: 500,
      variableWidth: true,
      cssEase: "linear"
    };

    // todo style for desktop

    return (
      <Slider className="carousel-container" {...settings}>
        {pokemonList.map((data) => (
          <PokemonCard key={data.name} props={data} />
        ))}
      </Slider>
    );
  }

export default PokemonCarousel;