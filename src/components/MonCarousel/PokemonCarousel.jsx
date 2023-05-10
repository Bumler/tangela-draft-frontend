import React from "react";
import Slider from "react-slick";
import PokemonCard from "../MonDraftCard/PokemonCard";

const PokemonCarousel = ({ pokemonData }) => {
    const settings = {
      speed: 500,
      slidesToScroll: 1,
      variableWidth: true,
      cssEase: "linear",
      infinite: false
    };

    // todo style for desktop

    return (
      <Slider {...settings}>
        {pokemonData.map((data) => (
          <PokemonCard key={data.name} props={data} />
        ))}
      </Slider>
    );
  }

export default PokemonCarousel;