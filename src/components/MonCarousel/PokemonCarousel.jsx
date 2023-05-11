import React from "react";
import Slider from "react-slick";
import PokemonCard from "../MonDraftCard/PokemonCard";
import "./PokemonCarousel.css";

const PokemonCarousel = ({ pokemonData }) => {
    const settings = {
      speed: 500,
      variableWidth: true,
      cssEase: "linear"
    };

    // todo style for desktop

    return (
      <Slider className="carousel-container" {...settings}>
        {pokemonData.map((data) => (
          <PokemonCard key={data.name} props={data} />
        ))}
      </Slider>
    );
  }

export default PokemonCarousel;